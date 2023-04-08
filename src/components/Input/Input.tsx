import {ChangeEvent, Dispatch, FC, forwardRef, InputHTMLAttributes, SetStateAction, useState} from 'react';
import styles from './Input.module.scss';
import {FieldError} from "react-hook-form";

import cn from 'clsx'
import {EventAction} from "../../pages/ProfileEdit/ProfileEdit";

interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
  step?: string
  classes?: string
  onChangeSome?: (el: any) => void
  value?: number | string
  placeholder?: string
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & IInputProps>(
  (
    {
      type, title, style, error,
      value, step, classes, onChangeSome, placeholder, label, ...rest
    }, ref
  ) => {

    const [fieldValue, setFieldValue] = useState(value)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | any) => {
      if (onChangeSome) {
        // onChangeSome(e.currentTarget.value)
        onChangeSome(e)
      }

      setFieldValue(e.currentTarget.value)
    }

    return (
      <div className={cn(styles.input, classes)}>
        {label && <div><label>{label}</label></div>}
        <input className={cn(fieldValue ? styles.isValue : '')}
               type={type}
               ref={ref}
               value={fieldValue}
               {...rest}
               onChange={onChangeHandler}
               step={step}
               placeholder={placeholder}



        />
        {error && error.type && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  })

Input.displayName = 'Input'