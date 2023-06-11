import {FC, MutableRefObject, useState} from 'react';
import styles from './MusicItems.module.scss';
import {IMusicFull} from "../../../../types/music.interface";
import {MusicItem} from "./MusicItem/MusicItem";
import cn from "clsx";
import {LeftArrowMusicSVG, RightArrow, RightArrowMusicSVG} from "../../../SvgComponent";
import {Link, useNavigate} from "react-router-dom";

interface IMusicItemsProps {
  title?: 'Мои треки' | "Недавно прослушанные" | "Все аудиозаписи"
  music: IMusicFull[]
  audioRef: MutableRefObject<HTMLAudioElement | null>
  currentAudio: number
  duration: number
  currentTime: number
  isSuccess: boolean
  myMusic?: IMusicFull[]
  isPlaying: boolean
  setCurrentTime: (number: number) => void
  setCurrentAudio: (number: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  playAudio: () => void
  pauseAudio: () => void
}

export const MusicItems: FC<IMusicItemsProps> = (
  {
    title, music,
    myMusic, currentTime, currentAudio,
    audioRef, duration, isSuccess, setCurrentTime, setCurrentAudio, pauseAudio,
    playAudio, setIsPlaying, isPlaying
  }
) => {
  const navigate=useNavigate()
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

  const [pixel, setPixel] = useState(0)

  const translateLeft = () => {
    if (pixel < 0) setPixel(pixel + 300)
  }

  const translateRight = () => {
    setPixel(pixel - 300)
  }

  const onSetPage = () => {
    if (title === 'Мои треки') navigate('/music/mytracks')
    if (title === 'Все аудиозаписи') navigate('/music/alltracks')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <span onClick={onSetPage}>
          Показать все <RightArrowMusicSVG styles={styles.smallRightArrow}/>
        </span>
      </div>
      {pixel !== 0 && <div onClick={translateLeft} className={styles.leftArrow}><LeftArrowMusicSVG/></div>}
      <div className={styles.musicItems}>
        {music?.map((m, i) => {
            return <div key={m.id}
                        className={cn(styles.musicItemWrapper, i === currentAudio && styles.active,)}
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
                classes={styles.musicItem}
                index={i}
                isPlayer={false}
                isPlaying={isPlaying}
              />
            </div>
          }
        )}
        <div onClick={translateRight} className={styles.rightArrow}><RightArrowMusicSVG/></div>
      </div>
    </div>
  );
};