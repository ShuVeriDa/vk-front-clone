import {FC} from 'react';
import styles from './PlaylistItems.module.scss';
import {PlaylistItem} from "./PlaylistItem/PlaylistItem";
import {IMusicFull} from "../../../../types/music.interface";
import cn from "clsx";

interface IPlaylistItemsProps {
  music?: IMusicFull[]
  addedMusic: IMusicFull[]
  setAddedMusic: (musicIds: IMusicFull[]) => void
}

export const PlaylistItems: FC<IPlaylistItemsProps> = (
  {music, setAddedMusic, addedMusic}
) => {
  const mus = music ? music : addedMusic
  return (
    <div className={cn(styles.items, music?.length! < 10 || !music?.length! && styles.noScroll)}>
      {music && <div className={styles.founded}>Найдено в глобальном поиске</div>}
      {mus?.map(m => <PlaylistItem key={m.id}
                                   music={m}
                                   addedMusic={addedMusic}
                                   title={m.title}
                                   artist={m.artist}
                                   setAddedMusic={setAddedMusic}
      />)}
    </div>
  );
};