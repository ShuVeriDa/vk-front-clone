import {ChangeEvent, FC, useMemo, useRef, useState} from 'react';

import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import styles from './ProfileHeader.module.scss'
import {IUserFull, IUserUpdate} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {LocationSVG, MessageBtn} from "../../SvgComponent";
import {useUsersQuery} from "../../../react-query/useUsersQuery";
import {useUploadQuery} from "../../../react-query/useUploadQuery";
import {UploadImage} from "../../UploadImage/UploadImage";

interface IProfileHeader {
  user: IUserFull | null | undefined
  profileId: string | number
}

export const ProfileHeader: FC<IProfileHeader> = ({user, profileId}) => {
  const inputFileRef = useRef<any>(null)
  const navigate = useNavigate()
  const fullName = useMemo(() => `${user?.lastName} ${user?.firstName}`, [user])

  const [show, setShow] = useState(false)

  const {user: authUser} = useAuth()

  const {updateUser, getUserById} = useUsersQuery(authUser?.id!)
  const {mutate: uploadImage} = updateUser

  const avatar = `${process.env.REACT_APP_SERVER_URL}${user?.avatar}`

  const onChangeProfile = () => {
    navigate(`/profile/edit`)
  }
  const onAddFriend = () => {
  }

  const uploadAvatar = (url: string) => {
    uploadImage({avatar: url} as IUserUpdate)
  }

  const {uploadFile} = useUploadQuery('user', uploadAvatar, 'user', profileId)

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
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
      <div className={styles.profileInfo}
           onMouseLeave={() => {
             setShow(false)
           }}
      >
        <div className={styles.profilePhoto}
             onMouseEnter={() => {
               setShow(true)
             }}
        >
          <img src={avatar || defaultAvatar}
               alt=""
          />
        </div>
        <UploadImage show={show}
                     authUserId={authUser?.id}
                     userId={user?.id}
                     inputFileRef={inputFileRef}
                     onClick={() => inputFileRef.current.click()}
                     handleChangeImage={handleChangeImage}
        />
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
              <MessageBtn/>
            </button>}

          </div>
        </div>
      </div>
    </div>
  );
};