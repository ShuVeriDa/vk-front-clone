import {FC} from 'react';
import styles from './MusicSearch.module.scss';
import {Search} from "../../../Search/Search";
import {useDebounce} from "../../../../hooks/useDebounce";

interface IMusicSearchProps {
  value: string
  setValue: (value: string) => void
  status?: "error" | "success" | "loading"
}

export const MusicSearch: FC<IMusicSearchProps> = ({value, setValue, status}) => {
  const updateSearch = useDebounce(setValue, 350)
  return (
    <div className={styles.wrapper}>
      <Search classes={styles.search}
              placeholder={"Поиск музыки"}
              updateSearch={updateSearch}
              classesClear={styles.clear}
              classesSpinner={styles.spinner}
              status={status}
      />
    </div>
  );
};