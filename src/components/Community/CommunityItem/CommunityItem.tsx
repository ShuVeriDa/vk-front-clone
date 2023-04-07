import {FC} from 'react';
import styles from './CommunityItem.module.scss';
import {Link} from "react-router-dom";
import defaultCommunityAvatar from '../../../assets/defaultCommunityAvatar.png'

import {avatarUrl} from "../../../utils/avatarUrl";
import {useFriendsQuery} from "../../../react-query/useFriendsQuery";
import {SubscribeBtn} from "../../SubscribeBtn/SubscribeBtn";
import {ICommunityAbbr} from "../../../types/community.interface";

interface ICommunityItemProps {
  authorizedUserId: number | string
  community: ICommunityAbbr
  isCommunity: boolean
  isAnotherUsers?: boolean
}

export const CommunityItem: FC<ICommunityItemProps> = (
  {
    isCommunity, community,
    authorizedUserId, isAnotherUsers
  }
) => {
  const {addFriend, removeFriend} = useFriendsQuery()
  const {mutate: remove} = removeFriend
  const {mutate: add} = addFriend

  const avatar = community.avatar !== null ? avatarUrl(community.avatar) : defaultCommunityAvatar
  const fullName = community.name

  const onClick = () => {
    // isCommunity ? remove(user.id) : add(user.id)
  }

  return (
    <div className={styles.friendItem}>
      <div className={styles.avatar}>
        <img src={avatar} alt=""/>
      </div>
      <div className={styles.info}>
        <span><Link to={`../profile/${community.id}`} className={styles.fullName}>{fullName}</Link></span>
        {isAnotherUsers
          ? <span className={styles.location}>{community.category}</span>
          : <span>{community.members && typeof community.members === 'number'}</span>
        }
      </div>
      {authorizedUserId !== community.id &&
        <div className={styles.addFriend}>
          <SubscribeBtn title={isCommunity ? 'Вы подписаны' : 'Добавить в друзья'}
                        classes={isCommunity ? styles.removeFriend : ''}
                        onChange={onClick}
          />
        </div>
      }
    </div>
  );
};