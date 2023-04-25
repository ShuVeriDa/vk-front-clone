import {FC} from 'react';
import styles from './Photos.module.scss';
import {Link} from "react-router-dom";

interface IPhotosProps {
}

export const PhotosPage: FC<IPhotosProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.albomTitle}>
          <span className={styles.title}>Мои альбомы <span className={styles.count}>count</span></span>
        </div>
        <div className={styles.buttons}>
          <ul>
            <li>Создать альбом</li>
            <li>Добавить изображение</li>
          </ul>
        </div>
      </div>
      <div className={styles.main}>

      </div>
    </div>
  );
};