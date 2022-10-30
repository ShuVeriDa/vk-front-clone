import {FC} from 'react';
import {Link} from "react-router-dom";

import styles from './ProfileFriends.module.scss'
import {ProfileFriendsItem} from "./ProfileFriendsItem/ProfileFriendsItem";

interface FriendsPropsType {
}

export const ProfileFriends: FC<FriendsPropsType> = () => {
  return (
    <div className={styles.friends}>
      <div className={styles.friendsHeader}>
        <Link to={"/friends"}>
          <span className={styles.name}>Друзья </span>
          <span className={styles.count}>5</span>
        </Link>
      </div>
      <div className={styles.friendsItems}>
        <ProfileFriendsItem />
        <ProfileFriendsItem />
        <ProfileFriendsItem />
        <ProfileFriendsItem />
        <ProfileFriendsItem />
        <ProfileFriendsItem />
        <ProfileFriendsItem />
        <ProfileFriendsItem />
      </div>

    </div>
  );
};