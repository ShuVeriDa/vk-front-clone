import { FC, useEffect, useRef, useState } from 'react';
import styles from './MusicPlayer.module.scss';
import { useMusicQuery } from "../../../react-query/useMusicQuery";
import { serverUrl } from "../../../utils/serverUrl";
import {
  AudioIconSVG,
  NextMusicSVG,
  PauseMusicSVG,
  PlayMusicSVG,
  PrevMusicSVG,
  RepeatMusicSVG
} from "../../SvgComponent";

interface IMusicPlayerProps {}

export const MusicPlayer: FC<IMusicPlayerProps> = () => {
  const [currentAudio, setCurrentAudio] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null);

  const { getMyMusic } = useMusicQuery();
  const { data: myMusic, isSuccess } = getMyMusic;

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
    if(!isRandom) {
      setCurrentAudio((prev) => prev === myMusic?.length! - 1 ? 0 : prev + 1)
      audioRef.current?.load();
    }

    if(isRandom) {
      randomAudio()
    }

    if(isPlaying) {
      await playAudio()
    }
  }

  const prevAudio = async () => {
    if(!isRandom) {
      setCurrentAudio((prev) => prev === 0 ? myMusic?.length! - 1 : prev - 1)
      audioRef.current?.load();
    }

    if(isRandom) {
      randomAudio()
    }

    if(isPlaying) {
      await playAudio()
    }
  }

  const handleRepeat = async () => {
    audioRef.current!.currentTime = 0;
    await playAudio();
  };



  console.log(isSuccess && myMusic[currentAudio]?.musicUrl);
  console.log(isPlaying);

  return (
    <div className={styles.wrapper}>
      <div className={styles.musicController}>
        <audio ref={audioRef}>
          {isSuccess && <source src={serverUrl(myMusic[currentAudio]?.musicUrl)} type='audio/mpeg'/>}
        </audio>
        <button onClick={playOrPauseAudio}>{isPlaying ? <PauseMusicSVG /> : <PlayMusicSVG/>}</button>
        <button onClick={prevAudio}><PrevMusicSVG /></button>
        <button onClick={nextAudio}><NextMusicSVG /></button>
      </div>
     <div className={styles.musicItem}>
       <div className={styles.icon}><AudioIconSVG /></div>
       <div className={styles.info}>
         <span>{isSuccess && myMusic![currentAudio].title}</span>
         <span>{isSuccess && myMusic![currentAudio].artist}</span>
       </div>
     </div>
      <div className={styles.options}>
        <button onClick={handleRepeat}><RepeatMusicSVG /></button>
      </div>
      <div>
        <button onClick={() => setIsRandom(!isRandom)}>random</button>
      </div>

    </div>
  );
};
