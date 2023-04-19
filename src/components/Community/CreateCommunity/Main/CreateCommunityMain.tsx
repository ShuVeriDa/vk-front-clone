import {FC} from 'react';
import styles from './CreateCommunityMain.module.scss';
import {Input} from "../../../Input/Input";
import publicCommunity from '../../../../assets/img/public-community.png'
import {FormState, UseFormRegister} from "react-hook-form";

interface ICreateCommunityMainProps {
  register: UseFormRegister<any>
  formState: FormState<any>
}

export const CreateCommunityMain: FC<ICreateCommunityMainProps> = ({register, formState}) => {

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <img src={publicCommunity} alt=""/>
        <h2>Публичная страница</h2>
        <span>Расскажите всему миру о своём творчестве,<br/>
поделитесь успехами и новостями</span>
      </div>
      <div className={styles.data}>
          <div className={styles.edit}>
            <div className={styles.inputs}>
              <Input {...register('name', {
                required: "Название обязательно",
                minLength: {
                  value: 3,
                  message: "Минимальная длина должна быть больше 3 символов"
                }
              })}
                     type={'text'}
                     value={''}
                     label={'Название:'}
                     classes={styles.inputItem}
                     classesError={styles.inputError}
                     error={formState.errors.name}
              />

              <Input {...register('category',)}
                     type={'text'}
                     value={''}
                     label={'Тематика:'}
                     classes={styles.inputItem}
                     error={formState.errors.category}
              />

              <Input {...register('description')}
                     type={'text'}
                     value={''}
                     label={'Описание:'}
                     classes={styles.inputItem}
                     error={formState.errors.description}
              />
            </div>
          </div>
      </div>
    </div>
  );
};