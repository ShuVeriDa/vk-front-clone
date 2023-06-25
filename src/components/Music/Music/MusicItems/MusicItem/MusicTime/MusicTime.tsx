import {FC} from 'react';
import styles from './MusicTime.module.scss';
import cn from "clsx";
interface IMusicIconProps {
  currentTime: number
  classesTime?: string
}

export const MusicTime: FC<IMusicIconProps> = ({currentTime, classesTime}) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = String(minutes).padStart(1, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <div className={cn(styles.time, classesTime)}>
      <span>{formatTime(currentTime)}</span>
    </div>
  );
};