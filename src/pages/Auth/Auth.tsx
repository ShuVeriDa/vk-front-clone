import {ChangeEvent, FC, useState} from 'react';
import styles from './Auth.module.scss';
import {Login} from "../../components/Login/Login";
import {Register} from "../../components/Register/Register";
import {SubmitHandler, useForm} from "react-hook-form";
import {useActions} from "../../hooks/useActions";
import {IAuthInputType} from "../../redux/types";
import {HandleChangeImage} from "../../utils/HandleChangeImage";
import {useAppSelector} from "../../redux/store";
import logo from '../../assets/vk.png'

interface ILoginProps {
}

export const Auth: FC<ILoginProps> = () => {
  const [imageUrl, setImageUrl] = useState('')
  const [type, setType] = useState<'login' | 'register'>('login')

  const {status, user} = useAppSelector(state => state.user)

  const {loginTC, registerTC} = useActions()
  const {register: registerInput, handleSubmit, formState, reset} = useForm<IAuthInputType>({mode: 'onChange'})

  const onSubmit: SubmitHandler<IAuthInputType> = (data) => {
    if (type === 'login') loginTC(data)
    else if(type === 'register') registerTC({
      ...data,
      avatar: imageUrl,
    })
  }

  const onSelectType = (type: 'login' | 'register') => {
    setType(type)
  }


  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    HandleChangeImage(e, setImageUrl, 'user')
  }

  return (
    <div className={styles.auth}>
      <div className={styles.container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.header}>
              <div className={styles.logo}>
                <img src={logo} alt=""/>
              </div>
            </div>
            {type === 'register'
              ? <Login register={registerInput}
                       formState={formState}
                       isPasswordRequired
                       status={status}
                       onSelectType={onSelectType}
              />
              : <Register register={registerInput}
                          formState={formState}
                          isPasswordRequired
                          status={status}
                          onSelectType={onSelectType}
                          handleChangeImage={changeImage}

              />
            }
          <div>
            <button>Вход</button>
          </div>
        </form>
      </div>
    </div>
  );
};