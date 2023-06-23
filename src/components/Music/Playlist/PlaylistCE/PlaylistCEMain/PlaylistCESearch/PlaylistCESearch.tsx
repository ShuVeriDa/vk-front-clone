import {FC} from 'react';
import styles from './PlaylistCESearch.module.scss';
import {Search} from "../../../../../Search/Search";
import {PlaylistCEAddMyMusic} from "./PlaylistCEAddMyMusic/PlaylistCEAddMyMusic";

interface IPlaylistCESearchProps {
}

export const PlaylistCESearch: FC<IPlaylistCESearchProps> = () => {
  return (
    <div className={styles.searchWrapper}>
      <Search classes={styles.search} placeholder={'Быстрый поиск'} />

    </div>
  );
};