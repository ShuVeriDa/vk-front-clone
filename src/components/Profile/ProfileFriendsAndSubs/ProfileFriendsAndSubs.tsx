import {FC} from 'react';
import {Link} from "react-router-dom";

import {ProfileFriendsAndSubsItem} from "./ProfileFriendsAndSubsItem/ProfileFriendsAndSubsItem";

import styles from './ProfileFriendsAndSubs.module.scss'
import {IUserAbbr} from "../../../types/user.interface";
import defaultAvatar from "../../../assets/img/defaultAvatar.png";
import defaultCommunityAvatar from "../../../assets/img/defaultCommunityAvatar.png";
import {ICommunity, ICommunityFull} from "../../../types/community.interface";
import {IFriend} from "../../../types/friend.interface";
import stylesFriendsItem from "./ProfileFriendsAndSubsItem/ProfileFriendsItem.module.scss";
import {serverUrl} from "../../../utils/serverUrl";

interface ProfileFriendsAndSubsPropsType {
  itemStyles: any
  title: "Друзья" | "Подписки" | 'Подписчики'
  // user: IUserFull | undefined
  communities?: ICommunity[] | ICommunityFull[]
  friends?: IFriend[]
  members?: IUserAbbr[]
}

export const ProfileFriendsAndSubs: FC<ProfileFriendsAndSubsPropsType> = (
  {
    itemStyles,
    title,
    friends, communities,
    members

  }) => {
  const friendsLength = friends?.length
  const communityLength = communities?.length
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
          && friends?.map(friend => {

            return <ProfileFriendsAndSubsItem key={friend.id}
                                              id={friend.id}
                                              styles={itemStyles}
                                              avatar={friend.avatar || defaultAvatar}
                                              name={friend.firstName}
                                              title={title}

            />
          })
        }
        {title === "Подписки" && communities?.map(community => {
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
        {
         title === 'Подписчики' && members?.map(member => {
           const avatar = member.avatar !== null ? serverUrl(member.avatar): defaultAvatar
            return <ProfileFriendsAndSubsItem key={member.id}
                                              id={member.id}
                                              name={member.firstName}
                                              avatar={avatar}
                                              styles={stylesFriendsItem}
                                              title={'Подписчики'}
            />
          }).splice(0, 8)
        }
      </div>
    </div>
  );
};