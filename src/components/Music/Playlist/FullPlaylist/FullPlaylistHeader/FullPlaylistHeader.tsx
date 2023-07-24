import {FC} from 'react';
import styles from './FullPlaylistHeader.module.scss';
import {FullPlaylistCover} from "./FullPlaylistCover/FullPlaylistCover";
import {FullPlaylistInfo} from "./FullPlaylistInfo/FullPlaylistInfo";

interface FullPlaylistHeader {
  title: string
  name: string
  cover: string
  updatedAt: string
}

export const FullPlaylistHeader: FC<FullPlaylistHeader> = ({updatedAt, name, cover, title}) => {

  return (
    <header className={styles.header}>
      <FullPlaylistCover cover={cover}/>
      <FullPlaylistInfo title={title}
                        name={name}
                        updatedAt={updatedAt}
      />
    </header>
  );
};