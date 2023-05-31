import {ChangeEvent, FC, MutableRefObject} from 'react';
import styles from './MyPhotosHeader.module.scss';
import ArrowRight from '../../../../../assets/img/rightArrow.png'
import {Link} from "react-router-dom";
import cn from "clsx";

interface IPhotosHeaderProps {
  count: number
}

export const MyPhotosHeader: FC<IPhotosHeaderProps> = ({count}) => {

  return (
    <div className={styles.header}>
      <div className={styles.albumTitle}>
        <div className={styles.title}>
          <span className={styles.myPhotos}>Мои фотографии </span>
          <span className={styles.count}> {count}</span>
        </div>
      </div>
    </div>
  );
};