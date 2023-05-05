import {FC} from 'react';
import styles from './PhotoItem.module.scss';
import {useNavigate} from "react-router-dom";
import {IPhotoForAlbum} from "../../../../types/photo.interface";
import {avatarUrl} from "../../../../utils/avatarUrl";
import {Input} from "../../../Input/Input";

interface IPhotoItemProps {
  photo: IPhotoForAlbum
  input?: boolean
}

export const PhotoItem: FC<IPhotoItemProps> = ({photo, input}) => {
  const navigate = useNavigate()
  // const isPhotos = album.photos.length > 0
  // const blackColor = !isPhotos ? {color: "#1d3a5c"} : {}
  // const albumImg = avatarUrl(album.photos[0]?.photoUrl)
  const photoImg = avatarUrl(photo.photoUrl)
  return (
    <div className={styles.photoItem}
      /*onClick={() => navigate(`/album/${photo.id}`)}*/
    >
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img src={photoImg} alt=""/>
          </div>
          {input && <Input type={'text'}
                           classes={styles.input}
                           placeholder={'Добавьте описание...'}
          />
          }
        </div>
      </div>

    </div>
  );
};