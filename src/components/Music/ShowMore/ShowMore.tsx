import {FC} from 'react';
import {RightArrowMusicSVG} from "../../SvgComponent";
import styles from './ShowMore.module.scss';

interface IShowMoreProps {
  onSetPage: () => void
}

export const ShowMore: FC<IShowMoreProps> = ({onSetPage}) => {
  return (
    <span onClick={onSetPage} className={styles.showMore}>
          Показать все <RightArrowMusicSVG styles={styles.smallRightArrow}/>
    </span>
  );
};