import {FC, useCallback, useState} from 'react';
import styles from './Community.module.scss';
import {Search} from "../../components/Search/Search";
import {useAuth} from "../../hooks/useAuth";
import debounce from "lodash.debounce";
import {FriendNotFound} from "../../components/Friends/FriendNotFound";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {CommunityItem} from "../../components/Community/CommunityItem/CommunityItem";
import {CommunityHeader} from "../../components/Community/CommunityHeader";
import {useUsersQuery} from "../../react-query/useUsersQuery";
import {CommunityNotFound} from "../../components/Community/CommunityNotFound";
import {FoundedUser} from "../../components/Friends/FoundedUser";
import {FoundedCommunity} from "../../components/Community/FoundedCommunity";

interface ICommunityProps {
}

export const Community: FC<ICommunityProps> = () => {
  const {user: authorizedUser} = useAuth()
  const {getUserById} = useUsersQuery(authorizedUser?.id!)
  const {data: users} = getUserById
  const [name, setName] = useState('')

  const {searchCommunity} = useCommunityQuery({name: name})
  const {data: communities, isSuccess, status} = searchCommunity

  const updateSearch = useCallback(
    debounce((str: string) => {
      setName(str)
    }, 350), []
  )

  console.log(communities?.myCommunities)


  return (
    <div className={styles.community}>
      <div className={styles.communityContainer}>
        <CommunityHeader communityLength={isSuccess && communities.myCommunities.length}/>
        <Search name={name}
                updateSearch={updateSearch}
                setName={setName}
                status={status}
        />
        <>
          {isSuccess && communities.myCommunities.map(community => {
              const isCommunity = users?.communities?.some(co => co.id === community.id)


              return <CommunityItem key={community.id}
                                    community={community}
                                    isCommunity={isCommunity!}
                                    authorizedUserId={authorizedUser?.id!}
              />
            }
          )
          }
          {communities?.myCommunities?.length === 0 && <CommunityNotFound/>}
        </>
      </div>
      {name
        && communities?.otherCommunities?.length !== 0
        && <FoundedCommunity data={communities!}
                             authorizedUserId={authorizedUser?.id!}
        />
      }

    </div>
  );
};