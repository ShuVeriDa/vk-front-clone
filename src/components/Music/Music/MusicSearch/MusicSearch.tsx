import {FC} from 'react';
import styles from './MusicSearch.module.scss';
import {Search} from "../../../Search/Search";

interface IMusicSearchProps {
}

export const MusicSearch: FC<IMusicSearchProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Search classes={styles.search}
              placeholder={"Поиск музыки"}
      />
    </div>
  );
};