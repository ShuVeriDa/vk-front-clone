import {FC} from 'react';
import styles from './CreateAlbum.module.scss';
import {CreateAlbumHeader} from "./CreateAlbumHeader/CreateAlbumHeader";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePost} from "../../../../types/post.interface";
import {CreateAlbumMain} from "./CreateAlbumMain/CreateAlbumMain";
import {SubmitButton} from "../../../SubmitButton/SubmitButton";

interface ICreateAlbumProps {
  onClickClose: () => void
}

export const CreateAlbum: FC<ICreateAlbumProps> = ({onClickClose}) => {
  const {register, handleSubmit, formState, reset} = useForm<ICreatePost>({mode: "onChange"})

  const onSubmit: SubmitHandler<ICreatePost> = async (data) => {
    // await mutate(data)
    reset()
  }
  return (
    <div className={styles.wrapper}>
      <CreateAlbumHeader onClickClose={onClickClose}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreateAlbumMain register={register}/>
        <div className={styles.footer}>
          <div className={styles.btn}>
            <SubmitButton classes={styles.cancel}
                          title={'Отмена'}
            />
            <SubmitButton classes={styles.create}
                          title={'Создать альбом'}
            />
          </div>
        </div>
      </form>
    </div>
  )
};