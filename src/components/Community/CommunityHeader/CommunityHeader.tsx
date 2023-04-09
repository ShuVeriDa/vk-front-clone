import {DetailedHTMLProps, FC, HTMLAttributes, MutableRefObject, useEffect, useRef, useState} from 'react';

import defaultCommunityAvatar from '../../../assets/defaultCommunityAvatar.png'
import styles from './CommunityHeader.module.scss'
import {IUserFull} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";
import {ICommunityFull} from "../../../types/community.interface";
import {CheckMarkSVG} from "../../SvgComponent";
import {CommunityMenu} from "../CommunityMenu/CommunityMenu";

interface IProfileHeader {
  community?: ICommunityFull | null | undefined
}

export const CommunityHeader: FC<IProfileHeader> = ({community}) => {
  const navigate = useNavigate()

  const refOut = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refOut.current && !event.composedPath().includes(refOut.current)) {
        setShow(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.addEventListener('click', handleClickOutside)
    }
  }, [])


  const {user: authUser} = useAuth()

  const fullName = community?.name
  const avatar = community?.avatar ? `${process.env.REACT_APP_SERVER_URL}${community?.avatar}` : defaultCommunityAvatar


  // const onChangeProfile = () => {
  //   navigate(`/edit`)
  // }
  // const onAddFriend = () => {
  // }
  //
  // const variableBtn = () => {
  //   authUser?.id === user?.id
  //     ? onChangeProfile()
  //     : onAddFriend()
  //
  // }
  //
  // const buttonsName = authUser?.id === user?.id ? 'Редактировать профиль' : 'Добавить в друзья'
  //
  // console.log(authUser?.id)
  // console.log(user)

  console.log(avatar)

  const isSubscribe = community?.members.some(member => member.id === authUser?.id)

  return (
    <div className={styles.profileHeader}>
      <div className={styles.profileBackground}>
        <img src="" alt=""/>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profilePhoto}>
          <img src={avatar} alt=""/>
        </div>
        <div className={styles.profileDetails}>
          <div className={styles.profileNameStatusOthers}>
            <span className={styles.name}>{fullName}</span>
            {isSubscribe && <CommunityMenu
              refOut={refOut}
              show={show}
              setShow={() => setShow(!show)}
              communityId={community?.id!}
            />}

          </div>
          {/*<div className={styles.profileBtns}>
            <button className={styles.btn} onClick={variableBtn}>{buttonsName}</button>
            {authUser?.id !== user?.id && <button className={styles.btnMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="feather feather-message-circle">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </button>}
          </div>*/}
        </div>
      </div>
    </div>
  );
};