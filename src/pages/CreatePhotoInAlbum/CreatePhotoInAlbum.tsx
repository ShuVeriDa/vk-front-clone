import {ChangeEvent, FC, useEffect, useRef} from 'react';
import styles from './CreatePhotoInAlbum.module.scss';
import {PhotosHeader} from "../../components/Photos/Photos/PhotosHeader/PhotosHeader";
import {usePhotoAlbumQuery} from "../../react-query/usePhotoAlbumQuery";
import {useParams} from "react-router-dom";
import {PhotoItem} from "../../components/Photos/Photos/PhotoItem/PhotoItem";
import {ICreatePhotoInAlbum} from "../../types/photoAlbum.interface";
import {useUploadQuery} from "../../react-query/useUploadQuery";
interface ICreatePhotoProps {
}

export const CreatePhotoInAlbum: FC<ICreatePhotoProps> = () => {
  const {id} = useParams()
  const {getOneAlbum, createPhotoInAlbum} = usePhotoAlbumQuery(id)
  const {mutate: uploadImage} = createPhotoInAlbum
  const {data: album, isSuccess} = getOneAlbum
  const lastPhoto = album?.photos?.length! - 1

  const inputFileRef = useRef<any>(null)
  const uploadAvatar = (url: string) => {
    uploadImage({photoUrl: url} as ICreatePhotoInAlbum)
  }

  const {uploadFile} = useUploadQuery('images', uploadAvatar, 'img', undefined, undefined, id)

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
  }

  return (
    <div className={styles.wrapper}>
     <PhotosHeader title={album?.title!}
                   add={true}
                   onClickAddPhoto={handleChangeImage}
                   inputFileRef={inputFileRef}
                   onClick={() => inputFileRef.current.click()}
     />
      <div className={styles.main}>
        <div className={styles.photoItems}>
          {isSuccess &&
          <PhotoItem photo={album.photos[lastPhoto]}
                     input={true}
            />
          }
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