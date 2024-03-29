import {ChangeEvent, FC, useRef} from 'react';
import styles from './AlbumsHeader.module.scss';
import {useNavigate} from "react-router-dom";
import {ICreatePhotoInAlbum} from "../../../../types/photoAlbum.interface";
import {useUploadQuery} from "../../../../react-query/useUploadQuery";
import {usePhotoQuery} from "../../../../react-query/usePhotoQuery";
import {ICreatePhoto} from "../../../../types/photo.interface";

interface IPhotosHeaderProps {
  onClickOpen: () => void
  count: number
}

export const AlbumsHeader: FC<IPhotosHeaderProps> = ({onClickOpen, count}) => {
  const navigate = useNavigate()
  const inputFileRef = useRef<any>(null)
  const {createPhoto} = usePhotoQuery()
  const {mutateAsync: uploadImage, data: photo} = createPhoto

  const uploadAvatar = (url: string) => {
    uploadImage({photoUrl: url} as ICreatePhoto)
  }

  const {uploadFile} = useUploadQuery('images', uploadAvatar, 'singleImg',)

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
    navigate(`/album/photo/add`)
  }

  return (
    <div className={styles.header}>
      <div className={styles.albumTitle}>
        <span className={styles.title}>Мои альбомы <span className={styles.count}>{count}</span></span>
      </div>
      <div className={styles.buttons}>
        <ul>
          <li onClick={onClickOpen}>Создать альбом</li>
          <li onClick={() => inputFileRef.current.click()}>
            <input ref={inputFileRef}
                   onChange={handleChangeImage}
                   type="file"
                   hidden
            />
            Добавить изображение
          </li>
        </ul>
      </div>
    </div>
  );
};