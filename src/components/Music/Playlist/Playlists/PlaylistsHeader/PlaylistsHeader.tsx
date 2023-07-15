import {FC} from 'react';
import styles from './PlaylistsHeader.module.scss';
import {ShowMore} from "../../../ShowMore/ShowMore";
import {useNavigate} from "react-router-dom";
interface IPlaylistsHeaderProps {
}

export const PlaylistsHeader: FC<IPlaylistsHeaderProps> = () => {
  const navigate = useNavigate()
  const goToPlaylists = () => {
   navigate('/music/playlists')
  }
  return (
    <div className={styles.header}>
      <span className={styles.title}>Плейлисты</span>
      <ShowMore onSetPage={goToPlaylists} />
    </div>
  );
};