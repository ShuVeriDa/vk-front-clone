import {ChangeEvent, FC, MutableRefObject, useRef} from 'react';
import styles from './MusicInfo.module.scss';
import {IMusicFull} from "../../../../../../types/music.interface";


interface IMusicInfoProps {
  setCurrentTime: (number: number) => void
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration?: number
  currentTime: number
  isSuccess: boolean
  music: IMusicFull[]
  musicItem: IMusicFull
  isPlayer: boolean
}

export const MusicInfo: FC<IMusicInfoProps> = (
  {
    musicItem,
    music,
    isSuccess,
    audioRef,
    currentAudio,
    duration,
    currentTime,
    setCurrentTime,
    isPlayer,
  }
) => {

  const progressBarRef = useRef<HTMLInputElement>(null);

  const handleProgressBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.currentTarget.value);
    setCurrentTime(time);
    audioRef.current!.currentTime = time;
  };
  
  return (
    <div className={styles.info}>
            <span className={styles.title}>
              {music && <> {isSuccess && music![currentAudio].title}</>}
              {musicItem?.title}
            </span>
      <span className={styles.artist}>
          {music && <>{isSuccess && music![currentAudio].artist} </>}
        {musicItem?.artist}
            </span>
      {isPlayer && <div className={styles.input}>
        <input
          className={styles.duration}
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleProgressBarChange}
          ref={progressBarRef}
          style={{
            background: `linear-gradient(to right,  #447BBA ${currentTime / duration! * 100}%, #edeef0 ${currentTime / duration! * 100}%)`
          }}
        />
      </div>
      }
    </div>
  );
};