import {FC} from 'react';
import styles from './TracksHeader.module.scss';
import ArrowRight from '../../../../../assets/img/rightArrow.png'
import {Link, useNavigate} from "react-router-dom";

interface IPhotosHeaderProps {
  title?: string
}

export const TracksHeader: FC<IPhotosHeaderProps> = (
  {
    title,

  }
) => {
  const navigate = useNavigate()
  const onSetPage = () => navigate("/music")
  return (
    <div className={styles.header}>
      <div className={styles.musicTitle}>
        <div className={styles.title}>
          <span className={styles.main}>
            <span onClick={onSetPage}>Главная</span>
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