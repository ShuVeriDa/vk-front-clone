import {FC} from 'react';
import styles from './Friends.module.scss';
import {useAuth} from "../../hooks/useAuth";
import {useUsersQuery} from "../../react-query/useUsersQuery";
import {Link} from "react-router-dom";
import {FriendItem} from "../../components/FriendItem/FriendItem";
import {Search} from "../../components/Search/Search";

interface IFriendsProps {
}

export const Friends: FC<IFriendsProps> = () => {
  const {user} = useAuth()
  const {getUserById} = useUsersQuery(user?.id!)
  const {data} = getUserById
  const friends = data?.friends


  return (
    <div className={styles.friends}>
      <div className={styles.header}>
        <ul>
          <li className={styles.active}>
            <span>Все друзья <span className={styles.friendsLength}>{friends?.length}</span></span>
          </li>
          <li>
            Друзья онлайн
          </li>
          <li>
            <Link to={'find'}>Найти друзья</Link>
          </li>
        </ul>
      </div>
      <Search/>
      {friends?.map(friend => <FriendItem key={friend.id} friend={friend!}/>)}

    </div>
  );
};