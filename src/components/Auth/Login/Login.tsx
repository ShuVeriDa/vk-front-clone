import {FC} from 'react';
import styles from './Login.module.scss';
import {StatusEnum} from "../../../redux/types";
import {Input} from "../../Input/Input";
import {FormState, UseFormRegister} from "react-hook-form";
import {validEmail} from "../../../utils/regex";
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
          required: "Электронная почта обязательна", pattern: {
            value: validEmail,
            message: 'Пожалуйста, введите действительный адрес электронной почты'
          }
        }
      )}
             title={'Email'}
             value={''}
             placeholder={'Почта'}
             type={'email'}
             error={errors.email}
             autoComplete={'email'}
      />
      <Input {...register('password', isPasswordRequired ? {
          required: "Пароль обязателен",
          minLength: {
            value: 6,
            message: "Минимальная длина должна быть больше 6 символов"
          }
        } : {}
      )}
             title={'Password'}
             value={''}
             placeholder={'Пароль'}
             type={'password'}
             error={errors.password}
             autoComplete={'password'}
      />
    </div>
  );
};