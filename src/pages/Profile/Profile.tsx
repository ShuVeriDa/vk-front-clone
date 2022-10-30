import {FC} from 'react';

import styles from './Profile.module.scss'
import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";
import {ProfileWall} from "../../components/ProfileWall/ProfileWall";

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  return (
    <div className={styles.profile}>
      <ProfileHeader />
      <ProfileWall />



    </div>
  );
};