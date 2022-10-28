import {FC} from 'react';

import styles from './Home.module.scss'
import {PostWrite} from "../components/PostWrite/PostWrite";

interface HomePropsType {
}

export const Home: FC<HomePropsType> = () => {
  return (
    <div className={styles.home}>
      <PostWrite />
      Home
    </div>
  );
};