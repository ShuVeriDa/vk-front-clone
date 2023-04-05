import {FC} from 'react';
import styles from "../../pages/Friends/Friends.module.scss";
import {FriendItem} from "./FriendItem/FriendItem";
import {IFriendsResponse} from "../../types/friend.interface";

interface IFoundedUserProps {
  data: IFriendsResponse
  authorizedUserId: string | number
}

export const FoundedUser: FC<IFoundedUserProps> = ({data, authorizedUserId}) => {
  return (
    <div className={styles.foundedUsers}>
      <div className={styles.title}>
        <span>Другие пользователи</span>
      </div>
      <>
        {data?.users.map(user => {
          const isFriend = data?.friends.some(fr => fr.id === user.id)

          return <FriendItem key={user.id}
                             user={user}
                             isFriend={isFriend}
                             authorizedUserId={authorizedUserId}
                             isAnotherUsers
          />
        })
        }
      </>
    </div>
  );
};