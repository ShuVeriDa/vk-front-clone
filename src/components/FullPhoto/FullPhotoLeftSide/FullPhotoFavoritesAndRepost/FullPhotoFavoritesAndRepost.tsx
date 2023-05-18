import {FC, useState} from 'react';
import {FavoritePostSVG, RepostPostSVG} from "../../../SvgComponent";
import styles from './FullPhotoFavoritesAndRepost.module.scss';
import {usePhotoQuery} from "../../../../react-query/usePhotoQuery";
import {FaHeart} from "react-icons/fa";
import {IUserAbbr} from "../../../../types/user.interface";
import {useAuth} from "../../../../hooks/useAuth";

interface IFullPhotoFavoritesAndRepostProps {
  photoId: string
  photoFavoriteAdders: IUserAbbr[]
}

export const FullPhotoFavoritesAndRepost: FC<IFullPhotoFavoritesAndRepostProps> = (
  {photoId, photoFavoriteAdders}
) => {
  const {user} = useAuth()
  const isFavorite = photoFavoriteAdders.some(adder => adder.id === user?.id)

  // const [isFavorite, setIsFavorite] = useState(false)

  const {toggleFavoritesPhoto} = usePhotoQuery(photoId)
  const {mutate: toggleFavorites} = toggleFavoritesPhoto

  const onClickToggle = () => {
    toggleFavorites(photoId)
    // setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.favoritesAndRepost}>
      <div className={styles.svg}>
        <div className={styles.favorites} onClick={onClickToggle}>
          <FaHeart className={`${styles.heartIcon} ${isFavorite ? `${styles.favorite}` : ''}`}

          />
          <span className={styles.favoritesLength}>{photoFavoriteAdders.length > 0 ? photoFavoriteAdders.length  : ''}</span>
        </div>

        <RepostPostSVG/>
      </div>
    </div>
  );
};