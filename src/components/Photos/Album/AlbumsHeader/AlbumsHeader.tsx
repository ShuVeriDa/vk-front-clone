import {FC} from 'react';
import styles from './AlbumsHeader.module.scss';

interface IPhotosHeaderProps {
  onClickOpen: () => void
}

export const AlbumsHeader: FC<IPhotosHeaderProps> = ({onClickOpen}) => {
  return (
    <div className={styles.header}>
      <div className={styles.albumTitle}>
        <span className={styles.title}>Мои альбомы <span className={styles.count}>count</span></span>
      </div>
      <div className={styles.buttons}>
        <ul>
          <li onClick={onClickOpen}>Создать альбом</li>
          <li>Добавить изображение</li>
        </ul>
      </div>
    </div>
  );
};