import {FC} from 'react';
import styles from './Playlists.module.scss';
import {PlaylistsHeader} from "./PlaylistsHeader/PlaylistsHeader";
import {PlaylistsContainer} from "./PlaylistsContainer/PlaylistsContainer";

interface IPlaylistsProps {
}

export const Playlists: FC<IPlaylistsProps> = () => {
  return (
    <div className={styles.wrapper}>
      <PlaylistsHeader/>
      <PlaylistsContainer />
    </div>
  );
};