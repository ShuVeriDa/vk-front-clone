import {FC} from 'react';
import styles from './FullPhotoHeader.module.scss';
import {avatarUrl} from "../../../../utils/avatarUrl";

interface IFullPhotoHeaderProps {
  avatar: string
  fullName: string
  createdAt: string
}

export const FullPhotoHeader: FC<IFullPhotoHeaderProps> = ({fullName
, avatar, createdAt}) => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        <img src={avatarUrl(avatar)} alt=""/>
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{fullName}</span>
        <span className={styles.created}>{createdAt}</span>
      </div>
    </div>
  );
};