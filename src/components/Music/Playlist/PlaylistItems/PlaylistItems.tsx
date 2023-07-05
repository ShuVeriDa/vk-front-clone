import {FC} from 'react';
import styles from './PlaylistItems.module.scss';
import {PlaylistItem} from "./PlaylistItem/PlaylistItem";

interface IPlaylistItemsProps {
}

export const PlaylistItems: FC<IPlaylistItemsProps> = () => {

  return (
    <div className={styles.items}>
      <PlaylistItem />
      <PlaylistItem />
      <PlaylistItem />
      <PlaylistItem />
      <PlaylistItem />
    </div>
  );
};