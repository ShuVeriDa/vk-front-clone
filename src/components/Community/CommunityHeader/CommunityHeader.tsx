import {DetailedHTMLProps, FC, HTMLAttributes, MutableRefObject, useEffect, useRef, useState} from 'react';

import defaultCommunityAvatar from '../../../assets/defaultCommunityAvatar.png'
import styles from './CommunityHeader.module.scss'
import {IUserFull} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";
import {ICommunityFull} from "../../../types/community.interface";
import {CheckMarkSVG} from "../../SvgComponent";
import {CommunityMenu} from "../CommunityMenu/CommunityMenu";
import {useUsersQuery} from "../../../react-query/useUsersQuery";
import {SubscribeBtn} from "../../SubscribeBtn/SubscribeBtn";
import {useCommunityQuery} from "../../../react-query/useCommunityQuery";

interface IProfileHeader {
  community?: ICommunityFull | null | undefined
}

export const CommunityHeader: FC<IProfileHeader> = ({community}) => {
  const {user: authUser} = useAuth()
  const {getUserById} = useUsersQuery(authUser?.id!)
  const {data: user} = getUserById

  const {addCommunity, removeCommunity} = useCommunityQuery(community?.id)
  const {mutate: subscribe} = addCommunity
  const {mutate: unSubscribe} = removeCommunity

  const onSubscribe = () => {
    subscribe(community?.id!)
  }

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


  const fullName = community?.name
  const avatar = community?.avatar ? `${process.env.REACT_APP_SERVER_URL}${community?.avatar}` : defaultCommunityAvatar
  const membersLength = community?.members.length
  const isFriend = community?.members
    .filter(member => user?.friends.map(friend => friend.id === member.id))

  console.log(isFriend)

  // const friends = currentUser.friends
  //   .filter((fr1) => user.some((fr2) => fr1.id === fr2.id))
  //   .map((friend) => returnUserData(friend));

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

  const isSubscribe = community?.members.some(member => member.id === authUser?.id)

  return (
    <div className={styles.communityHeader}>
      <div className={styles.communityBackground}>
        <img src="" alt=""/>
      </div>
      <div className={styles.communityInfo}>
        <div className={styles.communityPhoto}>
          <img src={avatar} alt=""/>
        </div>
        <div className={styles.communityDetails}>
          <div className={styles.communityNameStatusOthers}>
            <span className={styles.name}>{fullName}</span>
              {isSubscribe && <CommunityMenu
                refOut={refOut}
                show={show}
                setShow={() => setShow(!show)}
                communityId={community?.id!}
              />}

            {!isSubscribe && <>
           <span className={styles.subscribes}>
             <span>
               {isFriend && <span className={styles.friendItem}><img src={avatar} alt=""/></span>}
             </span>

             <span>
               {membersLength === 1
                 ? <span><b>{membersLength}</b> подписчик </span>
                 : <span><b>{membersLength}</b> подписчика </span>
               }·<span> <b>{isFriend?.length}</b> друг</span>
               </span>
           </span>
            </>
            }

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
        {
          !isSubscribe && <div className={styles.communitySubscribe}>
            <SubscribeBtn title={"Подписаться"}
                          classes={styles.subscribe}
                          onChange={onSubscribe}
            />
          </div>
        }

      </div>
    </div>
  );
};