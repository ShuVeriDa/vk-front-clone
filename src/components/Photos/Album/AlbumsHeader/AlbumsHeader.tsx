import {FC} from 'react';
import styles from './AlbumsHeader.module.scss';

interface IPhotosHeaderProps {
}

export const AlbumsHeader: FC<IPhotosHeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.albumTitle}>
        <span className={styles.title}>Мои альбомы <span className={styles.count}>count</span></span>
      </div>
      <div className={styles.buttons}>
        <ul>
          <li>Создать альбом</li>
          <li>Добавить изображение</li>
        </ul>
      </div>
    </div>
  );
};