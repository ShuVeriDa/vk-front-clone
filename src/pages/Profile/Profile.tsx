import {FC} from 'react';

import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";
import {ProfileWall} from "../../components/ProfileWall/ProfileWall";
import {PostWrite} from "../../components/Posts/PostWrite/PostWrite";
import {CategoryPosts} from "../../components/CategoryPosts/CategoryPosts";
import {PostItem} from "../../components/Posts/PostItem/PostItem";
import {ProfileFriendsAndSubs} from "../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubs";
import styles from './Profile.module.scss'
import stylesFriendsItem
  from '../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileFriendsItem.module.scss'
import stylesSubsItem
  from '../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileSubscriptionsItem.module.scss'
import {useParams} from "react-router-dom";
import {usePostsQuery} from "../../react-query/usePostsQuery";
import {useUsersQuery} from "../../react-query/useUsersQuery";
import {PostsWrapper} from "../../components/Posts/PostsWrapper";

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  const {id} = useParams()

  const {getMyPosts} = usePostsQuery(id!)
  const {getUserById} = useUsersQuery(id!)
  const {data: user, isSuccess: isSuccessUser} = getUserById
  const {data: posts, isSuccess: isSuccessPosts} = getMyPosts

  return (
    <div className={styles.profile}>
      <ProfileHeader user={isSuccessUser ? user : undefined}/>
      <div className={styles.profileMain}>
        <PostsWrapper posts={posts!} isSuccessPosts={isSuccessPosts} user={user!} />
        <div className={styles.rightSide}>
          <ProfileFriendsAndSubs itemStyles={stylesFriendsItem}
                                 title={"Друзья"}
                                 user={isSuccessUser ? user : undefined}

          />

          <ProfileFriendsAndSubs itemStyles={stylesSubsItem}
                                 title={"Подписки"}
                                 user={isSuccessUser ? user : undefined}
          />
        </div>
      </div>

    </div>
  );
};