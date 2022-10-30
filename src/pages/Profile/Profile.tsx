import {FC} from 'react';

import styles from './Profile.module.scss'
import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";
import {ProfileWall} from "../../components/ProfileWall/ProfileWall";
import {PostWrite} from "../../components/PostWrite/PostWrite";
import {CategoryPosts} from "../../components/CategoryPosts/CategoryPosts";
import {Post} from "../../components/Post/Post";
import {ProfileFriends} from "../../components/ProfileFriends/ProfileFriends";

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  const borderRadius = {
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  }
  return (
    <div className={styles.profile}>
      <ProfileHeader/>
      <div className={styles.profileMain}>
        <div className={styles.profilePosts}>
          <ProfileWall/>
          <PostWrite/>
          <CategoryPosts/>
          <Post borderRadius={borderRadius}/>
          <Post/>
          <Post/>
        </div>
        <div className={styles.rightSide}>
          <ProfileFriends/>
        </div>
      </div>

    </div>
  );
};