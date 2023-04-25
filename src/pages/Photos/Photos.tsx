import {FC} from 'react';
import styles from './Photos.module.scss';
import {PhotosHeader} from "../../components/Photos/PhotosHeader/PhotosHeader";
import {PhotoItem} from "../../components/Photos/PhotoItem/PhotoItem";

interface IPhotosProps {
}

export const PhotosPage: FC<IPhotosProps> = () => {
  return (
    <div className={styles.wrapper}>
      <PhotosHeader />
      <div className={styles.main}>
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
      </div>
    </div>
  );
};