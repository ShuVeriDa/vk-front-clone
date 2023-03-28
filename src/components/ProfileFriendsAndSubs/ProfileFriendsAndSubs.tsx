import {FC} from 'react';
import {Link} from "react-router-dom";

import {ProfileFriendsAndSubsItem} from "./ProfileFriendsAndSubsItem/ProfileFriendsAndSubsItem";

import styles from './ProfileFriendsAndSubs.module.scss'
import {IUserFull} from "../../types/user.interface";
import defaultAvatar from "../../assets/defaultAvatar.png";
import defaultCommunityAvatar from "../../assets/defaultCommunityAvatar.png";

interface ProfileFriendsAndSubsPropsType {
  itemStyles: any
  // avatar: string
  title: "Друзья" | "Подписки"
  // length: number | boolean
  // friends?: IUserAbbr[] | undefined
  // community?: ICommunityAbbr[] | undefined
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

            return <ProfileFriendsAndSubsItem id={friend.id}
                                              styles={itemStyles}
                                              avatar={friend.avatar || defaultAvatar}
                                              name={friend.firstName}
                                              title={title}
            />
          })
          : communities?.splice(2).map(community => {
            return <ProfileFriendsAndSubsItem
              id={community.id}
              name={community.name}
              avatar={community.imageUrl || defaultCommunityAvatar}
              styles={itemStyles}
              description={community.description}
              title={title}
            />
          })
        }
      </div>
    </div>
  );
};