import {FC, MouseEvent, useContext, useState} from 'react';
import styles from './MusicItem.module.scss';
import {
  AudioIconSVG,
  ClearSearchValueSVG,
  EditSVG,
  MoreSVG,
  PauseMusicSVG,
  PlayMusicSVG
} from "../../../../SvgComponent";
import {IMusicFull} from "../../../../../types/music.interface";
import cn from "clsx";
import {MusicInfo} from "./MusicInfo/MusicInfo";
import {MusicTime} from "./MusicTime/MusicTime";
import {useMusicQuery} from "../../../../../react-query/useMusicQuery";
import {MusicMoreWindow} from "../../MusicMoreWindow/MusicMoreWindow";
import MusicContext from "../../../../../context/MusicContext";

interface IMusicItemProps {
  music?: IMusicFull[]
  musicItem?: IMusicFull
  classes?: string
  classesTime?: string
  classesRE?: string
  index?: number
  isPlayer?: boolean
}

export const MusicItem: FC<IMusicItemProps> = (
  {
    music,
    musicItem,
    classes,
    index,
    classesTime,
    classesRE,
    isPlayer
  }
) => {
  const {
    currentAudio,
    currentTime,
    isSuccess,
    isPlaying,
    onClickEdit
  } = useContext(MusicContext)!
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)
  const {deleteMusic} = useMusicQuery(musicItem?.id)
  const {mutate: removeMusic} = deleteMusic

  const handlerVisibleMenu = (e: MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setIsVisibleMenu(!isVisibleMenu)

  }
  const handleRemoveMusic = (e: MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    removeMusic(musicItem?.id!)
  }

  const handleEditClick = (e: MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    if (onClickEdit) {
      onClickEdit(musicItem?.id!);
    }
  };

  return (
    <div className={cn(styles.musicItem, classes, index === currentAudio && styles.active)}>
      <div className={cn(styles.icon, index === currentAudio && styles.iconActive)}
      >
        {!isPlayer && <div className={cn(index === currentAudio ? styles.playOrPauseActive : styles.playOrPause)}
        >
          {isPlaying && currentAudio === index
            ? <PauseMusicSVG styles={styles.pause}/>
            : <PlayMusicSVG styles={styles.play}/>
          }
        </div>}
        <AudioIconSVG styles={cn(!isPlayer && styles.audioIcon)}
                      fill={!isPlayer ? 'rgba(129,140,153,0.6)' : '#6f99c8'}
        />

      </div>
      <MusicInfo isSuccess={isSuccess}
                 musicItem={musicItem!}
                 music={music!}
                 isPlayer={isPlayer!}
      />
      {!isPlayer && <div className={cn(styles.editAndRemove, classesRE)}>
        <EditSVG styles={styles.edit}
                 onClickEvent={(e) => handleEditClick(e)}
        />
        <ClearSearchValueSVG styles={styles.remove}
                             onClickEvent={(e) => handleRemoveMusic(e)}
        />

        <span className={styles.moreWrapper}>
           <MoreSVG styles={styles.more}
                    onClickEvent={(e) => handlerVisibleMenu(e)}
           />
          <MusicMoreWindow styles={styles}
                           isVisible={isVisibleMenu}
          />
        </span>
      </div>}
      <MusicTime currentTime={currentTime}
                 classesTime={classesTime!}
      />
    </div>
  );
};