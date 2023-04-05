import {FC, useState} from 'react';
import styles from './FriendItem.module.scss';
import {Link} from "react-router-dom";
import defaultAvatar from '../../../assets/defaultAvatar.png'

import {avatarUrl} from "../../../utils/avatarUrl";
import {IFriend, IFriendsResponse} from "../../../types/friend.interface";
import {useFriendsQuery} from "../../../react-query/useFriendsQuery";
import {IUserAbbr} from "../../../types/user.interface";
import {SubmitButton} from "../../SubmitButton/SubmitButton";
import {SubscribeBtn} from "../../SubscribeBtn/SubscribeBtn";

interface IFriendItemProps {
  authorizedUserId: number | string
  user: IFriend | IUserAbbr
  isFriend: boolean
  isAnotherUsers?: boolean
}

export const FriendItem: FC<IFriendItemProps> = (
  {
    user, isFriend,
    authorizedUserId, isAnotherUsers
  }
) => {
  const {addFriend, removeFriend} = useFriendsQuery()
  const {mutate: remove} = removeFriend
  const {mutate: add} = addFriend

  const avatar = user.avatar !== null ? avatarUrl(user.avatar) : defaultAvatar
  const fullName = `${user.firstName} ${user.lastName}`

  const onClick = () => {
    isFriend ? remove(user.id) : add(user.id)
  }

  return (
    <div className={styles.friendItem}>
      <div className={styles.avatar}>
        <img src={avatar} alt=""/>
      </div>
      <div className={styles.info}>
        <span><Link to={`../profile/${user.id}`} className={styles.fullName}>{fullName}</Link></span>
        {isAnotherUsers
          ? <span className={styles.location}>{user.location}</span>
          : <span><Link to={'/im'} className={styles.sendMessage}>Написать сообщение</Link></span>
        }
      </div>
      {authorizedUserId !== user.id &&
        <div className={styles.addFriend}>
          <SubscribeBtn title={isFriend ? 'Вы подписаны' : 'Добавить в друзья'}
                        classes={isFriend ? styles.removeFriend : ''}
                        onChange={onClick}
          />
        </div>
      }
    </div>
  );
};