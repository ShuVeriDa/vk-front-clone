import {FC, useContext} from 'react';
import styles from './Duration.module.scss';
import MusicContext from "../../../context/MusicContext";
import cn from "clsx";
interface IDurationProps {
  secondStyles?: { readonly [key: string]: string }
}

export const Duration: FC<IDurationProps> = ({secondStyles}) => {
  const {duration, currentTime, handleProgressBarChange, progressBarRef} = useContext(MusicContext)!
  return (
    <div className={cn(styles.input, secondStyles?.input)}>
      <input
        className={cn(styles.duration, secondStyles?.duration)}
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
  );
};