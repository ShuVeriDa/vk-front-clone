import {FC} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import styles from './MainLayout.module.scss'
import {Header} from "../components/Header/Header";
import {Nav} from "../components/Nav/Nav";

interface MainLayoutPropsType {
}

export const MainLayout: FC<MainLayoutPropsType> = () => {
  const {pathname} = useLocation()
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content} style={pathname === '/photos' ? {maxWidth: '990px'} : {}}>
        <Nav />
        <Outlet />
      </div>

    </div>
  );
};