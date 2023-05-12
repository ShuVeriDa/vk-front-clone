import {FC, useEffect, useRef, useState} from 'react';
import styles from './FullPhotoMain.module.scss';
import {FullPhotoFavoritesAndRepost} from "../FullPhotoFavoritesAndRepost/FullPhotoFavoritesAndRepost";
import {FullPhotoDescription} from "../FullPhotoDescription/FullPhotoDescription";
import {usePhotoQuery} from "../../../../react-query/usePhotoQuery";

interface IFullPhotoMainProps {
  description: string
  photoId: string
}

export const FullPhotoMain: FC<IFullPhotoMainProps> = ({description, photoId}) => {
  const [isEditDescription, setEditDescription] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const containerRef = useRef<HTMLDivElement>(null);

  const onClickRef = () => {
    setEditDescription(true)
    inputRef.current?.focus()
  }

  const {updatePhoto} = usePhotoQuery(photoId)
  const {mutate: update} = updatePhoto
  console.log(isEditDescription)


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        inputRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node)
      ) {
        update({ description: inputRef.current.value });
        setEditDescription(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.main}>
      <FullPhotoFavoritesAndRepost/>
      <FullPhotoDescription isEditDescription={isEditDescription}
                            inputRef={inputRef}
                            description={description}
                            onClickRef={onClickRef}
                            containerRef={containerRef}
      />
    </div>
  );
};