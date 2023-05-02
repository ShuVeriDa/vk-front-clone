import {ChangeEvent, FC, useState} from 'react';
import styles from './CreateAlbum.module.scss';
import {CreateAlbumHeader} from "./CreateAlbumHeader/CreateAlbumHeader";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePost} from "../../../../types/post.interface";
import {CreateAlbumMain} from "./CreateAlbumMain/CreateAlbumMain";
import {CreateAlbumFooter} from "./CreateAlbumFooter/CreateAlbumFooter";
import {usePhotoAlbumQuery} from "../../../../react-query/usePhotoAlbumQuery";
import {ICreatePhotoAlbum} from "../../../../types/photoAlbum.interface";

interface ICreateAlbumProps {
  onClickClose: () => void
}

export const CreateAlbum: FC<ICreateAlbumProps> = ({onClickClose}) => {
  const [selectValue, setSelectValue] = useState('1')
  const {createAlbum} = usePhotoAlbumQuery()
  const {mutate: create} = createAlbum

  const onChangeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value)
  }

  const {register, handleSubmit, formState, reset} = useForm<ICreatePhotoAlbum>({mode: "onChange"})

  const valueSelect=
    selectValue === '0'
      ? 'all'
      : selectValue === '1'
        ? 'friends'
        : 'me'

  const onSubmit: SubmitHandler<ICreatePhotoAlbum> = async (data) => {
    create({
      title: data.title,
      description: data.description,
      turnOffWatching: valueSelect
    })
    onClickClose()
    reset()
  }


  return (
    <div className={styles.wrapper}>
      <CreateAlbumHeader onClickClose={onClickClose}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreateAlbumMain register={register}
                         selectValue={selectValue}
                         onChangeSelectValue={onChangeSelectValue}
        />
        <CreateAlbumFooter />
      </form>
    </div>
  )
};