import {FC} from 'react';
import styles from './PlaylistCE.module.scss';
import {PlaylistHeader} from "./PlaylistCEHeader/PlaylistHeader";
import {PlaylistCEMain} from "./PlaylistCEMain/PlaylistCEMain";
import {PlaylistFooter} from "./PlaylistFooter/PlaylistFooter";

interface IPlaylistProps {
  title: string
}

export const PlaylistCE: FC<IPlaylistProps> = ({title}) => {
  return (
    <div className={styles.wrapper}>
      <PlaylistHeader title={title} />
      <PlaylistCEMain />
      <PlaylistFooter />
    </div>
  );
};