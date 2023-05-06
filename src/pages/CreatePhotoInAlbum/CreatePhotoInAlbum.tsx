import {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import styles from './CreatePhotoInAlbum.module.scss';
import {PhotosHeader} from "../../components/Photos/Album/Photos/PhotosHeader/PhotosHeader";
import {usePhotoAlbumQuery} from "../../react-query/usePhotoAlbumQuery";
import {useParams} from "react-router-dom";
import {PhotoItem} from "../../components/Photos/Album/Photos/PhotoItem/PhotoItem";
import {ICreatePhotoInAlbum} from "../../types/photoAlbum.interface";
import {useUploadQuery} from "../../react-query/useUploadQuery";
import {usePhotoQuery} from "../../react-query/usePhotoQuery";
interface ICreatePhotoProps {
}

export const CreatePhotoInAlbum: FC<ICreatePhotoProps> = () => {
  const {id} = useParams()
  const {getOneAlbum, createPhotoInAlbum} = usePhotoAlbumQuery(id)
  const [description, setDescription] = useState('')

  const {mutate: uploadImage} = createPhotoInAlbum
  const {data: album, isSuccess} = getOneAlbum

  const lastPhoto = album?.photos[album?.photos?.length - 1]
  const lastPhotoLength = album?.photos?.length! - 1
  const {updatePhoto} = usePhotoQuery(lastPhoto?.id)
  const {mutate: UpdatePhoto} = updatePhoto

  const inputFileRef = useRef<any>(null)
  const uploadAvatar = (url: string) => {
    uploadImage({photoUrl: url} as ICreatePhotoInAlbum)
  }

  const {uploadFile} = useUploadQuery('images', uploadAvatar, 'img', undefined, undefined, id)

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
  }

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value)
  }

  const onChangeDescription = () => {
    UpdatePhoto({description: description})
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
          <PhotoItem photo={album.photos[lastPhotoLength]}
                     input={true}
                     onBlur={onChangeDescription}
                     onChangeValue={onChangeValue}

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