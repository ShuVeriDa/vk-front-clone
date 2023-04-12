import {FC} from 'react';

import defaultAvatar from '../../../assets/defaultAvatar.png'
import styles from './ProfileHeader.module.scss'
import {IUserFull} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";

interface IProfileHeader {
  user: IUserFull | null | undefined
}

export const ProfileHeader: FC<IProfileHeader> = ({user}) => {
  const navigate = useNavigate()
  const fullName = `${user?.lastName} ${user?.firstName}`

  const {user: authUser} = useAuth()

  const avatar = `${process.env.REACT_APP_SERVER_URL}${user?.avatar}`
  const onChangeProfile = () => {
    navigate(`/edit`)
  }
  const onAddFriend = () => {
  }

  const variableBtn = () => {
    authUser?.id === user?.id
      ? onChangeProfile()
      : onAddFriend()

  }

  const buttonsName = authUser?.id === user?.id ? 'Редактировать профиль' : 'Добавить в друзья'




  return (
    <div className={styles.profileHeader}>
      <div className={styles.profileBackground}>
        <img src="" alt=""/>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profilePhoto}>
          <img src={avatar || defaultAvatar} alt=""/>
        </div>
        <div className={styles.profileDetails}>
          <div className={styles.profileNameStatusOthers}>
            <span className={styles.name}>{fullName}</span>
            <span className={styles.status}>{!user?.status.length ? 'Введите статус' : user.status}</span>
            <span className={styles.city}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100"><path
              d="M50 8C34.6 8 22 20.4 22 35.7c0 32.6 25.6 54.9 26.7 55.9.7.6 1.9.6 2.6 0 1.1-1 26.7-23.4 26.7-55.9C78 20.4 65.4 8 50 8zm0 79.3c-5.2-5-24-25-24-51.6C26 22.6 36.8 12 50 12s24 10.6 24 23.7c0 26.6-18.8 46.6-24 51.6zM50 20c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/><path
              fill="#00F" d="M1644-370v1684H-140V-370h1784m8-8H-148v1700h1800V-378z"/>
            </svg>
              <span>{user?.location}</span>
            </span>
          </div>
          <div className={styles.profileBtns}>
            <button className={styles.btn} onClick={variableBtn}>{buttonsName}</button>
            {authUser?.id !== user?.id && <button className={styles.btnMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="feather feather-message-circle">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </button>}

          </div>
        </div>
      </div>
    </div>
  );
};