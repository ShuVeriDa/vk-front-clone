import {FC} from 'react';
import styles from './PlaylistsHeader.module.scss';
import {ShowMore} from "../../../ShowMore/ShowMore";
interface IPlaylistsHeaderProps {
}

export const PlaylistsHeader: FC<IPlaylistsHeaderProps> = () => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>Плейлисты</span>
      <ShowMore onSetPage={() => {}} />
    </div>
  );
};