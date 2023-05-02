import {FC} from 'react';
import styles from './CreateAlbumMain.module.scss';
import {Input} from "../../../../Input/Input";
import TextareaAutosize from "react-textarea-autosize";
import {FormState, UseFormRegister} from "react-hook-form";
import {Select} from "../../../../Select/Select";
interface ICreateAlbumMainProps {
  register: UseFormRegister<any>
}

const options = ['Все пользователи', 'Друзья', 'Только я']

export const CreateAlbumMain: FC<ICreateAlbumMainProps> = ({register}) => {
  return (
    <div className={styles.main}>
        <Input {...register('text', {
          required: "Title is required",
          minLength: {
            value: 3,
            message: 'Минимальная длина 3 символа'
          }
        })}
               label={'Название'}
               value={''}
               type={'text'}
               classes={styles.input}
          // error={errors.text}
        />
        <div className={styles.textarea}>
          <div className={styles.label}>
            <label>Описание</label>
          </div>
          <div className={styles.textareaField}>
            <TextareaAutosize
              {...register('text')}
            />
          </div>
        </div>

      <div className={styles.turnOff}>
        <Select register={register}
                type={'turnOffWatching'}
                title={'Кто может просматривать  этот альбом?'}
                options={options}
                classes={styles.select}
        />
      </div>
    </div>
  );
};