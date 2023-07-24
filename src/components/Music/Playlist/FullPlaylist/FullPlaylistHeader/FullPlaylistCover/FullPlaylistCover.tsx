import {FC} from 'react';
import styles from './FullPlaylistCover.module.scss';
import {serverUrl} from "../../../../../../utils/serverUrl";
import {PauseMusicSVG, PlaylistSVG, PlayMusicSVG} from "../../../../../SvgComponent";
interface IFullPlaylistCoverProps {
  cover: string
}

export const FullPlaylistCover: FC<IFullPlaylistCoverProps> = ({cover}) => {
  let isPlaying
  return (
    <div className={styles.cover}>
      {cover
        ? <img src={serverUrl(cover)} className={styles.img} alt={cover}/>
        : <PlaylistSVG styles={styles.bground}
        />
      }
      <div className={styles.wrapperSvg} />
      {!isPlaying
        ? <PlayMusicSVG styles={styles.play}/>
        : <PauseMusicSVG styles={styles.pause}/>}
    </div>
  );
};