import {FC, MutableRefObject} from 'react';
import {MusicHeader} from "./MusicHeader/MusicHeader";
import {MusicSearch} from "./MusicSearch/MusicSearch";
import {MusicItems} from "./MusicItems/MusicItems";
import styles from './Music.module.scss';
import {IMusicFull} from "../../../types/music.interface";

interface IMusicProps {
  myMusic: IMusicFull[]
  setCurrentTime: (number: number) => void
  setCurrentAudio: (number: number) => void
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration: number
  currentTime: number
  isSuccess: boolean
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  playAudio: () => void
  pauseAudio: () => void
}

export const Music: FC<IMusicProps> = (
  {
    myMusic,
    currentAudio,
    currentTime,
    audioRef,
    duration,
    isSuccess,
    setCurrentTime,
    setCurrentAudio,
    pauseAudio, playAudio, setIsPlaying, isPlaying
  }
) => {
  return (
    <div className={styles.wrapper}>
      <MusicHeader/>
      <MusicSearch/>
      <MusicItems title={'Мои треки'}
                  music={myMusic}
                  audioRef={audioRef}
                  currentAudio={currentAudio}
                  duration={duration}
                  currentTime={currentTime}
                  isSuccess={isSuccess}
                  isPlaying={isPlaying}
                  setCurrentTime={setCurrentTime}
                  setCurrentAudio={setCurrentAudio}
                  setIsPlaying={setIsPlaying}
                  playAudio={playAudio}
                  pauseAudio={pauseAudio}
      />
    </div>
  );
};