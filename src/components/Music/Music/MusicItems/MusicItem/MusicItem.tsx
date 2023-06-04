import {ChangeEvent, FC, MutableRefObject, useRef} from 'react';
import styles from './MusicItem.module.scss';
import {AudioIconSVG} from "../../../../SvgComponent";
import {IMusicFull} from "../../../../../types/music.interface";
import cn from "clsx";

interface IMusicItemProps {
  setCurrentTime: (number: number) => void
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration?: number
  currentTime: number
  isSuccess: boolean
  myMusic?: IMusicFull[]
  musicItem?: IMusicFull
  classes?: string
}

export const MusicItem: FC<IMusicItemProps> = (
  {setCurrentTime, audioRef, currentAudio, duration, currentTime, isSuccess, myMusic, musicItem, classes}
) => {
  const progressBarRef = useRef<HTMLInputElement>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = String(minutes).padStart(1, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleProgressBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.currentTarget.value);
    setCurrentTime(time);
    audioRef.current!.currentTime = time;
  };

  return (
    <div className={cn(styles.musicItem, classes)}>
      <div className={styles.icon}><AudioIconSVG/></div>
      <div className={styles.info}>
            <span className={styles.title}>
              {myMusic && <> {isSuccess && myMusic![currentAudio].title}</>}
              {musicItem?.title}
            </span>
        <span className={styles.artist}>
          {myMusic && <>{isSuccess && myMusic![currentAudio].artist} </>}
          {musicItem?.artist}
            </span>
        {duration && <div className={styles.input}>
          <input
            className={styles.duration}
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleProgressBarChange}
            ref={progressBarRef}
            style={{
              background: `linear-gradient(to right,  #447BBA ${currentTime / duration * 100}%, #edeef0 ${currentTime / duration * 100}%)`
            }}
          />
        </div>}
      </div>
      <div className={styles.time}>
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
};