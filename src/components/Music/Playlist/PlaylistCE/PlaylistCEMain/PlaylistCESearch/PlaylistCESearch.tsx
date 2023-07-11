import {FC} from 'react';
import styles from './PlaylistCESearch.module.scss';
import {Search} from "../../../../../Search/Search";

interface IPlaylistCESearchProps {
  updateSearch: (str: string) => void
}

export const PlaylistCESearch: FC<IPlaylistCESearchProps> = ({updateSearch}) => {
  return (
    <div className={styles.searchWrapper}>
      <Search classes={styles.search}
              classesClear={styles.clear}
              updateSearch={updateSearch}
              placeholder={'Быстрый поиск'}
      />

    </div>
  );
};