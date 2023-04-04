import {FC} from 'react';
import styles from './FriendItem.module.scss';
import {Link} from "react-router-dom";
import {IFriend} from "../../types/user.interface";
import {avatarUrl} from "../../utils/avatarUrl";

interface IFriendItemProps {
  friend: IFriend
}

export const FriendItem: FC<IFriendItemProps> = ({friend}) => {
  // const avatar = avatarUrl(friend.avatar)
  // console.log(avatar)
  const fullName = `${friend.firstName} ${friend.lastName}`
  return (
    <div className={styles.friendItem}>
      <div className={styles.avatar}>
        <img src={friend.avatar} alt=""/>
      </div>
      <div className={styles.info}>
        <span><Link to={`../profile/${friend.id}`} className={styles.fullName}>{fullName}</Link></span>
        <span><Link to={'/im'} className={styles.sendMessage}>Написать сообщение</Link></span>
      </div>
    </div>
  );
};