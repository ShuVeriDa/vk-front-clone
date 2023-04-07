import {ChangeEvent, FC, useState} from 'react';
import styles from './Search.module.scss';
import {ClearSearchValueSVG, MagnifierSVG, SearchLoaderSVG} from "../SvgComponent";

interface ISearchProps {
  updateSearch: (str: string) => void
  status: "error" | "success" | "loading"
}

export const Search: FC<ISearchProps> = ({updateSearch, status}) => {

  const [searchName, setSearchName] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch(e.currentTarget.value)
    // setLastName(e.currentTarget.value)
    setSearchName(e.currentTarget.value)
  }

  const onClear = () => {
    updateSearch('')
    setSearchName('')
  }

  return (
    <div className={styles.search}>
      <input type="text" placeholder={"Поиск друзей"} value={searchName} onChange={onChange}/>

      <button>
        <MagnifierSVG />
      </button>
      {status === 'loading'
        ? <div className={styles.spinner}><SearchLoaderSVG/></div>
        : searchName && <div className={styles.clear}><ClearSearchValueSVG onClick={onClear}/> </div>
      }
    </div>
  );
};