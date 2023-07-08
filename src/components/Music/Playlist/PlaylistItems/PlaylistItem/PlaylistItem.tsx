import {FC, useContext, useState} from 'react';
import styles from './PlaylistItem.module.scss';
import MusicContext from "../../../../../context/MusicContext";
import {NotSelectedMusicSVG, PauseMusicSVG, PlayMusicSVG, SelectedMusicSVG} from "../../../../SvgComponent";
import {MusicTime} from "../../../Music/MusicItems/MusicItem/MusicTime/MusicTime";
import {Duration} from "../../../Duration/Duration";

interface IPlaylistItemProps {
  artist: string
  title: string
}

export const PlaylistItem: FC<IPlaylistItemProps> = ({title, artist}) => {
  const [isSelected, setIsSelected] = useState(false)
  const {
    isPlaying,
    setIsPlaying,
    duration,
    currentTime,
    handleProgressBarChange,
    progressBarRef
  } = useContext(MusicContext)!

  const selectionSwitch = () => {
    if (isSelected) {
      setIsSelected(false)
    }
    if (!isSelected) {
      setIsSelected(true)
    }
  }

  const togglePlaying = () => {
    if (isPlaying) {
      setIsPlaying(false)
    }
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }

  return (
    <div className={styles.item}>
      <div className={styles.container}>
        <div className={styles.pauseOrPlay}>
          {isPlaying
            ? <PauseMusicSVG onClick={togglePlaying}/>
            : <PlayMusicSVG onClick={togglePlaying}/>
          }
        </div>
        <div className={styles.musicInfo}>
          <div className={styles.info}>
            <span>
              <span className={styles.artist}>{artist} </span> —
              <span className={styles.title}>{title}</span>
            </span>
          </div>
          <div className={styles.durationWrapper}>
            <Duration secondStyles={styles}/>
          </div>

        </div>


        <MusicTime currentTime={0} classesTime={styles.time}/>
      </div>

      <div className={styles.select}>
        {isSelected
          ? <SelectedMusicSVG onClick={selectionSwitch} styles={styles.selected}/>
          : <NotSelectedMusicSVG onClick={selectionSwitch} styles={styles.notSelected}/>
        }
      </div>
    </div>
  );
};