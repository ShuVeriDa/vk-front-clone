import {FC} from 'react';
import {Link} from "react-router-dom";

import styles from "./ProfileFriendsItem.module.scss";
import defaultAvatar from "../../../assets/defaultAvatar.png";

interface FriendsItemPropsType {
}

export const ProfileFriendsItem: FC<FriendsItemPropsType> = () => {
  return (
    <div className={styles.friendsItem}>
      <Link to={"/"}>
        <div className={styles.friendAvatar}>
          <img src={defaultAvatar} alt=""/>
        </div>
        <div className={styles.friendsNameComponent}>
          <span className={styles.friendsName}>
                Адам
           </span>
        </div>
      </Link>
    </div>
  );
};