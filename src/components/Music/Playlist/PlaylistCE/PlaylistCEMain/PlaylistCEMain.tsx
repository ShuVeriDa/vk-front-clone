import {FC} from 'react';
import styles from './PlaylistCEMain.module.scss';
import {PlaylistCeInfo} from "./PlaylistCEInfo/PlaylistCEInfo";
import {PlaylistCESearch} from "./PlaylistCESearch/PlaylistCESearch";
import {PlaylistCEAddMyMusic} from "./PlaylistCESearch/PlaylistCEAddMyMusic/PlaylistCEAddMyMusic";
import {MusicNotFound} from "../../../Music/MusicNotFound/MusicNotFound";
import {PlaylistCESearchNotFound} from "./PlaylistCESearchNotFound/PlaylistCESearchNotFound";
import {PlaylistItems} from "../../PlaylistItems/PlaylistItems";

interface IPlaylistCEMainProps {
}

export const PlaylistCEMain: FC<IPlaylistCEMainProps> = () => {
  return (
    <div className={styles.main}>
      <PlaylistCeInfo/>
      <PlaylistCESearch />
      <PlaylistCEAddMyMusic />
      <PlaylistItems />
      {false && <PlaylistCESearchNotFound />}
    </div>
  );
};