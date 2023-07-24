import {FC, useContext} from 'react';
import styles from './FullPlaylist.module.scss';
import {FullPlaylistHeader} from "./FullPlaylistHeader/FullPlaylistHeader";
import {usePlaylistQuery} from "../../../../react-query/usePlaylistQuery";
import {PlaylistItem} from "../PlaylistItems/PlaylistItem/PlaylistItem";
import {ClearSearchValueSVG} from "../../../SvgComponent";
import MusicContext from "../../../../context/MusicContext";
import {useMusicHandlers} from "../../../../hooks/useMusicHandler";

interface IFullPlaylistProps {
  playlistId: string
  onClickClose: () => void
}

export const FullPlaylist: FC<IFullPlaylistProps> = ({playlistId, onClickClose}) => {
  const {fetchOnePlaylist} = usePlaylistQuery(playlistId)
  const {data: playlist, isSuccess} = fetchOnePlaylist
  const name = `${playlist?.user.lastName} ${playlist?.user.firstName}`

  const {onClickHandler} = useMusicHandlers()

  return (
    <div className={styles.wrapper}>
      <FullPlaylistHeader title={playlist?.title!}
                          playlistId={playlist?.id!}
                          userId={playlist?.user.id!}
                          name={name}
                          cover={playlist?.coverUrl!}
                          updatedAt={playlist?.updatedAt!}
                          onClickClose={onClickClose}


      />
      <div className={styles.main}>
        {isSuccess && playlist.description && <div className={styles.description}>{playlist.description}</div>}
        {isSuccess && playlist.music.map((music, i) => {
            return <div key={music.id} onClick={() => onClickHandler(i)}>
              <PlaylistItem artist={music.artist}
                            title={music.title}
                            music={music}
                            secondStyles={styles}
                            index={i}
              />
            </div>
          }
        )}
        <div className={styles.length}>{isSuccess && playlist.music.length}</div>
      </div>

      <ClearSearchValueSVG styles={styles.close} onClick={onClickClose}/>
    </div>
  );
};