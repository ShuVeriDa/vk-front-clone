import {FC} from 'react';
import styles from './Search.module.scss';
interface ISearchProps {
  firstName: string
  setFirstName: (firstName: string) => void
}

export const Search: FC<ISearchProps> = ({firstName, setFirstName}) => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder={"Поиск друзей"} value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)}/>
      <button>
        <svg
          enableBackground="new 0 0 32 32"
          id="Editable-line"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14"
                  cy="14"
                  fill="none"
                  id="XMLID_42_"
                  r="9"
                  stroke="#8A94A0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
          />
          <line fill="none"
                id="XMLID_44_"
                stroke="#8A94A0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                x1="27"
                x2="20.366"
                y1="27"
                y2="20.366"
          />
        </svg>
      </button>
    </div>
  );
};