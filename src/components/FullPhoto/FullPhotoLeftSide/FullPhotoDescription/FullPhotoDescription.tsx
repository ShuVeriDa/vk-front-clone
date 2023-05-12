import {FC, MutableRefObject} from 'react';
import TextareaAutosize from "react-textarea-autosize";
import styles from './FullPhotoDescription.module.scss';

interface IFullPhotoFavoritesAndRepostProps {
  isEditDescription: boolean
  inputRef: MutableRefObject<HTMLTextAreaElement | null>
  description: string
  onClickRef: () => void
  containerRef: MutableRefObject<HTMLDivElement | null>
}

export const FullPhotoDescription: FC<IFullPhotoFavoritesAndRepostProps> = (
  {isEditDescription, inputRef, description, onClickRef, containerRef}
) => {


  return (
    <div className={styles.description} onClick={onClickRef} ref={containerRef}>
      {!isEditDescription
        ? <div className={styles.edit} style={description ? {color: "black"} : {}}>{description ? description : 'Редактировать описание'}</div>
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