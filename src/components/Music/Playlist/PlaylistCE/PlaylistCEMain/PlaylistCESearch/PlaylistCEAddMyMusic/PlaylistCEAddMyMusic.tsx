import {FC} from 'react';
import styles from './PlaylistCEAddMyMusic.module.scss';
import {PlusSVG, RightArrowSVG} from "../../../../../../SvgComponent";

interface IPlaylistCEAddMyMusicProps {
  toggleIsMyMusic: () => void
}

export const PlaylistCEAddMyMusic: FC<IPlaylistCEAddMyMusicProps> = ({toggleIsMyMusic}) => {
  return (
    <div className={styles.wrapper} onClick={toggleIsMyMusic}>
      <PlusSVG  styles={styles.plus}/>
      <span>Добавить аудиозаписи</span>
      <RightArrowSVG styles={styles.arrow}/>
    </div>
  );
};