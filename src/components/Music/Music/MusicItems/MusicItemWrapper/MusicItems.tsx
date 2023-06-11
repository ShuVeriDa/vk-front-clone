import {FC, MutableRefObject} from 'react';

import cn from "clsx";
import {IMusicFull} from "../../../../../types/music.interface";
import {MusicItem} from "../MusicItem/MusicItem";

interface IMusicItemsProps {
  music: IMusicFull[]
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  currentTime: number
  isSuccess: boolean
  isPlaying: boolean
  pixel?: number
  setCurrentTime: (number: number) => void
  setCurrentAudio: (number: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  playAudio: () => void
  pauseAudio: () => void
  styles :{readonly [key: string]: string}
}

export const MusicItemWrapper: FC<IMusicItemsProps> = (
  {
    music,
     currentTime, currentAudio,
    audioRef, isSuccess, setCurrentTime, setCurrentAudio, pauseAudio,
    playAudio, setIsPlaying, isPlaying, pixel, styles
  }
) => {
  const onClickHandler = (i: number) => {
    if (currentAudio !== i) {
      setIsPlaying(true)
      setCurrentAudio(i)
      audioRef.current?.load();
      playAudio()
    }

    if (currentAudio === i) {
      setCurrentAudio(i)
      if (isPlaying) {
        pauseAudio()
      }
      if (!isPlaying) {
        playAudio()
      }
    }
  }

  return (
      <div className={styles?.musicItems}>
        {isSuccess && music.map((m, i) => {
            return <div key={m.id}
                        className={cn(styles?.musicItemWrapper, i === currentAudio && styles?.active)}
                        onClick={() => onClickHandler(i)}
                        style={{transform: `translateX(${pixel}px)`, transition: 'transform 0.3s ease'}}
            >
              <MusicItem
                setCurrentTime={setCurrentTime}
                setCurrentAudio={setCurrentAudio}
                audioRef={audioRef}
                currentAudio={currentAudio}
                currentTime={currentTime}
                isSuccess={isSuccess}
                musicItem={m}
                classes={styles?.musicItem}
                index={i}
                isPlayer={false}
                isPlaying={isPlaying}
                classesTime={styles?.time}
              />
            </div>
          }
        )}
    </div>
  );
};