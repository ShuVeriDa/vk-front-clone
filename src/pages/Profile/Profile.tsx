import {FC} from 'react';

import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";
import {ProfileWall} from "../../components/ProfileWall/ProfileWall";
import {PostWrite} from "../../components/Post/PostWrite/PostWrite";
import {CategoryPosts} from "../../components/CategoryPosts/CategoryPosts";
import {Post} from "../../components/Post/Post";
import {ProfileFriendsAndSubs} from "../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubs";
import styles from './Profile.module.scss'
import stylesFriendsItem
  from '../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileFriendsItem.module.scss'
import stylesSubsItem
  from '../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileSubscriptionsItem.module.scss'
import {useParams} from "react-router-dom";
import {usePostsQuery} from "../../react-query/usePostsQuery";
import {useUsersQuery} from "../../react-query/useUsersQuery";

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  const {id} = useParams()

  const {getMyPosts} = usePostsQuery(id!)
  const {getUserById} = useUsersQuery(id!)
  const {data: user, isSuccess: isSuccessUser} = getUserById
  const {data: posts, isSuccess: isSuccessPosts} = getMyPosts

  const borderRadius = {
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  }

  return (
    <div className={styles.profile}>
      <ProfileHeader user={isSuccessUser ? user : undefined}/>
      <div className={styles.profileMain}>
        <div className={styles.profilePosts}>
          <ProfileWall/>
          <PostWrite avatar={user?.avatar}/>
          <CategoryPosts/>
          {isSuccessPosts && posts.map((post, i) => {
            return <Post key={post.id}
                         post={post}
                         borderRadius={i === 0 ? borderRadius : undefined}
            />
          })}
        </div>
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