import {FC} from 'react';
import styles from './CreateCommunityHeader.module.scss';
import {ClearSearchValueSVG} from "../../../SvgComponent";
interface ICreateCommunityHeaderProps {
}

export const Header: FC<ICreateCommunityHeaderProps> = () => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>Создание сообщества</span>
      <span className={styles.close}><ClearSearchValueSVG/></span>
    </div>
  );
};