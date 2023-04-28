import {FC} from 'react';
import styles from './PhotosPage.module.scss';
import {AlbumsHeader} from "../../components/Photos/Album/AlbumsHeader/AlbumsHeader";
import {AlbumItem} from "../../components/Photos/Album/AlbumItem/AlbumItem";
import {Album} from "../../components/Photos/Album/Album";

interface IPhotosProps {
}

export const PhotosPage: FC<IPhotosProps> = () => {
  return (
    <div>
      <Album/>
    </div>
  );
};