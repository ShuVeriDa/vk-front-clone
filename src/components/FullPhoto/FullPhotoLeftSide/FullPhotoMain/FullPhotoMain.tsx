import {FC, useEffect, useRef, useState} from 'react';
import styles from './FullPhotoMain.module.scss';
import {FullPhotoFavoritesAndRepost} from "../FullPhotoFavoritesAndRepost/FullPhotoFavoritesAndRepost";
import {FullPhotoDescription} from "../FullPhotoDescription/FullPhotoDescription";
import {usePhotoQuery} from "../../../../react-query/usePhotoQuery";
import {IPhotoFull} from "../../../../types/photo.interface";
import {IUserAbbr} from "../../../../types/user.interface";

interface IFullPhotoMainProps {
  description: string
  photoId: string
  photoFavoriteAdders: IUserAbbr[]
}

export const FullPhotoMain: FC<IFullPhotoMainProps> = ({description, photoId, photoFavoriteAdders}) => {
  const [isEditDescription, setEditDescription] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const containerRef = useRef<HTMLDivElement>(null);

  const onClickRef = () => {
    setEditDescription(true)
    inputRef.current?.focus()
  }

  const {updatePhoto} = usePhotoQuery(photoId)
  const {mutate: update} = updatePhoto

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
      <FullPhotoFavoritesAndRepost photoId={photoId}
                                   photoFavoriteAdders={photoFavoriteAdders}
      />
      <FullPhotoDescription isEditDescription={isEditDescription}
                            inputRef={inputRef}
                            description={description}
                            onClickRef={onClickRef}
                            containerRef={containerRef}
      />
    </div>
  );
};