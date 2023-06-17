import {FC, useState} from 'react';
import styles from './MusicHeader.module.scss';
import {PlaylistMusicSVG, UploadMusicSVG} from "../../../SvgComponent";
import cn from "clsx";
import {ModalWindow} from "../../../ModalWindow/ModalWindow";
import {MusicUpload} from "../MusicUpload/MusicUpload";

type ListType = 'Главная' | "Моя музыка" | "Обзор" | "Обновления"

const list: ListType[] = ['Главная', "Моя музыка", "Обзор", "Обновления"]

interface IMusicHeaderProps {
  setOpenUpload: (openUpload: boolean) => void
}

export const MusicHeader: FC<IMusicHeaderProps> = ({setOpenUpload}) => {
  const [active, setActive] = useState<ListType | null>('Главная');

  const handleOpenUpload = () => {
    setOpenUpload(true)
  }

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
        <UploadMusicSVG styles={styles.uploadSVG} onClick={handleOpenUpload}/>
      </div>
    </div>
  );
};