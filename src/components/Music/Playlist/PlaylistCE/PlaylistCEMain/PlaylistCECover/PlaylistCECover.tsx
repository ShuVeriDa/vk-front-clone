import {FC} from 'react';
import styles from './PlaylistCECover.module.scss';
interface IPlaylistCoverProps {
}

export const PlaylistCECover: FC<IPlaylistCoverProps> = () => {
  return (
    <div className={styles.cover}>
      <span className={styles.plus}>+</span>
      <span className={styles.title}>Обложка</span>
    </div>
  );
};