import {FC, MutableRefObject} from 'react';
import TextareaAutosize from "react-textarea-autosize";
import styles from './FullPhotoDescription.module.scss';

interface IFullPhotoFavoritesAndRepostProps {
  isEditDescription: boolean
  inputRef: MutableRefObject<HTMLTextAreaElement | null>
  description: string
  onClickRef: () => void
}

export const FullPhotoDescription: FC<IFullPhotoFavoritesAndRepostProps> = (
  {isEditDescription, inputRef, description, onClickRef}
) => {
  return (
    <div className={styles.description} onClick={onClickRef}>
      {!isEditDescription
        ? <div className={styles.edit}>{description ? description : 'Редактировать описание'}</div>
        : <div className={styles.textareaField}>
          <TextareaAutosize
            ref={inputRef}
            defaultValue={description}
            placeholder={'Введите описание'}
          />
        </div>
      }
    </div>
  );
};