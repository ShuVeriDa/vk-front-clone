import {FC} from 'react';
import styles from './PlaylistCEAddMyMusic.module.scss';
import {PlusSVG, RightArrowSVG} from "../../../../../../SvgComponent";

interface IPlaylistCEAddMyMusicProps {
}

export const PlaylistCEAddMyMusic: FC<IPlaylistCEAddMyMusicProps> = () => {
  return (
    <div className={styles.wrapper}>
      <PlusSVG  styles={styles.plus}/>
      <span>Добавить аудиозаписи</span>
      <RightArrowSVG styles={styles.arrow}/>
    </div>
  );
};