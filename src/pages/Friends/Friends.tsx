import {FC, useCallback, useState} from 'react';
import styles from './Friends.module.scss';
import {Link} from "react-router-dom";
import {FriendItem} from "../../components/Friends/FriendItem/FriendItem";
import {Search} from "../../components/Search/Search";
import {useFriendsQuery} from "../../react-query/useFriendsQuery";
import {avatarUrl} from "../../utils/avatarUrl";
import {useAuth} from "../../hooks/useAuth";
import debounce from "lodash.debounce";

interface IFriendsProps {
}

export const Friends: FC<IFriendsProps> = () => {
  const {user: authorizedUser} = useAuth()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const {searchFriends} = useFriendsQuery({firstname: firstName, lastname: lastName})
  const {data, isSuccess} = searchFriends

  const updateSearch = useCallback(
    debounce((str: string) => {
      setFirstName(str)
    }, 350), []
  )


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
        <Search firstName={firstName}
                lastName={lastName}
                updateSearch={updateSearch}
                setFirstName={setFirstName}
                setLastName={setLastName}
        />
        <>
          {isSuccess && data.friends.map(friend => {
              return <FriendItem key={friend.id}
                                 user={friend}
                                 isFriend
                                 authorizedUserId={authorizedUser?.id!}
              />
            }
          )
          }
        </>
      </div>

      <div className={styles.foundedUsers}>
        <div className={styles.title}>
          <span>Другие пользователи</span>
        </div>
        <>
          {isSuccess && data.users.map(user => {
            const isFriend = data.friends.some(fr => fr.id === user.id)

            return <FriendItem key={user.id}
                               user={user}
                               isFriend={isFriend}
                               authorizedUserId={authorizedUser?.id!}
                               isAnotherUsers
            />
          })
          }
        </>
      </div>
    </div>
  );
};