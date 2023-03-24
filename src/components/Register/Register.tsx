import {ChangeEvent, FC} from 'react';
import {StatusEnum} from "../../redux/types";
import {Input} from "../Input/Input";
import {FormState, UseFormRegister} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../redux/store";
import {validEmail} from "../../utils/regex";

import styles from './Register.module.scss';

interface IRegisterProps {
  register: UseFormRegister<any>
  formState: FormState<any>
  isPasswordRequired?: boolean
  status: StatusEnum
  onSelectType: (type: 'login' | 'register') => void
  handleChangeImage: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Register: FC<IRegisterProps> = (
  {
    register,
    isPasswordRequired = false,
    formState: {errors},
    status,
    onSelectType,
    handleChangeImage
  }) => {

  const dispatch = useDispatch<AppDispatchType>()

  return (
    <div className={styles.registration}>
      <div className={styles.header}>
        <h2 className={styles.title}>Впервые ВКонтакте?</h2>
        <p className={styles.description}>Ваш email будет использоваться для входа в аккаунт</p>
      </div>
      <Input {...register('email', {
          required: "Email is required", pattern: {
            value: validEmail,
            message: 'Please enter a valid email address'
          }
        }
      )}
             placeholder={'Почта'}
             type={'email'}
             error={errors.email}
      />
      <Input {...register('password', isPasswordRequired ? {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Min length should more 6 symbols"
          }
        } : {}
      )}
             placeholder={'Пароль'}
             type={'password'}
             error={errors.password}
      />
      <Input {...register('nickName', {
          required: "Nickname is required", minLength: {
            value: 3, message: "Min length should more 3 symbols"
          }
        }
      )}
             title={'Nickname'}
             type={'nickName'}
             error={errors.nickName}
      />
    </div>
  );
};