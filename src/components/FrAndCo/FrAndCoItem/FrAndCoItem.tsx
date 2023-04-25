import {FC} from 'react';
import styles from './FrAndCoItem.module.scss';
import {Link} from "react-router-dom";
import {SubscribeBtn} from "../../SubscribeBtn/SubscribeBtn";

interface IFrAndCoItemProps {
  userAndCommunityId: string | number
  category?: string
  members?: number
  isCommunity?: boolean

  isAuthorizedUser?: boolean
  isAnotherUsers?: boolean
  isFriend?: boolean
  location?: string

  onClick: () => void
  name: string
  path: string
  avatar: string
}

export const FrAndCoItem: FC<IFrAndCoItemProps> = (
  {
    location, members, category,
    avatar, userAndCommunityId,
    name, onClick, isCommunity, isFriend,
    path, isAuthorizedUser, isAnotherUsers
  }
) => {
  const isFriendOrCommunity =
    isFriend ? 'Вы подписаны' : 'Добавить в друзья' ||
    isCommunity ? 'Вы подписаны' : 'Подписаться'

  const isSubscribe = isFriend || isCommunity ? styles.removeFriend : ''

  return (
    <div className={styles.friendItem}>
        <div className={styles.avatar}>
          <img src={avatar} alt=""/>
        </div>
      <div className={styles.info}>
        <span>
          <a href={`${path}${userAndCommunityId}`}
             className={styles.fullName}>
            {name}
          </a>
        </span>
        {isAnotherUsers
          ? isAnotherUsers
            ? <span className={styles.location}>{location}</span>
            : <span>
            {/*<Link to={'/im'} className={styles.sendMessage}>Написать сообщение</Link>*/}
              <a href={'/im'} className={styles.sendMessage}>Написать сообщение</a>
          </span>
          : <>
            <span className={styles.location}>{category}</span>
            <span className={styles.location}>{members} подписчиков</span>
          </>
        }

      </div>
      <div className={styles.addFriend}>
        <SubscribeBtn title={isFriendOrCommunity}
                      classes={isSubscribe}
                      onChange={onClick}
        />
      </div>
    </div>
  )
    ;
};