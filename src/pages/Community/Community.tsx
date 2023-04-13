import {FC} from 'react';
import {CommunityHeader} from "../../components/Community/CommunityHeader/CommunityHeader";
import {useParams} from "react-router-dom";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {useAuth} from "../../hooks/useAuth";
import {PostsWrapper} from "../../components/Posts/PostsWrapper";
import {usePostsQuery} from "../../react-query/usePostsQuery";

import styles from './Community.module.scss';
import stylesSubsItem
  from "../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileSubscriptionsItem.module.scss";
import {ProfileFriendsAndSubs} from "../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubs";
import {
  ProfileFriendsAndSubsItem
} from "../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileFriendsAndSubsItem";
import defaultCommunityAvatar from "../../assets/defaultCommunityAvatar.png";
import stylesFriendsItem
  from "../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileFriendsItem.module.scss";

interface ICommunityPageProps {
}

export const CommunityPage: FC<ICommunityPageProps> = () => {
  const {id} = useParams()
  const {user} = useAuth()

  const {fetchOne} = useCommunityQuery(id!)
  const {data: community, isSuccess: isSuccessCommunity} = fetchOne

  const {getCommunityPosts} = usePostsQuery(undefined, undefined, community?.id)
  const {data: posts, isSuccess: isSuccessPosts} = getCommunityPosts
  // mutate({communityId: id!})
  console.log(posts)

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