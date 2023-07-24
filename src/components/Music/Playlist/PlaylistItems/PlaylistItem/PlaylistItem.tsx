import {FC, useContext} from 'react';
import styles from './PlaylistItem.module.scss';
import MusicContext from "../../../../../context/MusicContext";
import {NotSelectedMusicSVG, PauseMusicSVG, PlayMusicSVG, SelectedMusicSVG} from "../../../../SvgComponent";
import {MusicTime} from "../../../Music/MusicItems/MusicItem/MusicTime/MusicTime";
import {Duration} from "../../../Duration/Duration";
import {IMusicFull} from "../../../../../types/music.interface";
import cn from "clsx";

interface IPlaylistItemProps {
  artist: string
  title: string
  music?: IMusicFull
  addedMusic?: IMusicFull[]
  setAddedMusic?: (addedMusic: IMusicFull[]) => void
  secondStyles?: { readonly [key: string]: string }
  index?: number
}

export const PlaylistItem: FC<IPlaylistItemProps> = (
  {title, artist, setAddedMusic, music, addedMusic, secondStyles, index}
) => {
  const {currentAudio} = useContext(MusicContext)!
  const isIncludes = addedMusic?.some(m => m.id === music?.id)

  const {isPlaying, setIsPlaying} = useContext(MusicContext)!

  const togglePlaying = () => {
    if (isPlaying) {
      setIsPlaying(false)
    }
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }

  const onChangeMusicIds = () => {
    if (isIncludes) {
      if (setAddedMusic) {
        setAddedMusic(addedMusic!.filter(m => m.id !== music?.id))
      }
    }
    if (!isIncludes) {
      if (setAddedMusic && addedMusic) {
        setAddedMusic([...addedMusic, music!])
      }
    }
  }

  return (
    <div className={cn(styles.item, secondStyles?.item)}>
      <div className={cn(styles.container, secondStyles?.container)}>
        <div className={styles.pauseOrPlay}>
          {isPlaying && currentAudio === index
            ? <PauseMusicSVG onClick={togglePlaying}/>
            : <PlayMusicSVG onClick={togglePlaying}/>
          }
        </div>
        <div className={cn(styles.musicInfo, secondStyles?.musicInfo)}>
          <div className={styles.info}>
            <span>
              <span className={styles.artist}>{artist} </span> —
              <span className={styles.title}> {title}</span>
            </span>
          </div>
          <div className={styles.durationWrapper}>
            <Duration secondStyles={styles}/>
          </div>

        </div>
        <MusicTime currentTime={0} classesTime={styles.time}/>
      </div>
      {addedMusic && <div className={styles.select} onClick={onChangeMusicIds}>
        {isIncludes
          ? <SelectedMusicSVG styles={styles.selected}/>
          : <NotSelectedMusicSVG styles={styles.notSelected}/>
        }
      </div>}

    </div>
  );
};