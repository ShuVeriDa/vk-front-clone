import {FC} from 'react';
import styles from '../../pages/Friends/Friends.module.scss';
import {Link} from "react-router-dom";
interface IFriendsHeaderProps {

  friendsLength: number | boolean
}

export const FriendsHeader: FC<IFriendsHeaderProps> = ({ friendsLength}) => {
  return (
    <div className={styles.header}>
      <ul>
        <li className={styles.active}>
          <span>Все друзья <span className={styles.friendsLength}>{friendsLength}</span></span>
        </li>
        <li>
          Друзья онлайн
        </li>
        <li>
          <Link to={'find'}>Найти друзья</Link>
        </li>
      </ul>
    </div>
  );
};