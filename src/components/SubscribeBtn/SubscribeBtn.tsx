import {MouseEvent, FC, FormEvent} from 'react';
import styles from './SubscribeBtn.module.scss';
import cn from "clsx";
import {useFriendsQuery} from "../../react-query/useFriendsQuery";
import {UseMutateFunction, UseMutationResult} from "@tanstack/react-query";
interface ISubscribeBtnProps {
  title: string
  classes?: string
  onChange?:  () => void
}

export const SubscribeBtn: FC<ISubscribeBtnProps> = ({title, classes, onChange}) => {

  return (
    <div className={cn(styles.btn, classes)}>
      <button onClick={onChange}>
        {title}
      </button>
    </div>
  );
};