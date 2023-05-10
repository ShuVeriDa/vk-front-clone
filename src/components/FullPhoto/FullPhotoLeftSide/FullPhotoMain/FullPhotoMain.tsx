import {FC, useRef, useState} from 'react';
import styles from './FullPhotoMain.module.scss';
import {FullPhotoFavoritesAndRepost} from "../FullPhotoFavoritesAndRepost/FullPhotoFavoritesAndRepost";
import {FullPhotoDescription} from "../FullPhotoDescription/FullPhotoDescription";

interface IFullPhotoMainProps {
  description: string
}

export const FullPhotoMain: FC<IFullPhotoMainProps> = ({description}) => {
  const [isEditDescription, setEditDescription] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const onClickRef = () => {
    setEditDescription(true)
    inputRef.current?.focus()
  }
  return (
    <div className={styles.main}>
      <FullPhotoFavoritesAndRepost/>
      <FullPhotoDescription isEditDescription={isEditDescription}
                            inputRef={inputRef}
                            description={description}
                            onClickRef={onClickRef}
      />
    </div>
  );
};