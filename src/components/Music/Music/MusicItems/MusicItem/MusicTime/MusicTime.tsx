import {FC} from 'react';
import styles from './MusicTime.module.scss';
interface IMusicIconProps {
  currentTime: number
}

export const MusicTime: FC<IMusicIconProps> = ({currentTime}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = String(minutes).padStart(1, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <div className={styles.time}>
      <span>{formatTime(currentTime)}</span>
    </div>
  );
};