import {FC} from 'react';
import styles from './AlbumItem.module.scss';
import img from '../../../../assets/img/img.jpg'
interface IPhotoItemProps {
}

export const AlbumItem: FC<IPhotoItemProps> = () => {
  return (
    <div className={styles.albumItem}>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div className={styles.description}>
            <div className={styles.title}>Фотографии на стене</div>
            <div className={styles.count}> count</div>
        </div>
      </div>

    </div>
  );
};