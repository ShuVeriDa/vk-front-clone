import {FC, MutableRefObject, useState} from 'react';
import styles from './MusicItems.module.scss';
import {IMusicFull} from "../../../../types/music.interface";
import {MusicItem} from "./MusicItem/MusicItem";
import cn from "clsx";
import {LeftArrowMusicSVG, RightArrow, RightArrowMusicSVG} from "../../../SvgComponent";
import {Link, useNavigate} from "react-router-dom";
import {MusicItemWrapper} from "./MusicItemWrapper/MusicItems";

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
  onClickEdit: () => void
  playAudio: () => void
  pauseAudio: () => void
}

export const MusicItems: FC<IMusicItemsProps> = (
  {
    title, music,
    myMusic, currentTime, currentAudio,
    audioRef, duration, isSuccess, setCurrentTime, setCurrentAudio, pauseAudio,
    playAudio, setIsPlaying, isPlaying, onClickEdit
  }
) => {
  const navigate = useNavigate()

  const [pixel, setPixel] = useState(0)

  const totalColumns = Math.ceil(music?.length / 3);

  let maxPixel = 0;

  if (totalColumns > 2) {
    const lastColumnWidth = music?.length % 3 * 100;
    if (lastColumnWidth !== 0) {
      maxPixel = -(totalColumns - 2) * 300 - 403;
    } else {
      maxPixel = -(totalColumns - 2) * 300;
    }
  }

  const translateLeft = () => {
    if (pixel < 0) setPixel(pixel + 403)
  }


  const translateRight = () => {
    if (pixel > maxPixel) setPixel(pixel - 403);
    if (pixel < maxPixel) setPixel(pixel - 403);
  }



  console.log(maxPixel)

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


      <MusicItemWrapper music={music}
                        audioRef={audioRef}
                        currentAudio={currentAudio}
                        currentTime={currentTime}
                        isSuccess={isSuccess}
                        isPlaying={isPlaying}
                        pixel={pixel}
                        setCurrentTime={setCurrentTime}
                        setCurrentAudio={setCurrentAudio}
                        setIsPlaying={setIsPlaying}
                        playAudio={playAudio}
                        pauseAudio={pauseAudio}
                        onClickEdit={onClickEdit}
                        styles={styles}
      />

      {pixel > maxPixel - 403 && (
        <div onClick={translateRight} className={styles.rightArrow}>
          <RightArrowMusicSVG/>
        </div>
      )}
    </div>
  );
};