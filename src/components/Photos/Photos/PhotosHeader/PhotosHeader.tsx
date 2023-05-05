import {ChangeEvent, FC, MutableRefObject} from 'react';
import styles from './PhotosHeader.module.scss';
import ArrowRight from '../../../../assets/img/rightArrow.png'
import {Link} from "react-router-dom";
import cn from "clsx";

interface IPhotosHeaderProps {
  title: string
  count?: number
  edit?: boolean
  add?: boolean
  inputFileRef?: MutableRefObject<any>
  onClickDelete?: () => void
  onClick?:() => void
  onClickAddPhoto?: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

export const PhotosHeader: FC<IPhotosHeaderProps> = ({title, count, edit, add, onClickDelete, onClickAddPhoto, inputFileRef, onClick}) => {



  const editOfAdd = edit && 'Редактирование альбома' || add && "Добавление фотографий"

  return (
    <div className={styles.header}>
      <div className={styles.albumTitle}>
        <div className={styles.title}>
          <span className={styles.myPhotos}>
            <Link to={'/albums'}>Мои фотографии </Link>
          </span>
          <img src={ArrowRight} alt=""/>
          <span className={styles.albumName}>
            {title}
          </span>
          {edit && <>
            <img src={ArrowRight} alt=""/>
            <span>{editOfAdd}</span>
          </>}
          {add && <>
            <img src={ArrowRight} alt=""/>
            <span>{editOfAdd}</span>
          </>}

          <span className={styles.count}>{count}</span></div>
      </div>
      <div className={styles.buttons}>
        <ul>
          <li onClick={edit ? onClickDelete : onClick}
            className={cn(edit ? styles.remove : styles.add)}
          >
            {edit ? 'Удалить альбом' : 'Добавить изображение'}
            {!edit && <input type="file" ref={inputFileRef} onChange={onClickAddPhoto} hidden/>}
          </li>
        </ul>
      </div>
    </div>
  );
};