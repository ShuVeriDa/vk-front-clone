import {FC, Reducer, useReducer, useRef} from 'react';
import styles from './ProfileEdit.module.scss';
import {Input} from "../../components/Input/Input";
import {useAuth} from "../../hooks/useAuth";
import {SubmitButton} from "../../components/SubmitButton/SubmitButton";
import {IUserUpdate} from "../../types/user.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useUsersQuery} from "../../react-query/useUsersQuery";
import {validEmail} from "../../utils/regex";

interface IProfileUpdateProps {
}

export type EventAction = Partial<IUserUpdate>;
type EventState = IUserUpdate;
type EventReducer = Reducer<EventState, EventAction>;

export const ProfileEdit: FC<IProfileUpdateProps> = () => {
  const inputFileRef = useRef<any>(null)
  const navigate = useNavigate()
  const {user} = useAuth()
  const fullName = `${user?.lastName} ${user?.firstName}`

  const {updateUser, getUserById} = useUsersQuery(user?.id!)
  // const {data: currentUser} = getUserById
  const {mutate} = updateUser

  const [event, updateEvent] = useReducer<EventReducer>((prev, next) => {
      return {...prev, ...next}
    }, {
      email: user?.email!,
      avatar: user?.avatar!,
      firstName: user?.firstName!,
      lastName: user?.lastName!,
      status: user?.status!,
      location: user?.location!

    // email: currentUser?.email!,
    //   avatar: currentUser?.avatar!,
    //   firstName: currentUser?.firstName!,
    //   lastName: currentUser?.lastName!,
    //   status: currentUser?.status!,
    //   location: currentUser?.location!
    }
  //   TODO: При повторном изменении пользователя, данные приходят со времени авторизации, а не измененные - решить проблему
  )

  const {register, handleSubmit, formState, reset} = useForm<IUserUpdate>({mode: "onChange"})

  const onSubmit: SubmitHandler<IUserUpdate> = (data) => {
    mutate(data)

    navigate(`/profile/${user?.id}`)
    reset()
  }


  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <div className={styles.img}>
          <img src={user?.avatar} alt=""/>
          <button onClick={() => inputFileRef.current.click()}></button>
          <input type="file" ref={inputFileRef} hidden/>
        </div>
        <div className={styles.info}>
          <span className={styles.fullName}>{fullName}</span><br/>
          <span className={styles.id}>ID: {user?.id}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.edit}>
          <div className={styles.inputs}>
            <Input {...register('email', {
              required: "Email is required", pattern: {
                value: validEmail,
                message: 'Please enter a valid email address'
              }
            })}
                   type={'email'}
                   label={'Email:'}
                   classes={styles.inputItem}
                   value={event.email}
                   onChangeSome={(e) => updateEvent({email: e.currentTarget.value})}
                   error={formState.errors.email}
            />

            <Input {...register('firstName', {
              required: "firstName is required",
              minLength: {
                value: 3,
                message: "Min length should more 3 symbols"
              }
            })}
                   type={'text'}
                   label={'Имя:'}
                   classes={styles.inputItem}
                   value={event.firstName}
                   onChangeSome={(e) => updateEvent({firstName: e.currentTarget.value})}
                   error={formState.errors.firstName}
            />

            <Input {...register('lastName', {
              required: "lastName is required",
              minLength: {
                value: 3,
                message: "Min length should more 3 symbols"
              }
            })}
                   type={'text'}
                   label={'Фамилия:'}
                   classes={styles.inputItem}
                   value={event.lastName}
                   onChangeSome={(e) => updateEvent({lastName: e.currentTarget.value})}
                   error={formState.errors.lastName}
            />

            <Input {...register('status')}
                   type={'text'}
                   label={'Статус:'}
                   classes={styles.inputItem}
                   value={event.status}
                   onChangeSome={(e) => updateEvent({status: e.currentTarget.value})}
                   error={formState.errors.status}
            />

            <Input {...register('location', {
              required: "location is required",
              minLength: {
                value: 3,
                message: "Min length should more 3 symbols"
              }
            })}
                   type={'text'}
                   label={'Родной город:'}
                   classes={styles.inputItem}
                   value={event.location}
                   onChangeSome={(e) => updateEvent({location: e.currentTarget.value})}
                   error={formState.errors.location}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <SubmitButton title={'Сохранить'} classes={styles.btnSave}/>
        </div>
      </form>
    </div>
  );
};