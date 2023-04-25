import {ChangeEvent, FC, MutableRefObject} from 'react';
import {PhotoSVG} from "../SvgComponent";
import styles from './UploadImage.module.scss';

interface IUploadImageProps {
  show: boolean
  inputFileRef: MutableRefObject<any>
  onClick: () => void
  handleChangeImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
  authUserId?: string | number
  userId?: string | number
  isAdmin?: boolean
}

export const UploadImage: FC<IUploadImageProps> = (
  {userId, authUserId, isAdmin, show, inputFileRef, onClick, handleChangeImage}
) => {
  const shouldShow = isAdmin || (authUserId === userId && show);

  return shouldShow ? (
    <div
      className={styles.input}
      onClick={onClick}
    >
      <div className={styles.info}>
        <PhotoSVG/>
        <span>Загрузить фотографию</span>
      </div>
      <input type="file" ref={inputFileRef} onChange={handleChangeImage} hidden/>
    </div>
  ) : null;
};