import {FC} from 'react';

import styles from './Home.module.scss'
import {PostWrite} from "../components/PostWrite/PostWrite";
import {Post} from "../components/Post/Post";

interface HomePropsType {
}

export const Home: FC<HomePropsType> = () => {
  return (
    <div className={styles.home}>
      <PostWrite />

      <Post />
      <Post />
    </div>
  );
};