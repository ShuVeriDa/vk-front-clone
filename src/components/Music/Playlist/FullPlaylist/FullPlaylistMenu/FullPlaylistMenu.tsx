import {FC, MutableRefObject} from 'react';
import styles from './FullPlaylist.module.scss';
import {MoreMenuSVG} from "../../../../SvgComponent";

const crudList = ['Редактировать', "Удалить плейлист", "Добавить в сообщество"]

interface ICommunityMenuProps {
  refOut:  MutableRefObject<null>
  show: boolean
  setShow: () => void
  removePlaylist: () => void
  editPlaylist: () => void
}

export const FullPlaylistMenu: FC<ICommunityMenuProps> = ({show, setShow, refOut, removePlaylist, editPlaylist}) => {

  const currentElem = (elem: number) => {
    if(elem === 0) editPlaylist()
    if(elem === 1) removePlaylist()

  }

  return (
    <div ref={refOut} className={styles.crudComponent} onClick={setShow}>
      <div className={styles.subscribe}>
        <span className={styles.text}>Ещё</span>
        <MoreMenuSVG styles={styles.svg}/>
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