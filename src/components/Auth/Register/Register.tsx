import {ChangeEvent, FC} from 'react';
import {StatusEnum} from "../../../redux/types";
import {Input} from "../../Input/Input";
import {FormState, UseFormRegister} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../redux/store";
import {validEmail} from "../../../utils/regex";

import styles from './Register.module.scss';

interface IRegisterProps {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
  status: StatusEnum
  onSelectType: (type: 'login' | 'register') => void
}

export const Register: FC<IRegisterProps> = (
  {
    register,
    isPasswordRequired = false,
    formState: {errors},
    status,
    onSelectType,
  }) => {

  const dispatch = useDispatch<AppDispatchType>()

  return (
    <div className={styles.registration}>
      <div className={styles.header}>
        <h2 className={styles.title}>Впервые ЗӀенеХь?</h2>
        <p className={styles.description}>Ваш email будет использоваться для входа в аккаунт</p>
      </div>
      <Input {...register('email', {
          required: "Электронная почта обязательна", pattern: {
            value: validEmail,
            message: 'Пожалуйста, введите действительный адрес электронной почты'
          }
        }
      )}
             placeholder={'Почта'}
             value={''}
             type={'email'}
             error={errors.email}
      />
      <Input {...register('password', isPasswordRequired ? {
          required: "Пароль обязателен",
          minLength: {
            value: 6,
            message: "Минимальная длина должна быть больше 6 символов"
          }
        } : {}
      )}
             placeholder={'Пароль'}
             value={''}
             type={'password'}
             error={errors.password}
      />
      <Input {...register('lastName', {
          required: "Фамилия обязательна", minLength: {
            value: 3, message: "Минимальная длина должна быть больше 3 символов"
          }
        }
      )}
             type={'lastName'}
             value={''}
             placeholder={'Фамилия'}
             error={errors.lastName}
      />
      <Input {...register('firstName', {
          required: "Имя обязательно", minLength: {
            value: 3, message: "Минимальная длина должна быть больше 3 символов"
          }
        }
      )}
             type={'firstName'}
             value={''}
             placeholder={'Имя'}
             error={errors.firstName}
      />
    </div>
  );
};