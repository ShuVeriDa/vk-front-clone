import {FC} from 'react';
import styles from './PhotosHeader.module.scss';
import ArrowRight from '../../../../assets/img/rightArrow.png'
import {Link} from "react-router-dom";
import cn from "clsx";

interface IPhotosHeaderProps {
  title: string
  count?: number
  edit?: boolean
}

export const PhotosHeader: FC<IPhotosHeaderProps> = ({title, count, edit}) => {

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
          {edit && <>
            <img src={ArrowRight} alt=""/>
            <span>Редактирование альбома</span>
          </>}
          <span className={styles.count}>{count}</span></div>
      </div>
      <div className={styles.buttons}>
        <ul>
          <li className={cn(edit ? styles.remove : styles.add)}>
            {edit ? 'Удалить альбом' : 'Добавить изображение'}
          </li>
        </ul>
      </div>
    </div>
  );
};