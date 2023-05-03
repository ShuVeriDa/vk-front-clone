import {FC} from 'react';
import styles from './AlbumItemPage.module.scss';
import {Link, useParams} from "react-router-dom";
import {PhotosHeader} from "../../components/Photos/Photos/PhotosHeader/PhotosHeader";
import {PhotoItem} from "../../components/Photos/Photos/PhotoItem/PhotoItem";
interface IPhotosProps {
}

export const AlbumItemPage: FC<IPhotosProps> = () => {
  const {id} = useParams()
  return (
    <div className={styles.wrapper}>
      <PhotosHeader />
      <div className={styles.main}>
        <div className={styles.titleAndDescription}>
          <span className={styles.title}>Album title</span>
          <span className={styles.description}>Album description</span>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>3 фотографии</li>
            <li> <Link to={""} >Редактировать альбом </Link></li>
          </ul>
        </div>
        <div className={styles.photoItems}>
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
        </div>

      </div>
    </div>
  );
};