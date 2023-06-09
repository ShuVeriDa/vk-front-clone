import {FC} from 'react';
import styles from './MusicNotFound.module.scss';
import {NotFoundMusicSVG} from "../../../SvgComponent";
interface IMusicNotFoundProps {
  title: string
}

export const MusicNotFound: FC<IMusicNotFoundProps> = ({ title}) => {
  return (
    <div className={styles.wrapper}>
     <div className={styles.svg}><NotFoundMusicSVG /></div>
      <div className={styles.info}>
        <p>По запросу не найдено {title} ни одной аудиозаписи</p>
      </div>
    </div>
  );
};