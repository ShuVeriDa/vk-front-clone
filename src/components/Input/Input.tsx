import {ChangeEvent, Dispatch, FC, forwardRef, InputHTMLAttributes, SetStateAction, useState} from 'react';
import styles from './Input.module.scss';
import {FieldError} from "react-hook-form";

import cn from 'clsx'
import {EventAction} from "../../pages/ProfileEdit/ProfileEditPage";

interface IInputProps {
  title?: string
  type: string
  error?: FieldError | undefined | any
  step?: string
  classes?: string
  stylesInput?: { readonly [key: string]: string }
  classesError?: string
  onChangeSome?: (el: any) => void
  value?: number | string
  placeholder?: string
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & IInputProps>(
  (
    {
      type, title, style, error,
      value, step, classes, classesError,placeholder, label,onChangeSome, stylesInput, ...rest
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
      <div className={cn(classes, styles.input, stylesInput?.input)}>
        <div className={cn(styles.inputLabel, stylesInput?.inputLabel)}>
          {label && <div><label>{label}</label></div>}
          <input className={cn(fieldValue ? styles.isValue : '')}
                 type={type}
                 ref={ref}
                 value={fieldValue || ''}
                 {...rest}
                 onChange={onChangeHandler}
                 step={step}
                 placeholder={placeholder}
          />
        </div>
        <div className={cn(styles.errorWrapper, classesError, stylesInput?.errorWrapper)}>
          {error && error.type && <div className={cn(styles.error, stylesInput?.error)}>{error.message}</div>}
        </div>

      </div>
    );
  })

Input.displayName = 'Input'