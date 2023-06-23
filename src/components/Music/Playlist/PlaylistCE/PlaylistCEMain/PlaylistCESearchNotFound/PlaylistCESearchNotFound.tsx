import {FC} from 'react';
import styles from './PlaylistCESearchNotFound.module.scss';
import {NotFoundMusicSVG} from "../../../../../SvgComponent";
interface IPlaylistCESearchNotFoundProps {
}

export const PlaylistCESearchNotFound: FC<IPlaylistCESearchNotFoundProps> = () => {
  return (
    <div className={styles.notFound}>
      <div>
        <NotFoundMusicSVG />
      </div>
      <div>
        <span>Здесь пока нет аудиозаписей</span>
      </div>
    </div>
  );
};