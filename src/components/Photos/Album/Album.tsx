import {FC} from 'react';
import styles from '../Photos.module.scss';
import {AlbumsHeader} from "./AlbumsHeader/AlbumsHeader";
import {AlbumItem} from "./AlbumItem/AlbumItem";

interface IAlbumProps {
}

export const Album: FC<IAlbumProps> = () => {
  return (
    <div className={styles.wrapper}>
      <AlbumsHeader />
      <div className={styles.main}>
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </div>
    </div>
  );
};