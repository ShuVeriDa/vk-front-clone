import {FC} from 'react';
import styles from './Tracks.module.scss';
import {TracksHeader} from "./TracksHeader/TracksHeader";
import {MusicSearch} from "../MusicSearch/MusicSearch";
import {TrackItems} from "./TrackItems/TrackItems";
import {PlaylistsContainer} from "../../Playlist/Playlists/PlaylistsContainer/PlaylistsContainer";

interface IMyTracksProps {
  page: 'main' | 'allTracks' | 'myTracks' | 'playlists'
  setValue: (value: string) => void
}

export const Tracks: FC<IMyTracksProps> = ({page, setValue}) => {

  const title = page === "allTracks" ? "Все аудиозаписи" : page === "playlists" ? "Плейлисты" : "Мои треки"
  return (
    <div className={styles.wrapper}>
      <TracksHeader title={title}
                    setValue={setValue}
      />
      <MusicSearch setValue={setValue}
      />
      {page === "myTracks" && <TrackItems/>}
      {page === 'playlists' && <PlaylistsContainer isMore={true}/>}
    </div>
  );
};