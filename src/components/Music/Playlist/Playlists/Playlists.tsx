import {FC} from 'react';
import styles from './Playlists.module.scss';
import {PlaylistsHeader} from "./PlaylistsHeader/PlaylistsHeader";
import {Playlist} from "./Playlist/Playlist";
import {usePlaylistQuery} from "../../../../react-query/usePlaylistQuery";

interface IPlaylistsProps {
}

export const Playlists: FC<IPlaylistsProps> = () => {
  const {fetchPlaylists} = usePlaylistQuery()
  const {data: playlists, isSuccess,} = fetchPlaylists
  return (
    <div className={styles.wrapper}>
      <PlaylistsHeader/>
      <div className={styles.container}>
        {isSuccess && playlists.map(pl => {

          return <Playlist key={pl.id}
                           playlist={pl}
          />
        })
        }
      </div>
    </div>
  );
};