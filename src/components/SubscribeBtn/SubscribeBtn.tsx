import {FC} from 'react';
import styles from './SubscribeBtn.module.scss';
import cn from "clsx";
interface ISubscribeBtnProps {
  title: string
  classes?: string
}

export const SubscribeBtn: FC<ISubscribeBtnProps> = ({title, classes}) => {
  return (
    <div className={cn(styles.btn, classes)}>
      <button>
        {title}
      </button>
    </div>
  );
};