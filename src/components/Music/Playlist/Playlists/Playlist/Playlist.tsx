import {FC} from 'react';
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

interface IPlaylistProps {
playlist: IPlaylistResponse
}

export const Playlist: FC<IPlaylistProps> = ({playlist}) => {
  const {title, user, music, coverUrl} = playlist
  const name = `${user.lastName} ${user.firstName}`

  return (
    <div className={styles.item}>
      <div className={styles.cover}>
        <EditSVG styles={styles.edit}/>
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