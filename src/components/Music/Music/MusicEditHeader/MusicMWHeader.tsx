import {FC} from 'react';
import styles from './MusicMWHeader.module.scss';
import {ClearSearchValueSVG} from "../../../SvgComponent";

interface IMusicMWHeaderProps {
  onClickClose: () => void
  title: string
}

export const MusicMWHeader: FC<IMusicMWHeaderProps> = ({onClickClose, title}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.svg}>
        <ClearSearchValueSVG onClick={onClickClose} />
      </div>
    </div>
  );
};