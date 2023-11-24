import {FC, MouseEvent, useContext} from 'react';
import styles from './Playlist.module.scss';
import {
  AudioIconSVG,
  EditPlaylistSVG,
  EditSVG, HeadphoneSVG, LengthMusicPlSVG,
  PausePlaylistSVG,
  PlaylistSVG,
  PlayPlaylistSVG,
  ShareSVG
} from "../../../../SvgComponent";
import {PlaylistInfo} from "../PlaylistInfo/PlaylistInfo";
import {IPlaylistResponse} from "../../../../../types/music.interface";
import {serverUrl} from "../../../../../utils/serverUrl";
import cn from "clsx";
import MusicContext from "../../../../../context/MusicContext";

interface IPlaylistProps {
  playlist: IPlaylistResponse
  classes?: { readonly [key: string]: string }
}

export const Playlist: FC<IPlaylistProps> = (
  {playlist, classes}
) => {
  const {setOpenFullPlaylist, setSelectedPlaylistId, setOpenPlaylistCE, setEditPlaylist} = useContext(MusicContext)!
  const {title, user, music, coverUrl, id} = playlist
  const name = `${user.lastName} ${user.firstName}`

  const onChange = () => {
    setSelectedPlaylistId(id!)
    setOpenFullPlaylist(true)
  }

  const onEditPlaylist = (e: MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setSelectedPlaylistId(id!)
    setEditPlaylist(true)
  }

  return (
    <div className={cn(styles.item, classes?.item)} onClick={onChange}>
      <div className={cn(styles.cover, classes?.cover)}>
        <EditSVG styles={styles.edit} onClickEvent={onEditPlaylist}/>
        <PlayPlaylistSVG styles={styles.play}/>
        <PausePlaylistSVG styles={styles.pause}/>
        {coverUrl
          ? <img src={serverUrl(coverUrl)} className={styles.img} alt={title}/>
          : <PlaylistSVG styles={styles.bground}
          />
        }
        <ShareSVG styles={styles.share}/>
        <span className={styles.length}>{music.length}</span>
      </div>

      <PlaylistInfo title={title} name={name}/>
    </div>
  );
};