import {ChangeEvent, FC} from 'react';

import styles from './Select.module.scss';
import {FormState, UseFormRegister} from "react-hook-form";
import cn from "clsx";

interface ISelectProps {
  title: string
  type: string,
  options: string[],
  register: UseFormRegister<any>
  formState?: FormState<any>
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  value?: number | string
  classes?: string
}

export const Select: FC<ISelectProps> = ({register, type, value, onChange, options, title, formState, classes}) => {
  return (
    <div className={cn(classes, styles.wrapper)}>
      <span className={styles.title}>{title}</span>
      <select {...register(type)}
              onChange={onChange}
              value={value}
              className={styles.select}
      >
        {
          options.map((obj, i) => {
            return <option key={i}
                           value={i}
            >
              {obj}
            </option>
          })
        }
      </select>
    </div>
  );
};