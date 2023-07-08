import {FC} from 'react';
import styles from './PlaylistHeader.module.scss';
import {ClearSearchValueSVG} from "../../../../SvgComponent";
interface IPlaylistHeaderProps {
  title: string
  onClickClose: () => void
}

export const PlaylistHeader: FC<IPlaylistHeaderProps> = ({title, onClickClose}) => {
  return (
    <header className={styles.header}>
     <div className={styles.title}>
       {title}
     </div>
      <div className={styles.close}>
        <ClearSearchValueSVG onClick={onClickClose}/>
      </div>
    </header>
  );
};