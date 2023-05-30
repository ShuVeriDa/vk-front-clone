import {ChangeEvent, FC, useRef, useState} from 'react';
import styles from './CreatePhoto.module.scss';
import {PhotosHeader} from "../../components/Photos/Album/Photos/PhotosHeader/PhotosHeader";
import {PhotoItem} from "../../components/Photos/Album/Photos/PhotoItem/PhotoItem";
import {useUploadQuery} from "../../react-query/useUploadQuery";
import {usePhotoQuery} from "../../react-query/usePhotoQuery";
import {ICreatePhoto} from "../../types/photo.interface";

interface ICreatePhotoProps {
}

export const CreatePhoto: FC<ICreatePhotoProps> = () => {
  const {getMyPhotos, createPhoto}= usePhotoQuery()

  const [description, setDescription] = useState('')

  const {mutate: uploadImage} = createPhoto
  const {data: photos, isSuccess} = getMyPhotos
  // const {data: photo} = getOnePhoto
  const lastPhotoLength = photos?.length! - 1
  const lastPhoto = photos?.reverse()[lastPhotoLength]!
  const {updatePhoto} = usePhotoQuery(lastPhoto?.id)
  const {mutate: UpdatePhoto} = updatePhoto

  const inputFileRef = useRef<any>(null)
  const uploadAvatar = (url: string) => {
    uploadImage({photoUrl: url} as ICreatePhoto)
  }

  const {uploadFile} = useUploadQuery('images', uploadAvatar, 'singleImg')

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
  }

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value)
  }

  const onChangeDescription = () => {
    UpdatePhoto({description: description})
  }

  console.log(photos?.reverse()[lastPhotoLength])

  return (
    <div className={styles.wrapper}>
      <PhotosHeader add={true}
                    onClickAddPhoto={handleChangeImage}
                    inputFileRef={inputFileRef}
                    onClick={() => inputFileRef.current.click()}
      />
      <div className={styles.main}>
        <div className={styles.photoItems}>
          {isSuccess &&
            <PhotoItem photo={lastPhoto}
                       input={true}
                       onBlur={onChangeDescription}
                       onChangeValue={onChangeValue}

            />
          }
        </div>
      </div>
    </div>
  );
};