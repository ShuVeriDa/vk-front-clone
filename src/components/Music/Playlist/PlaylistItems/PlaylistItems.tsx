import {FC, useContext} from 'react';
import styles from './PlaylistItems.module.scss';
import {PauseMusicSVG, PlayMusicSVG} from "../../../SvgComponent";
import MusicContext from "../../../../context/MusicContext";
import {PlaylistItem} from "./PlaylistItem/PlaylistItem";
interface IPlaylistItemsProps {
}

export const PlaylistItems: FC<IPlaylistItemsProps> = () => {

  return (
    <div className={styles.items}>
      <PlaylistItem />
    </div>
  );
};