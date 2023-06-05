import {FC, MutableRefObject} from 'react';
import styles from './MusicItems.module.scss';
import {IMusicFull} from "../../../../types/music.interface";
import {MusicItem} from "./MusicItem/MusicItem";
import cn from "clsx";

interface IMusicItemsProps {
  title: 'Мои треки' | "Недавно прослушанные"
  music: IMusicFull[]
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration: number
  currentTime: number
  isSuccess: boolean
  myMusic?: IMusicFull[]
  isPlaying: boolean
  setCurrentTime: (number: number) => void
  setCurrentAudio: (number: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  playAudio: () => void
  pauseAudio: () => void
}

export const MusicItems: FC<IMusicItemsProps> = (
  {
    title,
    music,
    myMusic,
    currentTime,
    currentAudio,
    audioRef,
    duration,
    isSuccess,
    setCurrentTime,
    setCurrentAudio, pauseAudio, playAudio, setIsPlaying, isPlaying
  }
) => {

  const onClickHandler = (i: number) => {
    if (currentAudio !== i) {
      setIsPlaying(true)
      setCurrentAudio(i)
      audioRef.current?.load();
      playAudio()
    }

    if (currentAudio === i) {
      setCurrentAudio(i)
      if (isPlaying) {
        pauseAudio()
      }
      if (!isPlaying) {
        playAudio()
      }
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.musicItems}>
        {music?.map((m, i) => {
            return <div className={cn(styles.musicItemWrapper, i === currentAudio && styles.active)}
                        onClick={() => onClickHandler(i)}
            >
              <MusicItem key={m.id}
                         setCurrentTime={setCurrentTime}
                         setCurrentAudio={setCurrentAudio}
                         audioRef={audioRef}
                         currentAudio={currentAudio}
                         currentTime={currentTime}
                         isSuccess={isSuccess}
                         musicItem={m}
                         classes={styles.musicItem}
                         index={i}
                         isPlayer={false}
              />
            </div>
          }
        )}
      </div>
    </div>
  );
};