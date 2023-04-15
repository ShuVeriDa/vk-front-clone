import {FC, useRef, useState} from 'react';

import defaultAvatar from '../../../assets/defaultAvatar.png'
import styles from './ProfileHeader.module.scss'
import {IUserFull} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";
import {LocationSVG, PhotoSVG} from "../../SvgComponent";

interface IProfileHeader {
  user: IUserFull | null | undefined
}

export const ProfileHeader: FC<IProfileHeader> = ({user}) => {
  const inputFileRef = useRef<any>(null)
  const navigate = useNavigate()
  const fullName = `${user?.lastName} ${user?.firstName}`

  const [show, setShow] = useState(false)

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
        <div className={styles.profilePhoto}
             onMouseEnter={() => {
               setShow(true)
             }}
        >
          <img src={avatar || defaultAvatar}
               alt=""
          />
        </div>
        {show && <div className={styles.input}
                      onClick={() => inputFileRef.current.click()}
                      onMouseLeave={() => {
                        setShow(false)
                      }}
        >
          <div className={styles.info}>
            <PhotoSVG/>
            <span>Загрузить фотографию</span>
          </div>
          <input type="file" ref={inputFileRef} hidden/>
        </div>}
        <div className={styles.profileDetails}>
          <div className={styles.profileNameStatusOthers}>
            <span className={styles.name}>{fullName}</span>
            <span className={styles.status}>{!user?.status.length ? 'Введите статус' : user.status}</span>
            <span className={styles.city}>
              <LocationSVG/>
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