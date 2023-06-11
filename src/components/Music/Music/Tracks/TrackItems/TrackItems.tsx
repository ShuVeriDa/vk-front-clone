import {FC} from 'react';
import styles from './TrackItems.module.scss';
import {ShuffleMusicSVG} from "../../../../SvgComponent";
import {IMusicFull} from "../../../../../types/music.interface";

interface ITrackItemsProps {

}

export const TrackItems: FC<ITrackItemsProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Треки</span>
      </div>
      <div className={styles.shuffleMusic}>
        <div className={styles.svg}>
         <ShuffleMusicSVG />
        </div>
        <div className={styles.shuffleAll}>
          Перемешать все
        </div>
      </div>
    </div>
  );
};