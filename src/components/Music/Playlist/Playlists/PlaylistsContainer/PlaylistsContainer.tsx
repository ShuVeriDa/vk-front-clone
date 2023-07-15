import {FC} from 'react';
import styles from './PlaylistsContainer.module.scss';
import plStyles from '../Playlist/Playlist.module.scss';
import moreStyles from '../Playlist/MorePlaylist.module.scss';
import {Playlist} from "../Playlist/Playlist";
import {usePlaylistQuery} from "../../../../../react-query/usePlaylistQuery";
import cn from "clsx";

interface IPlaylistsContainerProps {
  isMore?: boolean
}

export const PlaylistsContainer: FC<IPlaylistsContainerProps> = ({isMore}) => {
  const {fetchPlaylists} = usePlaylistQuery()
  const {data: playlists, isSuccess,} = fetchPlaylists
  return (
    <div className={cn(styles.container, isMore && styles.moreContainer)}>
      {isSuccess && playlists.map(pl => {
        return <Playlist key={pl.id}
                         playlist={pl}
                         classes={isMore ? moreStyles : undefined}
        />
      })
      }
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
     {/*<Playlist playlist={playlists![0]} classes={isMore ? moreStyles : undefined}/>*/}
    </div>
  );
};