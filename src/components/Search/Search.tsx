import {ChangeEvent, FC, useState} from 'react';
import styles from './Search.module.scss';
import {ClearSearchValueSVG, MagnifierSVG, SearchLoaderSVG} from "../SvgComponent";
import cn from "clsx";

interface ISearchProps {
  updateSearch?: (str: string) => void
  placeholder?: string
  status?: "error" | "success" | "loading"
  classes?: string
  classesClear?: string
  classesSpinner?: string
  value?: string
}

export const Search: FC<ISearchProps> = (
  {
    updateSearch,
    status,
    placeholder,
    classes,
    classesClear,
    classesSpinner
  }
) => {
  const [searchName, setSearchName] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (updateSearch) {
      updateSearch(e.currentTarget.value)
    }
    // setLastName(e.currentTarget.value)
    setSearchName(e.currentTarget.value)
  }

  const onClear = () => {
    if (updateSearch) updateSearch('')
    setSearchName('')
  }

  return (
    <div className={cn(styles.search, classes)}>
      <input type="text"
             placeholder={placeholder}
             value={searchName!}
             onChange={onChange}
      />
      <button>
        <MagnifierSVG/>
      </button>
      {status === 'loading'
        ? <div className={cn(styles.spinner, classesSpinner)}>
          <SearchLoaderSVG/>
        </div>
        : searchName && <div className={cn(styles.clear, classesClear)}>
        <ClearSearchValueSVG onClick={onClear}/>
      </div>
      }
    </div>
  );
};