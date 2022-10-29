import {FC} from 'react';

import styles from './Home.module.scss'
import {PostWrite} from "../../components/PostWrite/PostWrite";
import {Post} from "../../components/Post/Post";
import {RightSide} from "../../components/RightSide/RightSide";

interface HomePropsType {
}

export const Home: FC<HomePropsType> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <PostWrite />
        <Post />
        <Post />
      </div>
      <div className={styles.rightSide}>
        <RightSide />
      </div>
    </div>
  );
};