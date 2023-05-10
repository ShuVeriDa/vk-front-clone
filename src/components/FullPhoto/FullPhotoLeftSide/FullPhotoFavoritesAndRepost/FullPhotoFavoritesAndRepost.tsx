import {FC} from 'react';
import {FavoritePostSVG, RepostPostSVG} from "../../../SvgComponent";
import styles from './FullPhotoFavoritesAndRepost.module.scss';

interface IFullPhotoFavoritesAndRepostProps {
}

export const FullPhotoFavoritesAndRepost: FC<IFullPhotoFavoritesAndRepostProps> = () => {
  return (
    <div className={styles.favoritesAndRepost}>
      <div className={styles.svg}>
        <FavoritePostSVG/>
        <RepostPostSVG/>
      </div>
    </div>
  );
};