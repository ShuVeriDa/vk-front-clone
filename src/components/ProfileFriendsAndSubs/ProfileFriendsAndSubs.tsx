import {FC} from 'react';
import {Link} from "react-router-dom";

import {ProfileFriendsAndSubsItem} from "./ProfileFriendsAndSubsItem/ProfileFriendsAndSubsItem";

import styles from './ProfileFriendsAndSubs.module.scss'

interface ProfileFriendsAndSubsPropsType {
  itemStyles: any
  avatar: string
  title: string
  length: number
  name: string
  description?: string

}

export const ProfileFriendsAndSubs: FC<ProfileFriendsAndSubsPropsType> = ({ itemStyles, avatar, title, length, description, name}) => {
  return (
    <div className={styles.profileFrAndSubs}>
      <div className={styles.profileFrAndSubsHeader}>
        <Link to={"/"}>
          <span className={styles.name}>{title} </span>
          <span className={styles.count}>{length}</span>
        </Link>
      </div>
      <div className={styles.friendsItems || styles.profileSubsItems}>
        <ProfileFriendsAndSubsItem styles={itemStyles} avatar={avatar} name={name} description={description} />
        <ProfileFriendsAndSubsItem styles={itemStyles} avatar={avatar} name={name} description={description} />
        <ProfileFriendsAndSubsItem styles={itemStyles} avatar={avatar} name={name} description={description} />
        <ProfileFriendsAndSubsItem styles={itemStyles} avatar={avatar} name={name} description={description} />
        <ProfileFriendsAndSubsItem styles={itemStyles} avatar={avatar} name={name} description={description} />
        <ProfileFriendsAndSubsItem styles={itemStyles} avatar={avatar} name={name} description={description} />
        <ProfileFriendsAndSubsItem styles={itemStyles} avatar={avatar} name={name} description={description} />
      </div>
    </div>
  );
};