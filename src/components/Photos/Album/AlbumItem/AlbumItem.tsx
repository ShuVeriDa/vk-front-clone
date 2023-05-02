import {FC} from 'react';
import styles from './AlbumItem.module.scss';
import cameraIMG from '../../../../assets/img/camera_big.png'
import {IPhotoAlbum} from "../../../../types/photoAlbum.interface";
import {avatarUrl} from "../../../../utils/avatarUrl";
import cn from "clsx";
import {LockSvg} from "../../../SvgComponent";

interface IPhotoItemProps {
  album: IPhotoAlbum
}

export const AlbumItem: FC<IPhotoItemProps> = ({album}) => {
  const isPhotos = album.photos.length > 0
  const blackColor = !isPhotos ? {color: "#1d3a5c"} : {}
  const albumImg = avatarUrl(album.photos[0]?.photoUrl)
  return (
    <div className={styles.albumItem}>
      <div className={styles.item}>
        <div className={cn(isPhotos ? styles.img : styles.imgBackground)}>
          {isPhotos && <img src={albumImg} alt=""/>}
        </div>
        <div className={styles.description}>
          <span className={styles.titleAndSvg}
                style={blackColor}
          >
            {album.turnOffWatching !== 'all' && <LockSvg styles={isPhotos ? styles.svg : styles.svgBlack}/>}
            <span className={styles.title}>{album.title}</span>
          </span>
          <span className={styles.count} style={blackColor}> {album.photos.length}</span>
        </div>
      </div>
    </div>
  );
};