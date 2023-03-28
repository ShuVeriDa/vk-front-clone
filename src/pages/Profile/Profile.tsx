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
import {useQuery} from "@tanstack/react-query";
import {PostService} from "../../services/post.service";
import {useParams} from "react-router-dom";
import {UserService} from "../../services/user.service";

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  const {id} = useParams()
  const {data: posts, isLoading, isSuccess: isSuccessPosts} = useQuery({
    queryFn: () => PostService.fetchMyPosts(id!),
    queryKey: ['myPosts', 'all']
  })

  const {data: user, isSuccess: isSuccessUser} = useQuery({
    queryFn: () => UserService.fetchUser(id!),
    queryKey: ['user', 'one']
  })


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
          <PostWrite/>
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
                                 user={user!}
          />
        </div>
      </div>

    </div>
  );
};