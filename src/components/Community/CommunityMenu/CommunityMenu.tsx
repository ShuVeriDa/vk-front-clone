import {FC, MutableRefObject} from 'react';
import styles from './CommunityMenu.module.scss';
import {CheckMarkSVG, ShowPostMenuSVG} from "../../SvgComponent";
import {usePostsQuery} from "../../../react-query/usePostsQuery";
import {useAuth} from "../../../hooks/useAuth";
import {useCommunityQuery} from "../../../react-query/useCommunityQuery";

const crudList = ['Отписаться', "Скрывать новости"]

interface ICommunityMenuProps {
  refOut:  MutableRefObject<null>
  show: boolean
  setShow: () => void
  communityId: string
}

export const CommunityMenu: FC<ICommunityMenuProps> = ({communityId, show, setShow, refOut}) => {
  const {user} = useAuth()
  const {addCommunity, removeCommunity} = useCommunityQuery(undefined, communityId)
  const {mutate: subscribe} = addCommunity
  const {mutate: unSubscribe} = removeCommunity

  const onUnSubscribeClick = () => {
    unSubscribe(communityId)
  }

  const currentElem = (elem: number) => {
    if(elem === 0) {
      onUnSubscribeClick()
    }
  }

  return (
    <div ref={refOut} className={styles.crudComponent} onClick={setShow}>
      <div className={styles.subscribe}>
        <CheckMarkSVG />
        <span>Вы подписаны</span>
      </div>
      <div className={`${styles.crud} ${show ? styles.show : ''}`}>
        <ul>
          {crudList.map((list, i) => <li key={i} onClick={() => currentElem(i)}>
            {list}
          </li>)}
        </ul>
      </div>
    </div>
  );
};