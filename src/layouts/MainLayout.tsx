import {FC} from 'react';
import {Outlet} from "react-router-dom";

import styles from './MainLayout.module.scss'
import {Header} from "../components/Header/Header";

interface MainLayoutPropsType {
}

export const MainLayout: FC<MainLayoutPropsType> = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>

    </div>
  );
};