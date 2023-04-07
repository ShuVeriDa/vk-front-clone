import {FC} from 'react';
import styles from './CommunityItem.module.scss';
import {Link} from "react-router-dom";
import defaultCommunityAvatar from '../../../assets/defaultCommunityAvatar.png'

import {avatarUrl} from "../../../utils/avatarUrl";
import {useFriendsQuery} from "../../../react-query/useFriendsQuery";
import {SubscribeBtn} from "../../SubscribeBtn/SubscribeBtn";
import {ICommunitySearchAbbr, ICommunitySearchResponse} from "../../../types/community.interface";

interface ICommunityItemProps {
  authorizedUserId: number | string
  community: ICommunitySearchAbbr
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
        <span>
          <Link to={`../profile/${community.id}`}
                className={styles.fullName}
          >
            {fullName}
          </Link>
        </span>
        <span className={styles.location}>{community.category}</span>
        <span className={styles.location}>{community.members} подписчиков</span>

      </div>
      {authorizedUserId !== community.id &&
        <div className={styles.addFriend}>
          <SubscribeBtn title={isCommunity ? 'Вы подписаны' : 'Подписаться'}
                        classes={isCommunity ? styles.removeFriend : ''}
                        onChange={onClick}
          />
        </div>
      }
    </div>
  );
};