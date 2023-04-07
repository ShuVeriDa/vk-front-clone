import {FC} from 'react';
import {Link} from "react-router-dom";

import {ProfileFriendsAndSubsItem} from "./ProfileFriendsAndSubsItem/ProfileFriendsAndSubsItem";

import styles from './ProfileFriendsAndSubs.module.scss'
import {IUserFull} from "../../../types/user.interface";
import defaultAvatar from "../../../assets/defaultAvatar.png";
import defaultCommunityAvatar from "../../../assets/defaultCommunityAvatar.png";

interface ProfileFriendsAndSubsPropsType {
  itemStyles: any
  title: "Друзья" | "Подписки"
  user: IUserFull | undefined
}

export const ProfileFriendsAndSubs: FC<ProfileFriendsAndSubsPropsType> = (
  {
    itemStyles,
    title,
    user,
  }) => {
  const friends = user?.friends
  const communities = user?.communities
  const friendsLength = user?.friends.length
  const communityLength = user?.communities.length
  return (
    <div className={styles.profileFrAndSubs}>
      <div className={styles.profileFrAndSubsHeader}>
        <Link to={"/friends"}>
          <span className={styles.name}>{title}</span>
          <span className={styles.count}>{title === 'Друзья' ? friendsLength : communityLength}</span>
        </Link>
      </div>
      <div className={styles.friendsItems || styles.profileSubsItems}>
        {title === "Друзья"
          ? friends?.map(friend => {

            return <ProfileFriendsAndSubsItem key={friend.id}
                                              id={friend.id}
                                              styles={itemStyles}
                                              avatar={friend.avatar || defaultAvatar}
                                              name={friend.firstName}
                                              title={title}

            />
          })
          : communities?.map(community => {
            return <ProfileFriendsAndSubsItem key={community.id}
                                              id={community.id}
                                              name={community.name}
                                              avatar={community.avatar || defaultCommunityAvatar}
                                              styles={itemStyles}
                                              description={community.description}
                                              title={title}
            />
          }).splice(0, 5)
        }
      </div>
    </div>
  );
};