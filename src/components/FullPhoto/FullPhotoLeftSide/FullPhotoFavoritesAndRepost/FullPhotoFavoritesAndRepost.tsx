import {FC, useState} from 'react';
import defaultPhoto from '../../../../assets/img/defaultAvatar.png'
import {FavoritePostSVG, RepostPostSVG} from "../../../SvgComponent";
import styles from './FullPhotoFavoritesAndRepost.module.scss';
import {usePhotoQuery} from "../../../../react-query/usePhotoQuery";
import {FaHeart} from "react-icons/fa";
import {IUserAbbr} from "../../../../types/user.interface";
import {useAuth} from "../../../../hooks/useAuth";
import {FullPhotoFavoriteAdders} from "./FullPhotoFavoriteAdders/FullPhotoFavoriteAdders";
import {avatarUrl} from "../../../../utils/avatarUrl";
import {ModalWindow} from "../../../ModalWindow/ModalWindow";
import {Repost} from "../../../Repost/Repost";

interface IFullPhotoFavoritesAndRepostProps {
  photoId: string
  photoFavoriteAdders: IUserAbbr[]
}

export const FullPhotoFavoritesAndRepost: FC<IFullPhotoFavoritesAndRepostProps> = (
  {photoId, photoFavoriteAdders}
) => {
  const [isRepost, setRepost] = useState(false)
  const {user} = useAuth()
  const isFavorite = photoFavoriteAdders.some(adder => adder.id === user?.id)

  // const [isFavorite, setIsFavorite] = useState(false)

  const {toggleFavoritesPhoto} = usePhotoQuery(photoId)
  const {mutate: toggleFavorites, data: favorites, isSuccess} = toggleFavoritesPhoto

  const onClickToggle = () => {
    toggleFavorites(photoId)
    // setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.favoritesAndRepost}>
      <div className={styles.svg}>
        <div className={styles.favorites} onClick={onClickToggle}>
          <div className={styles.favoriteAdders}>
            {
              photoFavoriteAdders.length > 0 && <FullPhotoFavoriteAdders users={photoFavoriteAdders}/>
            }
          </div>
          <FaHeart className={`${styles.heartIcon} ${isFavorite ? `${styles.favorite}` : ''}`}
          />
          <span
            className={styles.favoritesLength}>{photoFavoriteAdders.length > 0 ? photoFavoriteAdders.length : ''}</span>
        </div>
        <RepostPostSVG styles={styles.repost} onClick={() => setRepost(true)}/>

        <ModalWindow open={isRepost}>
          <Repost id={photoId}
            onClose={() => setRepost(false)}
          />
        </ModalWindow>
      </div>
    </div>
  );
};