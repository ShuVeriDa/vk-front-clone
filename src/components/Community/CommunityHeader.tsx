import {FC} from 'react';
import styles from '../../pages/Community/Community.module.scss';
import {Link} from "react-router-dom";
interface ICommunityHeaderProps {

  communityLength: number | boolean
}

export const CommunityHeader: FC<ICommunityHeaderProps> = ({ communityLength}) => {
  return (
    <div className={styles.header}>
      <ul>
        <li className={styles.active}>
          <div>
            <span>Все сообщества <span className={styles.friendsLength}>{communityLength}</span></span>
          </div>

        </li>
        <li>
          <div>
            Управление
          </div>
        </li>
        <li>
          <div>
            <Link to={'find'}>Создать сообщество</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};