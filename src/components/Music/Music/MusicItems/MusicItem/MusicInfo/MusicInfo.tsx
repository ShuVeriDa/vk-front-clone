import {ChangeEvent, FC, useContext, useRef} from 'react';
import styles from './MusicInfo.module.scss';
import {IMusicFull} from "../../../../../../types/music.interface";
import MusicContext from "../../../../../../context/MusicContext";
import {Duration} from "../../../../Duration/Duration";


interface IMusicInfoProps {
  isSuccess: boolean
  music: IMusicFull[]
  musicItem: IMusicFull
  isPlayer: boolean
}

export const MusicInfo: FC<IMusicInfoProps> = (
  {
    musicItem,
    music,
    isPlayer,
  }
) => {
  const { isSuccess,
    audioRef,
    currentAudio,
    duration,
    currentTime,
    setCurrentTime,
    progressBarRef
  } = useContext(MusicContext)!



  const handleProgressBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.currentTarget.value);
    setCurrentTime(time);
    audioRef.current!.currentTime = time;
  };
  
  return (
    <div className={styles.info}>
            <span className={styles.title}>
              {music && <> {isSuccess && music![currentAudio]?.title}</>}
              {musicItem?.title}
            </span>
      <span className={styles.artist}>
          {music && <>{isSuccess && music![currentAudio]?.artist} </>}
        {musicItem?.artist}
            </span>
      {isPlayer && <Duration />}
    </div>
  );
};