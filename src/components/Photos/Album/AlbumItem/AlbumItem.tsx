import {FC} from 'react';
import styles from './AlbumItem.module.scss';
import cameraIMG from '../../../../assets/img/camera_big.png'
import {IPhotoAlbum} from "../../../../types/photoAlbum.interface";
import {avatarUrl} from "../../../../utils/avatarUrl";
import cn from "clsx";
import {EditSVG, LockSvg} from "../../../SvgComponent";
import {useNavigate} from "react-router-dom";

interface IPhotoItemProps {
  album: IPhotoAlbum
}

export const AlbumItem: FC<IPhotoItemProps> = ({album}) => {
  const navigate = useNavigate()
  const urlEdit = () => navigate(`/album/${album.id}/edit`)
  const url = () => navigate(`/album/${album.id}`)
  const isPhotos = album.photos.length > 0
  const blackColor = !isPhotos ? {color: "#1d3a5c"} : {}
  const albumImg = avatarUrl(album.photos[0]?.photoUrl)
  return (
    <div className={styles.albumItem}
         onClick={url}
      >
      <div className={styles.item}>
        <div className={styles.edit} onClick={urlEdit}>
          <div className={styles.editSvg}>
            <EditSVG />
          </div>

        </div>
        <div className={cn(isPhotos ? styles.img : styles.imgBackground)}>
          {isPhotos && <img src={albumImg} alt=""/>}
        </div>
        <div className={styles.description}>
          <div className={styles.titleAndSvg}
                style={blackColor}
          >
            <span className={styles.title}>
              {album.turnOffWatching !== 'all' && <LockSvg styles={isPhotos ? styles.svg : styles.svgBlack}/>}
              {album.title}
            </span>
            <span className={styles.imgDescription}>{album.description}</span>
          </div>
          <span className={styles.count} style={blackColor}> {album.photos.length}</span>
        </div>
      </div>
    </div>
  );
};