import {FC} from 'react';
import styles from './PlaylistInfo.module.scss';
interface IPlaylistInfoProps {
  title: string
  name: string
}

export const PlaylistInfo: FC<IPlaylistInfoProps> = ({title, name}) => {
  return (
    <div className={styles.info}>
     <span className={styles.title}>{title}</span>
     <span className={styles.name}>{name}</span>
    </div>
  );
};