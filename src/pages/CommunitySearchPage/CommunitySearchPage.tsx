import {FC, useState} from 'react';
import styles from '../../components/FrAndCo/FrAndCoPage.module.scss'
import {Search} from "../../components/Search/Search";
import {useAuth} from "../../hooks/useAuth";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {FrAndCoHeader} from "../../components/FrAndCo/FrAndCoHeader";
import {CommunityItem} from "../../components/FrAndCo/CommunityItem/CommunityItem";
import {FrAndCoNotFound} from "../../components/FrAndCo/FrAndCoNotFound/FrAndCoNotFound";
import {FrAndCoFounded} from "../../components/FrAndCo/FrAndCoFounded/FrAndCoFounded";
import {useDebounce} from "../../hooks/useDebounce";

interface ICommunitySearchPageProps {
}

export const CommunitySearchPage: FC<ICommunitySearchPageProps> = () => {
  const {user: authorizedUser} = useAuth()
  const [name, setName] = useState('')

  const {searchCommunity} = useCommunityQuery({name: name})
  const {data: communities, isSuccess, status} = searchCommunity

  const updateSearch = useDebounce(setName, 350)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FrAndCoHeader firstText={'Все сообщества'}
                       secondText={"Управление"}
                       thirdText={"Создать сообщество"}
                       url={"create"}
                       itemsLength={isSuccess && communities.myCommunities.length}
        />
        <Search updateSearch={updateSearch}
                status={status}
                placeholder={'Поиск сообществ'}
        />
        <>
          {isSuccess && communities.myCommunities.map(community => {
              return <CommunityItem key={community.id}
                                    community={community}
                                    isCommunity
              />
            }
          )
          }
          {communities?.myCommunities?.length === 0 && <FrAndCoNotFound/>}
        </>
      </div>
      {name
        && communities?.otherCommunities?.length !== 0
        && <FrAndCoFounded communities={communities!}
                           authorizedUserId={authorizedUser?.id!}
        />
      }

    </div>
  );
};