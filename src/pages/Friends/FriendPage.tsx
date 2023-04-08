import {FC, useState} from 'react';
import styles from '../../components/FrAndCo/FrAndCoPage.module.scss';
import {Search} from "../../components/Search/Search";
import {useFriendsQuery} from "../../react-query/useFriendsQuery";
import {useAuth} from "../../hooks/useAuth";
import {FrAndCoNotFound} from "../../components/FrAndCo/FrAndCoNotFound/FrAndCoNotFound";
import {FrAndCoHeader} from "../../components/FrAndCo/FrAndCoHeader";
import {FrAndCoFounded} from "../../components/FrAndCo/FrAndCoFounded/FrAndCoFounded";
import {FriendItem} from "../../components/FrAndCo/FriendItem/FriendItem";
import {useDebounce} from "../../hooks/useDebounce";

interface IFriendPageProps {
}

export const FriendPage: FC<IFriendPageProps> = () => {
  const {user: authorizedUser} = useAuth()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const {searchFriends} = useFriendsQuery({firstname: name, lastname: lastName})
  const {data, isSuccess, status} = searchFriends

  const updateSearch = useDebounce(setName, 350)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FrAndCoHeader firstText={'Все друзья'}
                       secondText={"Друзья онлайн"}
                       thirdText={"Найти друзья"}
                       url={"find"}
                       flag={true}
                       itemsLength={isSuccess && data.friends.length}
        />
        <Search updateSearch={updateSearch}
                status={status}
                placeholder={'Поиск друзей'}
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
          {data?.friends.length === 0 && <FrAndCoNotFound text={name}/>}
        </>
      </div>
      {name && data?.users.length !== 0 &&
        <FrAndCoFounded friends={data!} authorizedUserId={authorizedUser?.id!}/>}

    </div>
  );
};