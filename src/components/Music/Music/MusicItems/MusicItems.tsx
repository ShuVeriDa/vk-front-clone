import {FC, MutableRefObject} from 'react';
import styles from './MusicItems.module.scss';
import {IMusicFull} from "../../../../types/music.interface";
import {MusicItem} from "./MusicItem/MusicItem";

interface IMusicItemsProps {
  title: 'Мои треки' | "Недавно прослушанные"
  music: IMusicFull[]
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration: number
  currentTime: number
  isSuccess: boolean
  myMusic?: IMusicFull[]
  setCurrentTime: (number: number) => void
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
    setCurrentTime
  }
) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.musicItems}>
        {music?.map(m => <MusicItem key={m.id}
                                    setCurrentTime={setCurrentTime}
                                    audioRef={audioRef}
                                    currentAudio={currentAudio}
                                    currentTime={currentTime}
                                    isSuccess={isSuccess}
                                    musicItem={m}
                                    classes={styles.musicItem}/>
        )}
      </div>
    </div>
  );
};