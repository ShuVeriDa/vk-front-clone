import {FC, MutableRefObject} from 'react';
import styles from './MusicItem.module.scss';
import {AudioIconSVG, PauseMusicSVG, PlayMusicSVG} from "../../../../SvgComponent";
import {IMusicFull} from "../../../../../types/music.interface";
import cn from "clsx";
import {MusicInfo} from "./MusicInfo/MusicInfo";
import {MusicTime} from "./MusicTime/MusicTime";

interface IMusicItemProps {
  setCurrentTime: (number: number) => void
  setCurrentAudio?: (number: number) => void
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration?: number
  currentTime: number
  isSuccess: boolean
  myMusic?: IMusicFull[]
  musicItem?: IMusicFull
  classes?: string
  index?: number
  isPlayer?: boolean
  isPlaying?: boolean
}

export const MusicItem: FC<IMusicItemProps> = (
  {
    setCurrentTime,
    audioRef,
    currentAudio,
    duration,
    currentTime,
    isSuccess,
    myMusic,
    musicItem,
    classes,
    setCurrentAudio,
    index,
    isPlayer,
    isPlaying
  }
) => {





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
      {/*<MusicIcon index={index!} */}
      {/*           currentAudio={currentAudio} */}
      {/*           isPlayer={isPlayer!} */}
      {/*           isPlaying={isPlaying!} */}
      {/*/>*/}
      <MusicInfo setCurrentTime={setCurrentTime}
                 audioRef={audioRef}
                 currentAudio={currentAudio}
                 currentTime={currentTime}
                 isSuccess={isSuccess}
                 musicItem={musicItem!}
                 myMusic={myMusic!}
                 isPlayer={isPlayer!}
                 duration={duration}

      />
      <MusicTime currentTime={currentTime} />
    </div>
  );
};