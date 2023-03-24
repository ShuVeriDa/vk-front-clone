import {FC} from 'react';
import styles from './Login.module.scss';
import {StatusEnum} from "../../redux/types";
import {Input} from "../Input/Input";
import {FormState, UseFormRegister} from "react-hook-form";
import {validEmail} from "../../utils/regex";
interface ILoginProps {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
  status: StatusEnum
  onSelectType: (type: 'login' | 'register') => void
}

export const Login: FC<ILoginProps> = ({register, isPasswordRequired = false, formState: {errors}, status, onSelectType}) => {
  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <h2 className={styles.title}>Вход ВКонтакте</h2>
      </div>
      <Input {...register('email', {
          required: "Email is required", pattern: {
            value: validEmail,
            message: 'Пожалуйста, введите действительный адрес электронной почты'
          }
        }
      )}
             title={'Email'}
             placeholder={'Почта'}
             type={'email'}
             error={errors.email}
      />
      <Input {...register('password', isPasswordRequired ? {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Минимальная длина должна быть больше 6 символов"
          }
        } : {}
      )}
             title={'Password'}
             placeholder={'Пароль'}
             type={'password'}
             error={errors.password}
      />
    </div>
  );
};