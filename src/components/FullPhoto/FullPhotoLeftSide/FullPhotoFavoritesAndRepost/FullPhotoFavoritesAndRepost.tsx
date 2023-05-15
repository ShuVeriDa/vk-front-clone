import {FC} from 'react';
import {FavoritePostSVG, RepostPostSVG} from "../../../SvgComponent";
import styles from './FullPhotoFavoritesAndRepost.module.scss';
import {usePhotoQuery} from "../../../../react-query/usePhotoQuery";

interface IFullPhotoFavoritesAndRepostProps {
  photoId: string
}

export const FullPhotoFavoritesAndRepost: FC<IFullPhotoFavoritesAndRepostProps> = ({ photoId}) => {

  const {toggleFavoritesPhoto} = usePhotoQuery(photoId)
  const {mutate: toggleFavorites} = toggleFavoritesPhoto

  const onClickToggle = () => {
    toggleFavorites(photoId)
  }

  return (
    <div className={styles.favoritesAndRepost}>
      <div className={styles.svg}>
        <FavoritePostSVG onClick={onClickToggle}/>
        <RepostPostSVG/>
      </div>
    </div>
  );
};