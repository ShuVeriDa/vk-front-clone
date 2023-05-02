import {ChangeEvent, FC} from 'react';
import styles from './CreateAlbumMain.module.scss';
import {Input} from "../../../../Input/Input";
import TextareaAutosize from "react-textarea-autosize";
import {UseFormRegister} from "react-hook-form";
import {Select} from "../../../../Select/Select";

interface ICreateAlbumMainProps {
  register: UseFormRegister<any>
  selectValue: string
  onChangeSelectValue: (e: ChangeEvent<HTMLSelectElement>) => void
}

const options = ['Все пользователи', 'Друзья', 'Только я']

export const CreateAlbumMain: FC<ICreateAlbumMainProps> = ({register, selectValue, onChangeSelectValue}) => {
  return (
    <div className={styles.main}>
        <Input {...register('title', {
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
              {...register('description')}
            />
          </div>
        </div>

      <div className={styles.turnOff}>
        <Select register={register}
                type={'turnOffWatching'}
                title={'Кто может просматривать  этот альбом?'}
                options={options}
                value={selectValue}
                onChange={onChangeSelectValue}
                classes={styles.select}
        />
      </div>
    </div>
  );
};