import {FC, useContext} from 'react';
import cn from "clsx";
import {IMusicFull} from "../../../../../types/music.interface";
import {MusicItem} from "../MusicItem/MusicItem";
import MusicContext from "../../../../../context/MusicContext";

interface IMusicItemsProps {
  music: IMusicFull[]
  pixel?: number
  styles: { readonly [key: string]: string }
}

export const MusicItemWrapper: FC<IMusicItemsProps> = ({music, pixel, styles}
) => {
  const {
    currentAudio, audioRef, isSuccess, setCurrentAudio, pauseAudio, playAudio, setIsPlaying, isPlaying
  } = useContext(MusicContext)!

  const onClickHandler = async(i: number) => {
    if (currentAudio !== i) {
      setIsPlaying(true)
      setCurrentAudio(i)
      audioRef.current?.load();
      await playAudio()
    }

    if (currentAudio === i) {
      setCurrentAudio(i)
      if (isPlaying) {
        await pauseAudio()
      }
      if (!isPlaying) {
        await playAudio()
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
            <MusicItem musicItem={m}
                       classes={styles?.musicItem}
                       index={i}
                       isPlayer={false}
                       classesTime={styles?.time}
                       classesRE={styles?.removeAndEdit}
            />
          </div>
        }
      )}
    </div>
  );
};