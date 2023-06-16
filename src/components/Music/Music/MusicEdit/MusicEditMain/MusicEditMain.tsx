import {FC} from 'react';
import styles from './MusicEditMain.module.scss';
import {Input} from "../../../../Input/Input";
import {SubmitButton} from "../../../../SubmitButton/SubmitButton";
import {IMusicFull, IUpdateMusic} from "../../../../../types/music.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import {IUpdatePhotoAlbum} from "../../../../../types/photoAlbum.interface";
import {useMusicQuery} from "../../../../../react-query/useMusicQuery";

interface IMusicEditMainProps {
  music: IMusicFull
  onClickClose: () => void
}

export const MusicEditMain: FC<IMusicEditMainProps> = ({music, onClickClose}) => {
  const {updateMusic} = useMusicQuery(music.id)
  const {mutate: update} = updateMusic

  const {register, handleSubmit, formState, reset} = useForm<IUpdateMusic>({mode: "onChange"})
  const onSubmit: SubmitHandler<IUpdateMusic> = (data) => {
    update(data)
    onClickClose()
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.main}>
        <Input {...register('artist', {
          minLength: {
            value: 3,
            message: 'Минимальная длина 3 символа'
          }
        })}
               type={'text'}
               label={"Исполнитель: "}
               stylesInput={styles}
               value={music?.artist}

        />
        <Input {...register('title', {
          minLength: {
            value: 3,
            message: 'Минимальная длина 3 символа'
          }
        })}
               type={'text'}
               label={"Название: "}
               stylesInput={styles}
               value={music?.title}
        />
        <div className={styles.submitButton}>
          <SubmitButton title={'Сохранить'} classes={styles.button}/>
        </div>
      </div>
    </form>
  );
};