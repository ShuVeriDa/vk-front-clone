import {FC} from 'react';
import styles from "../../pages/Community/Community.module.scss";

import {IFriendsResponse} from "../../types/friend.interface";
import {CommunityItem} from "./CommunityItem/CommunityItem";
import {ICommunitySearchAbbr, ICommunitySearchResponse} from "../../types/community.interface";

interface IFoundedUserProps {
  data: ICommunitySearchResponse
  authorizedUserId: string | number
}

export const FoundedCommunity: FC<IFoundedUserProps> = ({data, authorizedUserId}) => {
  return (
    <div className={styles.foundedUsers}>
      <div className={styles.title}>
        <span>Другие пользователи</span>
      </div>
      <>
        {data?.otherCommunities.map(community => {
          const isCommunity = data?.myCommunities.some(co => co.id === community.id)

          return <CommunityItem key={community.id}
                                community={community}
                                isCommunity={isCommunity!}
                                authorizedUserId={authorizedUserId}
          />
        })
        }
      </>
    </div>
  );
};