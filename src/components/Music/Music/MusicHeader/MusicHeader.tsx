import {FC, useState} from 'react';
import styles from './MusicHeader.module.scss';
import {PlaylistMusicSVG, UploadMusicSVG} from "../../../SvgComponent";
import cn from "clsx";

type ListType = 'Главная' | "Моя музыка" | "Обзор" | "Обновления"

const list: ListType[] = ['Главная', "Моя музыка", "Обзор", "Обновления"]

interface IMusicHeaderProps {
}

export const MusicHeader: FC<IMusicHeaderProps> = () => {
  const [active, setActive] = useState<ListType | null>('Главная');

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <ul>
          {list.map((l, i) => {
            return <li key={i}
                       className={cn(styles.categoryItem, active === l ?  styles.active : styles.categoryItem)}
                       onClick={() => setActive(l)}
            >
              {l}
            </li>
          })}
        </ul>
      </div>
      <div className={styles.uploadAndPlaylist}>
        <PlaylistMusicSVG styles={styles.playListSVG}/>
        <UploadMusicSVG styles={styles.uploadSVG}/>
      </div>
    </div>
  );
};