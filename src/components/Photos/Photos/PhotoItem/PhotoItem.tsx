import {FC} from 'react';
import styles from './PhotoItem.module.scss';
import {IPhotoAlbum} from "../../../../types/photoAlbum.interface";
import {useNavigate} from "react-router-dom";

interface IPhotoItemProps {

}

export const PhotoItem: FC<IPhotoItemProps> = ({}) => {
  const navigate = useNavigate()
  // const isPhotos = album.photos.length > 0
  // const blackColor = !isPhotos ? {color: "#1d3a5c"} : {}
  // const albumImg = avatarUrl(album.photos[0]?.photoUrl)
  return (
    <div className={styles.photoItem}
      /*onClick={() => navigate(`/album/${photo.id}`)}*/
    >
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={''} alt=""/>
          </div>
        </div>
      </div>

    </div>
  );
};