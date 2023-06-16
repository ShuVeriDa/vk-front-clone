import {FC} from 'react';
import styles from './MusicEditHeader.module.scss';
import {ClearSearchValueSVG} from "../../../../SvgComponent";

interface IMusicEditHeaderProps {
  onClickClose: () => void
}

export const MusicEditHeader: FC<IMusicEditHeaderProps> = ({onClickClose}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        Редактирование аудиозаписи
      </div>
      <div className={styles.svg}>
        <ClearSearchValueSVG onClick={onClickClose} />
      </div>
    </div>
  );
};