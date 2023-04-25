import {FC} from 'react';
import {CommunityHeader} from "../../components/Community/CommunityHeader/CommunityHeader";
import {useNavigate, useParams} from "react-router-dom";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {useAuth} from "../../hooks/useAuth";
import {PostsWrapper} from "../../components/Posts/PostsWrapper";
import {usePostsQuery} from "../../react-query/usePostsQuery";

import styles from './Community.module.scss';
import stylesSubsItem
  from "../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileSubscriptionsItem.module.scss";
import {ProfileFriendsAndSubs} from "../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubs";

interface ICommunityPageProps {
}

export const CommunityPage: FC<ICommunityPageProps> = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {user} = useAuth()

  const {fetchOne} = useCommunityQuery(id!)
  const {data: community, isSuccess: isSuccessCommunity} = fetchOne

  const {getCommunityPosts} = usePostsQuery(undefined, undefined, community?.id)
  const {data: posts, isSuccess: isSuccessPosts} = getCommunityPosts
  // mutate({communityId: id!})

  if(community?.name === undefined ) {
    navigate('/404')
  }

  return (
    <div className={styles.community}>
      <CommunityHeader community={community}/>
      <div className={styles.communityMain}>
        <PostsWrapper user={user!} posts={posts!} isSuccessPosts={isSuccessPosts}/>
        <div className={styles.rightSide}>
          <ProfileFriendsAndSubs itemStyles={stylesSubsItem}
                                 title={"Подписчики"}
                                 members={community?.members!}
          />
        </div>
      </div>

    </div>
  );
};