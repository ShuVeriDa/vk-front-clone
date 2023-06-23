import {FC} from 'react';
import styles from './PlaylistHeader.module.scss';
import {ClearSearchValueSVG} from "../../../../SvgComponent";
interface IPlaylistHeaderProps {
  title: string
}

export const PlaylistHeader: FC<IPlaylistHeaderProps> = ({title}) => {
  return (
    <header className={styles.header}>
     <div className={styles.title}>
       {title}
     </div>
      <div className={styles.close}>
        <ClearSearchValueSVG />
      </div>
    </header>
  );
};