import {FC} from 'react';
import styles from './FrAndCoFounded.module.scss';
import {ICommunitySearchResponse} from "../../../types/community.interface";
import {CommunityItem} from "../CommunityItem/CommunityItem";
import {IFriendsResponse} from "../../../types/friend.interface";
import {FriendItem} from "../FriendItem/FriendItem";

interface IFoundedUserProps {
  authorizedUserId: string | number
  communities?: ICommunitySearchResponse
  friends?: IFriendsResponse
}

export const FrAndCoFounded: FC<IFoundedUserProps> = ({communities, friends, authorizedUserId}) => {
  return (
    <div className={styles.founded}>
      <div className={styles.title}>
        {communities
          ?
          <span className={styles.results}>Результаты поиска <span className={styles.total}>{communities?.total}</span>
        </span>
          : <span className={styles.results}>Другие пользователи <span className={styles.total}>{friends?.total}</span>
          </span>
        }
      </div>
      <>
        {
          communities
          && communities?.otherCommunities.map(community => {
            const isCommunity = communities?.myCommunities.some(co => co.id === community.id)

            return <CommunityItem key={community.id}
                                  community={community}
                                  isCommunity={isCommunity!}
            />
          })
        }
        {
          friends
          && friends?.users.map(user => {
            const isFriend = friends?.friends.some(fr => fr.id === user.id)

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