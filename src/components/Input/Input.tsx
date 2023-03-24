import {ChangeEvent, FC, forwardRef, InputHTMLAttributes, useState} from 'react';
import styles from './Input.module.scss';
import {FieldError} from "react-hook-form";

import cn from 'clsx'
interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
  step?: string
  classes?: string
  onChangeSome?: (el: any) => void
  value?: number | string
  placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & IInputProps>(
  (
    {
      type, title, style, error,
      value, step, classes, onChangeSome, placeholder, ...rest
    }, ref
  ) => {

    const [fieldValue, setFieldValue] = useState(value)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChangeSome) {
        onChangeSome(e.currentTarget.value)
      }

      setFieldValue(e.currentTarget.value)
    }

    return (
      <div className={cn(styles.input, classes)}>
        <input className={cn(fieldValue ? styles.isValue : '')}
               type={type}
               ref={ref}
               value={fieldValue}
               onChange={onChangeHandler}
               step={step}
               placeholder={placeholder}
               {...rest}
        />
        {error && error.type && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  })

Input.displayName = 'Input'