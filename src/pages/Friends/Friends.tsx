import {FC, useState} from 'react';
import styles from './Friends.module.scss';
import {Link} from "react-router-dom";
import {FriendItem} from "../../components/Friends/FriendItem/FriendItem";
import {Search} from "../../components/Search/Search";
import {useFriendsQuery} from "../../react-query/useFriendsQuery";
import {avatarUrl} from "../../utils/avatarUrl";

interface IFriendsProps {
}

export const Friends: FC<IFriendsProps> = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const {searchFriends} = useFriendsQuery({firstname: firstName, lastname: lastName})
  const {data, isSuccess} = searchFriends


  return (
    <div className={styles.friends}>
      <div className={styles.friendsContainer}>
        <div className={styles.header}>
          <ul>
            <li className={styles.active}>
              <span>Все друзья <span className={styles.friendsLength}>{isSuccess && data.friends.length}</span></span>
            </li>
            <li>
              Друзья онлайн
            </li>
            <li>
              <Link to={'find'}>Найти друзья</Link>
            </li>
          </ul>
        </div>
        <Search firstName={firstName} setFirstName={setFirstName}/>
        <>
          {isSuccess && data.friends.map(friend => <FriendItem key={friend.id} friend={friend!}/>)}
        </>
      </div>

      <div className={styles.foundedUsers}>
        <div className={styles.title}>
          <span>Другие пользователи</span>
        </div>
        <>
          {isSuccess && data.users.map(user => <FriendItem key={user.id} friend={user!}/>)}
        </>

      </div>
    </div>
  );
};