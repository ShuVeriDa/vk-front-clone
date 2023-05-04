import {FC} from 'react';
import styles from './AlbumItemPage.module.scss';
import {Link, useParams} from "react-router-dom";
import {PhotosHeader} from "../../components/Photos/Photos/PhotosHeader/PhotosHeader";
import {PhotoItem} from "../../components/Photos/Photos/PhotoItem/PhotoItem";
import {usePhotoAlbumQuery} from "../../react-query/usePhotoAlbumQuery";

interface IPhotosProps {
}

export const AlbumItemPage: FC<IPhotosProps> = () => {
  const {id} = useParams()
  const {getOneAlbum} = usePhotoAlbumQuery(id!)
  const {data: album, isSuccess} = getOneAlbum

  return (
    <div className={styles.wrapper}>
      <PhotosHeader title={album?.title!}
                    count={album?.photos?.length!}
      />
      <div className={styles.main}>
        <div className={styles.titleAndDescription}>
          <span className={styles.title}>{album?.title}</span>
          <span className={styles.description}>{album?.description}</span>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>{isSuccess && album.photos?.length} фотографии</li>
            <li><Link to={`/album/${id}/edit`}>Редактировать альбом </Link></li>
          </ul>
        </div>
        <div className={styles.photoItems}>
          {isSuccess && album.photos?.map(photo => {
            return <PhotoItem photo={photo}
                              key={photo.id}
            />
          })}
          {!album?.photos.length
            && <div className={styles.noPhotos}>
             <span>
            В этом альбоме ещё нет фотографий
          </span>
            </div>
          }

        </div>

      </div>
    </div>
  );
};