import {FC} from 'react';
import styles from './PhotoItem.module.scss';
import img from '../../../assets/img/img.jpg'
interface IPhotoItemProps {
}

export const PhotoItem: FC<IPhotoItemProps> = () => {
  return (
    <div className={styles.photoItem}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>

    </div>
  );
};