import {FC, MutableRefObject, useState} from 'react';
import {MusicHeader} from "./MusicHeader/MusicHeader";
import {MusicSearch} from "./MusicSearch/MusicSearch";
import {MusicItems} from "./MusicItems/MusicItems";
import styles from './Music.module.scss';
import {IMusicFull} from "../../../types/music.interface";
import {useMusicQuery} from "../../../react-query/useMusicQuery";
import {MusicNotFound} from "./MusicNotFound/MusicNotFound";

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
  const [value, setValue] = useState('')
  const {searchMusic} = useMusicQuery(undefined, {title: value})
  const {data: foundMusic, isSuccess: isSuccessFoundMusic, status} = searchMusic

  const isFoundMusic = isSuccessFoundMusic && foundMusic.length > 0 && value.length > 0 ? foundMusic : myMusic
  const title = isSuccessFoundMusic && foundMusic.length > 0 && value.length > 0 ? 'Все аудиозаписи' : 'Мои треки'


  return (
    <div className={styles.wrapper}>
      <MusicHeader/>
      <MusicSearch value={value}
                   setValue={setValue}
                   status={status}
      />
      {isSuccessFoundMusic && foundMusic.length === 0 && value.length > 0 ? <MusicNotFound title={value}/> :
        <MusicItems title={title}
                    music={isFoundMusic}
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