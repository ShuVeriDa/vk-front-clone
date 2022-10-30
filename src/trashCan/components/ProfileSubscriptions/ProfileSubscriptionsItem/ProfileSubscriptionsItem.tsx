import {FC} from 'react';
import {Link} from "react-router-dom";

import styles from "./ProfileSubscriptionsItem.module.scss";
import defaultAvatar from "../../../../assets/defaultAvatar.png";

interface FriendsItemPropsType {
}

export const ProfileSubscriptionsItem: FC<FriendsItemPropsType> = () => {
  return (
    <div className={styles.profileSubsItem}>
      <Link to={"/"}>
        <div className={styles.subsAvatar}>
          <img src={defaultAvatar} alt=""/>
        </div>
        <div className={styles.subsNameComponent}>
          <span className={styles.subsName}>Группа</span>
          <span className={styles.subsDescription}>Описание группы</span>
        </div>
      </Link>
    </div>

  );
};