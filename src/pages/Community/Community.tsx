import {FC, useCallback, useState} from 'react';
import styles from './Community.module.scss';
import {FriendItem} from "../../components/Friends/FriendItem/FriendItem";
import {Search} from "../../components/Search/Search";
import {useFriendsQuery} from "../../react-query/useFriendsQuery";
import {useAuth} from "../../hooks/useAuth";
import debounce from "lodash.debounce";
import {FriendsHeader} from "../../components/Friends/FriendsHeader";
import {FoundedUser} from "../../components/Friends/FoundedUser";
import {FriendNotFound} from "../../components/Friends/FriendNotFound";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {CommunityItem} from "../../components/Community/CommunityItem/CommunityItem";

interface ICommunityProps {
}

export const Community: FC<ICommunityProps> = () => {
  const {user: authorizedUser} = useAuth()
  const [name, setName] = useState('')

  const {searchCommunity} = useCommunityQuery({name: name})
  const {data, isSuccess, status} = searchCommunity

  const updateSearch = useCallback(
    debounce((str: string) => {
      setName(str)
    }, 350), []
  )

  return (
    <div className={styles.community}>
      <div className={styles.communityContainer}>
        <FriendsHeader friendsLength={isSuccess && data.communities.length}/>
        <Search name={name}
                updateSearch={updateSearch}
                setName={setName}
                status={status}
        />
        <>
          {isSuccess && data.communities.map(community => {
              return <CommunityItem key={community.id}
                                 community={community}
                                 isCommunity
                                 authorizedUserId={authorizedUser?.id!}
              />
            }
          )
          }
          {data?.communities.length === 0 && <FriendNotFound text={name}/>}
        </>
      </div>
      {/*{name && data?.communities.length !== 0 && <FoundedUser data={data!} authorizedUserId={authorizedUser?.id!} />}*/}

    </div>
  );
};