import {FC, MutableRefObject} from 'react';
import {MusicHeader} from "./MusicHeader/MusicHeader";
import {MusicSearch} from "./MusicSearch/MusicSearch";
import {MusicItems} from "./MusicItems/MusicItems";
import styles from './Music.module.scss';
import {IMusicFull} from "../../../types/music.interface";
import {MusicNotFound} from "./MusicNotFound/MusicNotFound";

interface IMusicProps {
  myMusic?: IMusicFull[]
  foundMusic?: IMusicFull[]
  setCurrentTime: (number: number) => void
  setCurrentAudio: (number: number) => void
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration: number
  value: string
  status?: "error" | "success" | "loading"
  currentTime: number
  isSuccess: boolean
  isSuccessFoundMusic: boolean
  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
  setValue: (value: string) => void
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
    pauseAudio, playAudio, setIsPlaying, isPlaying, setValue, value, foundMusic, isSuccessFoundMusic, status
  }
) => {

  const isFound = isSuccessFoundMusic && foundMusic?.length! > 0 && value.length > 0
  const isFoundMusic = isFound ? foundMusic! : myMusic
  const title = isSuccessFoundMusic && isFound ? 'Все аудиозаписи' : 'Мои треки'

  return (
    <div className={styles.wrapper}>
      <MusicHeader/>
      <MusicSearch value={value}
                   setValue={setValue}
                   status={status}
      />
      {isSuccessFoundMusic && foundMusic?.length! === 0 && value.length > 0
        ? <MusicNotFound title={value}/>
        : <MusicItems title={title}
                      music={isFoundMusic!}
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
        />}

    </div>
  );
};