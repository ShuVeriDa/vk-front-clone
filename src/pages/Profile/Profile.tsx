import {FC} from 'react';

import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";
import {ProfileWall} from "../../components/ProfileWall/ProfileWall";
import {PostWrite} from "../../components/PostWrite/PostWrite";
import {CategoryPosts} from "../../components/CategoryPosts/CategoryPosts";
import {Post} from "../../components/Post/Post";
import {ProfileFriendsAndSubs} from "../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubs";

import defaultAvatar from "../../assets/defaultAvatar.png";
import defaultDescAvatar from "../../assets/defaultDescAvatar.png";
import styles from './Profile.module.scss'
import stylesFriendsItem from '../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileFriendsItem.module.scss'
import stylesSubsItem from '../../components/ProfileFriendsAndSubs/ProfileFriendsAndSubsItem/ProfileSubscriptionsItem.module.scss'

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  const borderRadius = {
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  }
  return (
    <div className={styles.profile}>
      <ProfileHeader/>
      <div className={styles.profileMain}>
        <div className={styles.profilePosts}>
          <ProfileWall/>
          <PostWrite/>
          <CategoryPosts/>
          <Post borderRadius={borderRadius}/>
          <Post/>
          <Post/>
        </div>
        <div className={styles.rightSide}>
          <ProfileFriendsAndSubs itemStyles={stylesFriendsItem}
                                 avatar={defaultAvatar}
                                 title={"Друзья"}
                                 length={5}
                                 name={'Адам'}
          />
          <ProfileFriendsAndSubs itemStyles={stylesSubsItem}
                                 avatar={defaultDescAvatar}
                                 title={"Подписки"}
                                 length={18}
                                 name={'Гуллам'}
                                 description={'Описание группы'}
          />
        </div>
      </div>

    </div>
  );
};