import {FC} from 'react';
import styles from './CreateCommunityHeader.module.scss';
import {ClearSearchValueSVG} from "../../../SvgComponent";
import {Link} from "react-router-dom";
interface ICreateCommunityHeaderProps {
}

export const Header: FC<ICreateCommunityHeaderProps> = () => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>Создание сообщества</span>
      <Link to={'/groups'}>
        <span className={styles.close}><ClearSearchValueSVG/>
        </span></Link>

    </div>
  );
};