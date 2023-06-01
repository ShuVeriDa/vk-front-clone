import {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import styles from './MusicPlayer.module.scss';
import {useMusicQuery} from "../../../react-query/useMusicQuery";
import {serverUrl} from "../../../utils/serverUrl";
import {
  AudioIconSVG,
  NextMusicSVG,
  PauseMusicSVG,
  PlayMusicSVG,
  PrevMusicSVG, RandomMusicSVG,
  RepeatMusicSVG
} from "../../SvgComponent";

interface IMusicPlayerProps {
}

export const MusicPlayer: FC<IMusicPlayerProps> = () => {
  const [currentAudio, setCurrentAudio] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false)
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const {getMyMusic} = useMusicQuery();
  const {data: myMusic, isSuccess} = getMyMusic;

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnded);
      }
    };
  }, []);

  const pauseAudio = async () => {
    await audioRef.current?.pause();
    setIsPlaying(false);
  }

  const playAudio = async () => {
    await audioRef.current?.play();
    setIsPlaying(true);
  }

  const playOrPauseAudio = async () => {
    if (isPlaying) {
      await pauseAudio()
    } else {
      await playAudio()
    }
  };

  const getRandomMusicIndex = () => {
    return Math.floor(Math.random() * myMusic?.length!);
  };

  const randomAudio = () => {
    const random = getRandomMusicIndex();
    setCurrentAudio(random);
    audioRef.current?.load();
  };

  const nextAudio = async () => {
    if (!isRandom) {
      setCurrentAudio((prev) => prev === myMusic?.length! - 1 ? 0 : prev + 1)
      audioRef.current?.load();
    }

    if (isRandom) {
      randomAudio()
    }

    if (isPlaying) {
      await playAudio()
    }
  }

  const prevAudio = async () => {
    if (!isRandom) {
      setCurrentAudio((prev) => prev === 0 ? myMusic?.length! - 1 : prev - 1)
      audioRef.current?.load();
    }

    if (isRandom) {
      randomAudio()
    }

    if (isPlaying) {
      await playAudio()
    }
  }

  const handleRepeat = async () => {
    audioRef.current!.currentTime = 0;
    await playAudio();
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = String(minutes).padStart(1, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    };

    const updateDuration = () => {
      setDuration(audioRef.current?.duration || 0);
    };

    audioRef.current?.addEventListener('timeupdate', updateTime);
    audioRef.current?.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audioRef.current?.removeEventListener('timeupdate', updateTime);
      audioRef.current?.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const handleProgressBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.currentTarget.value);
    setCurrentTime(time);
    audioRef.current!.currentTime = time;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.musicController}>
          <audio ref={audioRef}>
            {isSuccess && <source src={serverUrl(myMusic[currentAudio]?.musicUrl)} type='audio/mpeg'/>}
          </audio>
          <button onClick={playOrPauseAudio}
                  className={styles.playOrPause}
          >
            {isPlaying ? <PauseMusicSVG/> : <PlayMusicSVG/>}
          </button>
          <div className={styles.prevAndNext}>
            <button onClick={prevAudio}
                    className={styles.prev}
            ><PrevMusicSVG/></button>
            <button onClick={nextAudio}
                    className={styles.next}
            ><NextMusicSVG/></button>
          </div>

        </div>
        <div className={styles.musicItem}>
          <div className={styles.icon}><AudioIconSVG/></div>
          <div className={styles.info}>
            <span className={styles.title}>{isSuccess && myMusic![currentAudio].title}</span>
            <span className={styles.artist}>{isSuccess && myMusic![currentAudio].artist}</span>
            <div className={styles.input}>
              <input
                className={styles.duration}
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleProgressBarChange}
                ref={progressBarRef}
                style={{
                  background: `linear-gradient(to right,  #447BBA ${currentTime / duration * 100}%, #edeef0 ${currentTime / duration * 100}%)`
                }}
              />
            </div>

          </div>
          <div className={styles.time}>
            <span>{formatTime(currentTime)}</span>
          </div>
        </div>
        <div className={styles.options}>
          <button onClick={() => setIsRandom(!isRandom)}
            className={styles.random}
          ><RandomMusicSVG/></button>
          <button onClick={handleRepeat}
          className={styles.repeat}
          ><RepeatMusicSVG/></button>
        </div>
      </div>

    </div>
  );
};
