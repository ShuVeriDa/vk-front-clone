import {FC, useContext, useEffect, useRef, useState} from 'react';
import styles from './FullPlaylistInfo.module.scss';
import {Link} from "react-router-dom";
import {MoreMenuSVG, ShareSVG} from "../../../../../SvgComponent";
import ReactTimeago from "react-timeago";
import {FullPlaylistMenu} from "../../FullPlaylistMenu/FullPlaylistMenu";
import {usePlaylistQuery} from "../../../../../../react-query/usePlaylistQuery";
import MusicContext from "../../../../../../context/MusicContext";

interface IFullPlaylistInfoProps {
  title: string
  name: string
  updatedAt: string
  playlistId: string
  userId: string | number
  onClickClose: () => void
}

export const FullPlaylistInfo: FC<IFullPlaylistInfoProps> = (
  {updatedAt, name, title, userId, playlistId, onClickClose}
) => {
  const {setOpenPlaylistCE} = useContext(MusicContext)!
  const {removePlaylist} = usePlaylistQuery(playlistId)
  const {mutate: remove} = removePlaylist
  const [show, setShow] = useState(false)

  const refOut = useRef(null)

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

  const onToggleShow = () => setShow(!show)
  const onDeletePlaylist = () => {
    remove()
    onClickClose()
  }
  const onEditPlaylist = () => {
    onClickClose()
    setOpenPlaylistCE(true)
  }

  return (
    <div className={styles.info}>
      <div className={styles.information}>
        <span className={styles.title}><Link to={"/music"}>{title}</Link></span>
        <span className={styles.name}><Link to={"/music"}>{name}</Link></span>
        <span className={styles.updatedAt}>обновлён сегодня в <ReactTimeago date={updatedAt}/></span>
      </div>
      <div className={styles.btns}>
        <span className={styles.share}>
          <ShareSVG fill={"#A8AEB8"}/>
          <span className={styles.text}>Поделиться</span>
        </span>
        <FullPlaylistMenu setShow={onToggleShow}
                          show={show}
                          refOut={refOut}
                          removePlaylist={onDeletePlaylist}
                          editPlaylist={onEditPlaylist}
        />
      </div>
    </div>
  );
};