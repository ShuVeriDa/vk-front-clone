import {FC} from 'react';
import {Link} from "react-router-dom";

interface FriendsItemPropsType {
  name: string
  description?: string
  avatar: string
  styles: any
}

export const ProfileFriendsAndSubsItem: FC<FriendsItemPropsType> = ({styles, avatar, name, description}) => {
  return (

    <div className={styles.profileSubsItem || styles.profileFriendsItem}>
      <Link to={"/"}>
        <div className={ styles.subsAvatar || styles.profileFriendAvatar}>
          <img src={avatar} alt=""/>
        </div>
        <div className={styles.subsNameComponent || styles.friendsNameComponent}>
          <span className={styles.subsName || styles.friendsName}>{name}</span>
          <span className={styles.subsDescription}>{description}</span>
        </div>
      </Link>
    </div>

  );
};