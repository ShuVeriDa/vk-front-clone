import {FC, useState} from 'react';

import Logo from './../../assets/logo.png'
import defaultAvatar from './../../assets/defaultAvatar.png'
import styles from './Header.module.scss'

interface HeaderPropsType {
}

export const Header: FC<HeaderPropsType> = () => {
  const [shiftDown, setShiftDown] = useState(false)
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src={Logo} alt=""/>
          <span className={styles.logoText}>вконтакте</span>
        </div>
        <div className={styles.search}>
          <svg className={styles.icon}
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
          <input placeholder={"Поиск"} className={styles.searchInput} type="text"/>
        </div>
        <div className={styles.profile}>
          <img src={defaultAvatar} alt=""/>
          <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg" ><path clipRule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fillRule="evenodd"></path></svg>
        </div>
      </div>
    </div>
  );
};