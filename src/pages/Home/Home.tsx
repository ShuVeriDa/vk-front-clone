import {FC} from 'react';

import styles from './Home.module.scss'
import {PostWrite} from "../../components/Posts/PostWrite/PostWrite";
import {PostItem} from "../../components/Posts/PostItem/PostItem";
import {RightSide} from "../../components/RightSide/RightSide";
import {FilterByInteresting} from "../../components/FilterByInteresting/FilterByInteresting";

interface HomePropsType {
}

export const Home: FC<HomePropsType> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <PostWrite />
        {/*<Posts />*/}
        {/*<Posts />*/}
      </div>
      <div className={styles.rightSide}>
        <RightSide />
        <FilterByInteresting />
      </div>
    </div>
  );
};