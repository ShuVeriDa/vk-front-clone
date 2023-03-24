import {StatusEnum} from "../../redux/types";
import cn from "clsx";
import {FC} from "react";

import styles from './SubmitButton.module.scss';

interface ISubmitButtonProps {
  title: string
  status?: StatusEnum
  onSelectType?: () => void
  classes?: string
}

export const SubmitButton: FC<ISubmitButtonProps> = ({title, classes, status, onSelectType}) => {
  const isLoading = status === 'success'
  return (
    <>
      <button type={'submit'}
              onClick={onSelectType}
              className={cn(styles.btn, classes)} disabled={isLoading}
      >
        {title}
      </button>
    </>
  );
};