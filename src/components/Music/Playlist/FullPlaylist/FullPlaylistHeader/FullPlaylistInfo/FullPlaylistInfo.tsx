import {FC} from 'react';
import styles from './FullPlaylistInfo.module.scss';
import {Link} from "react-router-dom";
import {ShareSVG} from "../../../../../SvgComponent";
import ReactTimeago from "react-timeago";
interface IFullPlaylistInfoProps {
  title: string
  name: string
  updatedAt: string
}

export const FullPlaylistInfo: FC<IFullPlaylistInfoProps> = ({updatedAt, name, title}) => {
  return (
    <div className={styles.info}>
      <div className={styles.information}>
        <span className={styles.title}><Link to={"/music"}>{title}</Link></span>
        <span className={styles.name}><Link to={"/music"}>{name}</Link></span>
        <span className={styles.updatedAt}>обновлён сегодня в <ReactTimeago date={updatedAt}/></span>
      </div>
      <div className={styles.btns}>
        <span className={styles.share}>
          <ShareSVG fill={"#A8AEB8"}/>
          <span className={styles.text}>Поделиться</span>
        </span>
      </div>
    </div>
  );
};