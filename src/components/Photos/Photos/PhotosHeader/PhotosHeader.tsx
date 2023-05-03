import {FC} from 'react';
import styles from './PhotosHeader.module.scss';
import ArrowRight from '../../../../assets/img/rightArrow.png'
import {Link} from "react-router-dom";

interface IPhotosHeaderProps {
  title: string
  count: number
}

export const PhotosHeader: FC<IPhotosHeaderProps> = ({title, count}) => {

  return (
    <div className={styles.header}>
      <div className={styles.albumTitle}>
        <div className={styles.title}>
          <span className={styles.myPhotos}>
            <Link to={'/albums'}>Мои фотографии </Link>
          </span>
          <img src={ArrowRight} alt=""/>
          <span className={styles.albumName}>
            {title}
          </span>
          <span className={styles.count}>{count}</span></div>
      </div>
      <div className={styles.buttons}>
        <ul>
          <li>Добавить изображение</li>
        </ul>
      </div>
    </div>
  );
};