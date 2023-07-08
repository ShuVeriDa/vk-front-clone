import {FC} from 'react';
import styles from './PlaylistItems.module.scss';
import {PlaylistItem} from "./PlaylistItem/PlaylistItem";
import {IMusicFull} from "../../../../types/music.interface";

interface IPlaylistItemsProps {
  music: IMusicFull[]
}

export const PlaylistItems: FC<IPlaylistItemsProps> = ({music}) => {

  return (
    <div className={styles.items}>
      {music?.map(m => <PlaylistItem key={m.id}
                                    title={m.title}
                                    artist={m.artist}
      />)}
    </div>
  );
};