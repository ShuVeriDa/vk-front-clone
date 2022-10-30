import {FC} from 'react';

import styles from './ProfileSubscriptions.module.scss'
import {Link} from "react-router-dom";
import {ProfileFriendsItem} from "../ProfileFriends/ProfileFriendsItem/ProfileFriendsItem";
import {ProfileSubscriptionsItem} from "./ProfileSubscriptionsItem/ProfileSubscriptionsItem";

interface ProfileSubscriptionsPropsType {
}

export const ProfileSubscriptions: FC<ProfileSubscriptionsPropsType> = () => {
  return (
    <div className={styles.profileSubs}>
      <div className={styles.profileSubsHeader}>
        <Link to={"/"}>
          <span className={styles.name}>Подписки </span>
          <span className={styles.count}>18</span>
        </Link>
      </div>
      <div className={styles.profileSubsItems}>
        <ProfileSubscriptionsItem/>
      </div>
    </div>
  );
};