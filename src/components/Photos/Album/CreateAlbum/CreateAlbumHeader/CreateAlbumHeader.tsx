import {FC} from 'react';
import styles from './CreateAlbumHeader.module.scss';
import {ClearSearchValueSVG} from "../../../../SvgComponent";

interface ICreateAlbumHeaderProps {
  onClickClose: () => void
}

export const CreateAlbumHeader: FC<ICreateAlbumHeaderProps> = ({onClickClose}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Создать альбом</div>
      <div className={styles.svg}><ClearSearchValueSVG onClick={onClickClose}/></div>
    </div>
  );
};