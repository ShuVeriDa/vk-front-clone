import {FC, useContext} from 'react';
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
  const { isSuccess,currentAudio} = useContext(MusicContext)!

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