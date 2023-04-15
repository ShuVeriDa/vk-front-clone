import {ChangeEvent, FC, useRef, useState} from 'react';

import defaultAvatar from '../../../assets/defaultAvatar.png'
import styles from './ProfileHeader.module.scss'
import {IUpdateAvatar, IUserFull, IUserUpdate} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";
import {LocationSVG, PhotoSVG} from "../../SvgComponent";
import {HandleChangeImage} from "../../../utils/HandleChangeImage";
import {useUsersQuery} from "../../../react-query/useUsersQuery";
import {SubmitHandler, useForm} from "react-hook-form";
import {UploadFileService} from "../../../services/uploadFile.services";

interface IProfileHeader {
  user: IUserFull | null | undefined
}

export const ProfileHeader: FC<IProfileHeader> = ({user}) => {
  const inputFileRef = useRef<any>(null)
  const navigate = useNavigate()
  const fullName = `${user?.lastName} ${user?.firstName}`

  const [imageUrl, setImageUrl] = useState<string | null>(null)
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

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await HandleChangeImage(e, 'avatar', uploadAvatar)
  }

  const variableBtn = () => {
    authUser?.id === user?.id
      ? onChangeProfile()
      : onAddFriend()
  }

  const buttonsName = authUser?.id === user?.id ? 'Редактировать профиль' : 'Добавить в друзья'

  const {register, handleSubmit, formState, reset} = useForm<IUserUpdate>({mode: "onChange"})
  const onSubmit: SubmitHandler<IUserUpdate> = (data) => {
    console.log(data)
    uploadImage({avatar: imageUrl} as IUserUpdate)
    reset()
  }

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
        {
          authUser?.id === user?.id
            ? show
            && <div className={styles.input}
                    onClick={() => inputFileRef.current.click()}
                    onMouseLeave={() => {
                      setShow(false)
                    }}
            >
              <div className={styles.info}>
                <PhotoSVG/>
                <span>Загрузить фотографию</span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('avatar', {required: true})}
                       type="file"
                       ref={inputFileRef}
                       onChange={handleChangeImage}
                       hidden
                />
              </form>
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