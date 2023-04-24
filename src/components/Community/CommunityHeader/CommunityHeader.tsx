import {DetailedHTMLProps, FC, HTMLAttributes, MutableRefObject, useEffect, useRef, useState} from 'react';

import defaultCommunityAvatar from '../../../assets/img/defaultCommunityAvatar.png'
import styles from './CommunityHeader.module.scss'
import {IUserFull} from "../../../types/user.interface";
import {useAuth} from "../../../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";
import {ICommunityFull} from "../../../types/community.interface";
import {CheckMarkSVG, SettingSvg} from "../../SvgComponent";
import {CommunityMenu} from "../CommunityMenu/CommunityMenu";
import {useUsersQuery} from "../../../react-query/useUsersQuery";
import {SubscribeBtn} from "../../SubscribeBtn/SubscribeBtn";
import {useCommunityQuery} from "../../../react-query/useCommunityQuery";

interface IProfileHeader {
  community?: ICommunityFull | null | undefined
}

export const CommunityHeader: FC<IProfileHeader> = ({community}) => {
  const navigate = useNavigate()
  const {user: authUser} = useAuth()
  const {getUserById} = useUsersQuery(authUser?.id!)
  const {data: user} = getUserById

  const {addCommunity, removeCommunity} = useCommunityQuery(community?.id)
  const {mutate: subscribe} = addCommunity
  const {mutate: unSubscribe} = removeCommunity

  const onSubscribe = () => {
    // community?.admins.some(admin => admin.id === user?.id)
    !isSubscribe
      ? subscribe(community?.id!)
      : unSubscribe(community?.id!)
  }

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

  const onChangeProfile = () => {
    navigate(`/group/${community?.id}/edit`)
  }


  const fullName = community?.name
  const avatar = community?.avatar ? `${process.env.REACT_APP_SERVER_URL}${community?.avatar}` : defaultCommunityAvatar
  const membersLength = community?.members.length
  const isFriend = community?.members
    .filter(member => user?.friends.map(friend => friend.id === member.id))

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
          <div className={styles.communityBtns}>
            <div className={styles.communitySubscribe}>
              <SubscribeBtn title={isSubscribe ? 'Отписаться' : "Подписаться"}
                            classes={styles.subscribe}
                            onChange={onSubscribe}
              />
            </div>
            <button className={styles.btn}><SettingSvg /> <span>Управление</span></button>
          </div>
        </div>

      </div>
    </div>
  );
};