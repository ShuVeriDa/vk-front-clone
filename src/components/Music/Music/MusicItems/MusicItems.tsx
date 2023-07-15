import {FC, useState} from 'react';
import styles from './MusicItems.module.scss';
import {IMusicFull} from "../../../../types/music.interface";
import {LeftArrowMusicSVG, RightArrowMusicSVG} from "../../../SvgComponent";
import {useNavigate} from "react-router-dom";
import {MusicItemWrapper} from "./MusicItemWrapper/MusicItems";
import {ShowMore} from "../../ShowMore/ShowMore";

interface IMusicItemsProps {
  title?: 'Мои треки' | "Недавно прослушанные" | "Все аудиозаписи"
  music: IMusicFull[]
}

export const MusicItems: FC<IMusicItemsProps> = ({title, music}) => {
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

  const onSetPage = () => {
    if (title === 'Мои треки') navigate('/music/mytracks')
    if (title === 'Все аудиозаписи') navigate('/music/alltracks')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <ShowMore onSetPage={onSetPage} />
      </div>
      {pixel !== 0 && <div onClick={translateLeft} className={styles.leftArrow}><LeftArrowMusicSVG/></div>}

      <MusicItemWrapper music={music}
                        pixel={pixel}
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