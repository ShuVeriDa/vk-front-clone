import {FC} from 'react';
import {Link} from "react-router-dom";

interface FriendsItemPropsType {
  id: number | string
  name: string
  avatar: string | undefined
  styles: any
  title: "Друзья" | "Подписки" | 'Подписчики'
  description?: string
}

export const ProfileFriendsAndSubsItem: FC<FriendsItemPropsType> = (
  {styles, avatar, name, description, id, title}
) => {

  const friendUrl = `/profile/${id}`
  const communityUrl = `/group/${id}`
  const membersUrl = `/profile/${id}`
  const link = title === 'Друзья'
    ? friendUrl
    : title === "Подписки"
      ? communityUrl
      : title === "Подписчики" ? membersUrl
        : ''

  return (
    <div className={styles.profileSubsItem || styles.profileFriendsItem}>
      <Link to={link}>
        <div className={styles.subsAvatar || styles.profileFriendAvatar}>
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