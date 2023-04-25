import {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import defaultCommunityAvatar from '../../../assets/img/defaultCommunityAvatar.png'
import styles from './CommunityHeader.module.scss'
import {useAuth} from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {ICommunityFull, ICommunityUpdate} from "../../../types/community.interface";
import {PhotoSVG, SettingSvg} from "../../SvgComponent";
import {CommunityMenu} from "../CommunityMenu/CommunityMenu";
import {useUsersQuery} from "../../../react-query/useUsersQuery";
import {SubscribeBtn} from "../../SubscribeBtn/SubscribeBtn";
import {useCommunityQuery} from "../../../react-query/useCommunityQuery";
import {useUploadQuery} from "../../../react-query/useUploadQuery";
import {UploadImage} from "../../UploadImage/UploadImage";

interface IProfileHeader {
  community?: ICommunityFull | null | undefined
}

export const CommunityHeader: FC<IProfileHeader> = ({community}) => {
  const inputFileRef = useRef<any>(null)
  const refOut = useRef(null)
  const [show, setShow] = useState(false)
  const [visible, setVisible] = useState(false)

  const navigate = useNavigate()
  const {user: authUser} = useAuth()
  const {getUserById} = useUsersQuery(authUser?.id!)
  const {data: user} = getUserById

  const {addCommunity, removeCommunity, updateCommunity} = useCommunityQuery(community?.id)
  const {mutate: subscribe} = addCommunity
  const {mutate: unSubscribe} = removeCommunity
  const {mutate: uploadImage} = updateCommunity

  const fullName = community?.name
  const avatar = community?.avatar ? `${process.env.REACT_APP_SERVER_URL}${community?.avatar}` : defaultCommunityAvatar
  const membersLength = community?.members.length
  const isFriend = community?.members
    .filter(member => user?.friends.map(friend => friend.id === member.id))
  const isAdmin = community?.admins.some(admin => admin.id === authUser?.id)

  const uploadAvatar = (url: string) => {
    uploadImage({avatar: url} as ICommunityUpdate)
  }

  const {uploadFile} = useUploadQuery('community', uploadAvatar, 'community', undefined, community?.id)

  const isSubscribe = community?.members.some(member => member.id === authUser?.id)

  const onSubscribe = () => {
    !isSubscribe
      ? subscribe(community?.id!)
      : unSubscribe(community?.id!)
  }

  const onChangeProfile = () => {
    navigate(`/group/${community?.id}/edit`)
  }

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
  }


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

  return (
    <div className={styles.communityHeader}>
      <div className={styles.communityBackground}>
        <img src="" alt=""/>
      </div>
      <div className={styles.communityInfo}
           onMouseLeave={() => {
             setVisible(false)
           }}
      >
        <div className={styles.communityPhoto}
             onMouseEnter={() => {
               setVisible(true)
             }}
        >
          <img src={avatar} alt=""/>
        </div>
        <UploadImage isAdmin={isAdmin!}
                     show={visible}
                     inputFileRef={inputFileRef}
                     onClick={() => inputFileRef.current.click()}
                     handleChangeImage={handleChangeImage}
        />
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
            <button className={styles.btn} onClick={onChangeProfile}>
              <SettingSvg/> <span>Управление</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};