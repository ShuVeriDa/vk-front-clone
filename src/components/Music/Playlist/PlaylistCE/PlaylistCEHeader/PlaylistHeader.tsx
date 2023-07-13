import {FC} from 'react';
import styles from './PlaylistHeader.module.scss';
import {ClearSearchValueSVG, LeftArrow, LeftArrowMusicSVG} from "../../../../SvgComponent";
import cn from "clsx";
interface IPlaylistHeaderProps {
  title: string
  onClickClose: () => void
  toggleIsMyMusic: () => void
  isMyMusic: boolean
}

export const PlaylistHeader: FC<IPlaylistHeaderProps> = ({title, onClickClose, isMyMusic, toggleIsMyMusic}) => {

  return (
    <header className={cn(styles.header, isMyMusic && styles.myMusic)}>
     <div className={cn(styles.title, isMyMusic && styles.myMusic)}>
     {isMyMusic
       ? <>
         <LeftArrowMusicSVG styles={styles.arrow}/>
         <span onClick={toggleIsMyMusic}>Назад</span>
       </>
       : <span>{title}</span>
     }
     </div>
      <div className={styles.close}>
        <ClearSearchValueSVG onClick={onClickClose}/>
      </div>
    </header>
  );
};