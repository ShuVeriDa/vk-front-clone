import {StatusEnum} from "../../redux/types";
import cn from "clsx";
import {FC} from "react";

import styles from './SubmitButton.module.scss';
import {Simulate} from "react-dom/test-utils";

interface ISubmitButtonProps {
  title: string
  status?: StatusEnum
  onSelectType?: () => void
  classes?: string
  disabled?: boolean
}

export const SubmitButton: FC<ISubmitButtonProps> = ({title, classes, status, onSelectType, disabled}) => {
  const isLoading = status === 'success'
  return (
    <>
      <button type={'submit'}
              onClick={onSelectType}
              className={cn(styles.btn, classes)}
              disabled={status ? isLoading : disabled}
      >
        {title}
      </button>
    </>
  );
};