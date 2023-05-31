import { FC, useEffect, useRef, useState } from 'react';
import styles from './MusicPlayer.module.scss';
import { useMusicQuery } from "../../../react-query/useMusicQuery";
import { serverUrl } from "../../../utils/serverUrl";
import {NextMusicSVG, PauseMusicSVG, PlayMusicSVG, PrevMusicSVG} from "../../SvgComponent";

interface IMusicPlayerProps {}

export const MusicPlayer: FC<IMusicPlayerProps> = () => {
  const [currentAudio, setCurrentAudio] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
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


  const playOrPauseAudio = async () => {
    if (isPlaying) {
      await audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      await audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const nextAudio = async () => {
    setCurrentAudio((prev) => prev === myMusic?.length! - 1 ? 0 : prev + 1)
    audioRef.current?.load();

    if(isPlaying) {
      await audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  const prevAudio = async () => {
    setCurrentAudio((prev) => prev === 0 ? myMusic?.length! - 1 : prev - 1)
    audioRef.current?.load();

    if(isPlaying) {
      await audioRef.current?.play();
      setIsPlaying(true);
    }
  }

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
       <div><img src="" alt=""/></div>
       <div>
         <span>{myMusic![currentAudio].title}</span>
         <span>{myMusic![currentAudio].artist}</span>
       </div>
     </div>

      <h2>{isSuccess && myMusic![currentAudio].title}</h2>

    </div>
  );
};
