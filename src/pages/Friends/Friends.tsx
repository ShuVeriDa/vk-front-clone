import {FC, useCallback, useState} from 'react';
import styles from './Friends.module.scss';
import {Link} from "react-router-dom";
import {FriendItem} from "../../components/Friends/FriendItem/FriendItem";
import {Search} from "../../components/Search/Search";
import {useFriendsQuery} from "../../react-query/useFriendsQuery";
import {avatarUrl} from "../../utils/avatarUrl";
import {useAuth} from "../../hooks/useAuth";
import debounce from "lodash.debounce";
import {FriendsHeader} from "../../components/Friends/FriendsHeader";
import {FoundedUser} from "../../components/Friends/FoundedUser";
import {FriendNotFound} from "../../components/Friends/FriendNotFound";

interface IFriendsProps {
}

export const Friends: FC<IFriendsProps> = () => {
  const {user: authorizedUser} = useAuth()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  const {searchFriends} = useFriendsQuery({firstname: firstName, lastname: lastName})
  const {data, isSuccess, status} = searchFriends

  const updateSearch = useCallback(
    debounce((str: string) => {
      setFirstName(str)
    }, 350), []
  )



  return (
    <div className={styles.friends}>
      <div className={styles.friendsContainer}>
        <FriendsHeader friendsLength={isSuccess && data.friends.length}/>
        <Search firstName={firstName}
                lastName={lastName}
                updateSearch={updateSearch}
                setFirstName={setFirstName}
                setLastName={setLastName}
                status={status}
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
          {data?.friends.length === 0 && <FriendNotFound text={firstName}/>}
        </>
      </div>
      {firstName && data?.users.length !== 0 && <FoundedUser data={data!} authorizedUserId={authorizedUser?.id!} />}

    </div>
  );
};