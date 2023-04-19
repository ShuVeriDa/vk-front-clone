import {FC, Reducer, useReducer} from 'react';
import styles from './CreateCommunityMain.module.scss';
import {Input} from "../../../Input/Input";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {ICreateCommunity} from "../../../../types/community.interface";
import publicCommunity from '../../../../assets/img/public-community.png'
interface ICreateCommunityMainProps {
}

export const CreateCommunityMain: FC<ICreateCommunityMainProps> = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState, reset} = useForm<ICreateCommunity>({mode: "onChange"})


  const onSubmit: SubmitHandler<ICreateCommunity> = (data) => {
    // mutate(data)

    // navigate(`/profile/${user?.id}`)
    reset()
  }

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <img src={publicCommunity} alt=""/>
        <h2>Публичная страница</h2>
        <span>Расскажите всему миру о своём творчестве,<br/>
поделитесь успехами и новостями</span>
      </div>
      <div className={styles.data}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.edit}>
            <div className={styles.inputs}>
              <Input {...register('name', {
                required: "name is required",
                minLength: {
                  value: 3,
                  message: "Min length should more 3 symbols"
                }
              })}
                     type={'text'}
                     label={'Название:'}
                     classes={styles.inputItem}
                     error={formState.errors.name}
              />

              <Input {...register('category', {
                required: "category is required",
              })}
                     type={'text'}
                     label={'Тематика:'}
                     classes={styles.inputItem}
                     error={formState.errors.category}
              />

              <Input {...register('description', {
                required: "description is required",
              })}
                     type={'text'}
                     label={'Описание:'}
                     classes={styles.inputItem}
                     error={formState.errors.description}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};