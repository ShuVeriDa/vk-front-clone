import {ChangeEvent, FC, useRef, useState} from 'react';

import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import styles from './ProfileHeader.module.scss'
import {IUserFull, IUserUpdate} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {LocationSVG, MessageBtn, PhotoSVG} from "../../SvgComponent";
import {useUsersQuery} from "../../../react-query/useUsersQuery";
import {useUploadQuery} from "../../../react-query/useUploadQuery";

interface IProfileHeader {
  user: IUserFull | null | undefined
  profileId: string | number
}

export const ProfileHeader: FC<IProfileHeader> = ({user, profileId}) => {
  const inputFileRef = useRef<any>(null)
  const navigate = useNavigate()
  const fullName = `${user?.lastName} ${user?.firstName}`

  const [show, setShow] = useState(false)

  const {user: authUser} = useAuth()

  const {updateUser} = useUsersQuery(authUser?.id!)
  const {mutate: uploadImage} = updateUser

  const avatar = `${process.env.REACT_APP_SERVER_URL}${user?.avatar}`

  const onChangeProfile = () => {
    navigate(`/edit`)
  }
  const onAddFriend = () => {
  }

  const uploadAvatar = (url: string) => {
    uploadImage({avatar: url} as IUserUpdate)
  }

  const {uploadFile} = useUploadQuery('avatar', uploadAvatar, profileId)

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
        {
          authUser?.id === user?.id
            ? show
            && <div className={styles.input}
                    onClick={() => inputFileRef.current.click()}

            >
              <div className={styles.info}>
                <PhotoSVG/>
                <span>Загрузить фотографию</span>
              </div>
              <input type="file"
                     ref={inputFileRef}
                     onChange={handleChangeImage}
                     hidden
              />
            </div>
            : null
        }
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