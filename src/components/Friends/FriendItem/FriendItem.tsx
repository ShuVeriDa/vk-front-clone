import {FC, useState} from 'react';
import styles from './FriendItem.module.scss';
import {Link} from "react-router-dom";
import defaultAvatar from '../../../assets/defaultAvatar.png'

import {avatarUrl} from "../../../utils/avatarUrl";
import {IFriend} from "../../../types/friend.interface";
import {useFriendsQuery} from "../../../react-query/useFriendsQuery";
import {IUserAbbr} from "../../../types/user.interface";

interface IFriendItemProps {
  friend: IFriend | IUserAbbr
}

export const FriendItem: FC<IFriendItemProps> = ({friend}) => {
  const avatar = friend.avatar !== null ?  avatarUrl(friend.avatar) : defaultAvatar
  const fullName = `${friend.firstName} ${friend.lastName}`

  return (
    <div className={styles.friendItem}>
      <div className={styles.avatar}>
        <img src={avatar} alt=""/>
      </div>
      <div className={styles.info}>
        <span><Link to={`../profile/${friend.id}`} className={styles.fullName}>{fullName}</Link></span>
        <span><Link to={'/im'} className={styles.sendMessage}>Написать сообщение</Link></span>
      </div>
    </div>
  );
};