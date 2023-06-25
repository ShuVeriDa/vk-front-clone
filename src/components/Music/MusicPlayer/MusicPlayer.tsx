import {FC, useContext, useEffect, useState} from 'react';
import styles from './MusicPlayer.module.scss';
import {serverUrl} from "../../../utils/serverUrl";
import {
  NextMusicSVG,
  PauseMusicSVG,
  PlayMusicSVG,
  PrevMusicSVG,
  RandomMusicSVG,
  RepeatMusicSVG
} from "../../SvgComponent";
import {MusicItem} from "../Music/MusicItems/MusicItem/MusicItem";
import MusicContext from "../../../context/MusicContext";

interface IMusicPlayerProps {}

export const MusicPlayer: FC<IMusicPlayerProps> = (

) => {
  const { myMusic, isSuccess, audioRef, setCurrentAudio, currentAudio, setDuration, setCurrentTime, playAudio, pauseAudio, setIsPlaying, isPlaying} = useContext(MusicContext)!

  const [isRandom, setIsRandom] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)

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
    setIsRepeat(!isRepeat)
    await playAudio();
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

        <MusicItem music={myMusic!}
                   isPlayer={true}
        />

        <div className={styles.options}>
          <button onClick={() => setIsRandom(!isRandom)}
                  className={styles.random}
          ><RandomMusicSVG styles={isRandom ? styles.activeRandom : ''}/></button>
          <button onClick={handleRepeat}
                  className={styles.repeat}
          ><RepeatMusicSVG styles={isRepeat ? styles.activeRepeat : ''} /></button>
        </div>
      </div>

    </div>
  );
};
