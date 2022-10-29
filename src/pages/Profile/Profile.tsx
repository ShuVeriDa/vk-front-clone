import {FC} from 'react';

import styles from './Profile.module.scss'
import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";

interface ProfilePropsType {
}

export const Profile: FC<ProfilePropsType> = () => {
  return (
    <div className={styles.profile}>
      <ProfileHeader />




    </div>
  );
};