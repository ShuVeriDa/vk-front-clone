import {FC} from 'react';
import styles from './FullPlaylist.module.scss';
import {FullPlaylistHeader} from "./FullPlaylistHeader/FullPlaylistHeader";
import {usePlaylistQuery} from "../../../../react-query/usePlaylistQuery";
import {PlaylistItem} from "../PlaylistItems/PlaylistItem/PlaylistItem";

interface IFullPlaylistProps {
  playlistId: string
}

export const FullPlaylist: FC<IFullPlaylistProps> = ({playlistId}) => {
  const {fetchOnePlaylist} = usePlaylistQuery(playlistId)
  const {data: playlist, isSuccess} = fetchOnePlaylist
  const name = `${playlist?.user.lastName} ${playlist?.user.firstName}`
  return (
    <div className={styles.wrapper}>
      <FullPlaylistHeader title={playlist?.title!}
                          name={name}
                          cover={playlist?.coverUrl!}
                          updatedAt={playlist?.updatedAt!}


      />
      <div className={styles.main}>
        {isSuccess && playlist.description && <div className={styles.description}>{playlist.description}</div>}

        {isSuccess && playlist.music.map((music) => <PlaylistItem artist={music.artist}
                                                                  title={music.title}
                                                                  music={music}
                                                                  secondStyles={styles}
          />
        )}
      </div>

    </div>
  );
};