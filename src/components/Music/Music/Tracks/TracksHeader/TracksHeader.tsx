import {FC} from 'react';
import styles from './TracksHeader.module.scss';
import ArrowRight from '../../../../../assets/img/rightArrow.png'
import {Link, useNavigate} from "react-router-dom";

interface IPhotosHeaderProps {
  title?: "Все аудиозаписи" | "Мои треки" | "Плейлисты"
  setValue: (value: string) => void
}

export const TracksHeader: FC<IPhotosHeaderProps> = (
  {
    title,
    setValue
  }
) => {
  const navigate = useNavigate()
  const onSetPage = () => {
    setValue('')
    navigate("/music")
  }
  return (
    <div className={styles.header}>
      <div className={styles.musicTitle}>
        <div className={styles.title}>
          <span className={styles.main}>
            <span onClick={onSetPage}>
              {
                title === "Мои треки"
                ? "Главная"
                : title=== 'Плейлисты' ? "Моя музыка" :"Результаты поиска"
              }
            </span>
          </span>
          <>
            <img src={ArrowRight} alt=""/>
            <span className={styles.category}>
            {title}
          </span>
          </>
        </div>
      </div>
    </div>
  );
};