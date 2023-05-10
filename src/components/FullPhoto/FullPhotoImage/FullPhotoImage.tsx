import {FC} from 'react';
import styles from "../FullPhoto.module.scss";
import {avatarUrl} from "../../../utils/avatarUrl";

interface IFullPhotoImageProps {
  photoUrl: string
}

export const FullPhotoImage: FC<IFullPhotoImageProps> = ({photoUrl}) => {
  return (
    <div className={styles.image}>
      <div className={styles.imageItem}>
        <img src={avatarUrl(photoUrl)} alt=""/>
      </div>
    </div>
  );
};