import {FC} from 'react';
import styles from './FullPlaylistHeader.module.scss';
import {FullPlaylistCover} from "./FullPlaylistCover/FullPlaylistCover";
import {FullPlaylistInfo} from "./FullPlaylistInfo/FullPlaylistInfo";

interface FullPlaylistHeader {
  playlistId: string
  userId: string | number
  title: string
  name: string
  cover: string
  updatedAt: string
  onClickClose: () => void
}

export const FullPlaylistHeader: FC<FullPlaylistHeader> = (
  {updatedAt, name, cover, title, playlistId, userId, onClickClose}
) => {

  return (
    <header className={styles.header}>
      <FullPlaylistCover cover={cover}/>
      <FullPlaylistInfo title={title}
                        name={name}
                        updatedAt={updatedAt}
                        playlistId={playlistId}
                        userId={userId}
                        onClickClose={onClickClose}
      />
    </header>
  );
};