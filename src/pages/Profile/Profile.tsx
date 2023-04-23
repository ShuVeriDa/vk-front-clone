import {FC, useEffect} from 'react';

import {ProfileHeader} from "../../components/Profile/ProfileHeader/ProfileHeader";
import {ProfileFriendsAndSubs} from "../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubs";
import styles from './Profile.module.scss'
import stylesFriendsItem
  from '../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileFriendsItem.module.scss'
import stylesSubsItem
  from '../../components/Profile/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileSubscriptionsItem.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {usePostsQuery} from "../../react-query/usePostsQuery";
import {useUsersQuery} from "../../react-query/useUsersQuery";
import {PostsWrapper} from "../../components/Posts/PostsWrapper";
import {useQueryClient} from "@tanstack/react-query";

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  const {getMyPosts} = usePostsQuery(id!)
  const {getUserById} = useUsersQuery(id!)
  const {data: user, isSuccess: isSuccessUser} = getUserById
  const {data: posts, isSuccess: isSuccessPosts} = getMyPosts

  if(user?.firstName === undefined || user.lastName === undefined) {
    navigate('/404')
  }

  const client = useQueryClient()

  useEffect(() => {
    client.invalidateQueries( ['user', 'one'])
  }, [])

  return (
    <div className={styles.profile}>
      <ProfileHeader user={isSuccessUser ? user : undefined} profileId={id!}/>
      <div className={styles.profileMain}>
        <PostsWrapper posts={posts!}
                      isSuccessPosts={isSuccessPosts}
                      user={user!}
                      profileId={id!}
        />
        <div className={styles.rightSide}>
          <ProfileFriendsAndSubs itemStyles={stylesFriendsItem}
                                 title={"Друзья"}
                                 friends={user?.friends!}
          />

          <ProfileFriendsAndSubs itemStyles={stylesSubsItem}
                                 title={"Подписки"}
                                 communities={user?.communities!}
          />
        </div>
      </div>

    </div>
  );
};