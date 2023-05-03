import {FC} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import styles from './MainLayout.module.scss'
import {Header} from "../components/Header/Header";
import {Nav} from "../components/Nav/Nav";
import {pathStyles} from "../utils/pathStyles";

interface MainLayoutPropsType {
}

export const MainLayout: FC<MainLayoutPropsType> = () => {
  const {pathname} = useLocation()
  const path = pathStyles(pathname)
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content} style={path}>
        <Nav />
        <Outlet />
      </div>

    </div>
  );
};