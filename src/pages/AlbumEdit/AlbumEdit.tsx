import {ChangeEvent, FC, useState} from 'react';
import styles from './AlbumEdit.module.scss';
import {PhotosHeader} from "../../components/Photos/Photos/PhotosHeader/PhotosHeader";
import {useNavigate, useParams} from "react-router-dom";
import {usePhotoAlbumQuery} from "../../react-query/usePhotoAlbumQuery";
import {CreateAlbumMain} from "../../components/Photos/Album/CreateAlbum/CreateAlbumMain/CreateAlbumMain";
import {CreateAlbumFooter} from "../../components/Photos/Album/CreateAlbum/CreateAlbumFooter/CreateAlbumFooter";
import {SubmitButton} from "../../components/SubmitButton/SubmitButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePhotoAlbum, IUpdatePhotoAlbum} from "../../types/photoAlbum.interface";

interface IAlbumEditProps {
}

export const AlbumEdit: FC<IAlbumEditProps> = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {getOneAlbum, deleteAlbum} = usePhotoAlbumQuery(id)
  const {mutate: remove} = deleteAlbum
  const {data: album} = getOneAlbum

  const turnOff = album?.turnOffWatching === 'all'
    ? "0"
    : album?.turnOffWatching === 'friends'
      ? '1'
      : '2'

  const [selectValue, setSelectValue] = useState(turnOff)
  // const {createAlbum} = usePhotoAlbumQuery()
  // const {mutate: create} = createAlbum

  const onChangeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value)
  }

  const {register, handleSubmit, formState, reset} = useForm<IUpdatePhotoAlbum>({mode: "onChange"})

  const valueSelect =
    selectValue === '0'
      ? 'all'
      : selectValue === '1'
        ? 'friends'
        : 'me'

  const onDeleteAlbum = () => {
    remove(id!)
    navigate('/albums')
  }

  const onSubmit: SubmitHandler<IUpdatePhotoAlbum> = async (data) => {
    // create({
    //   title: data.title!,
    //   description: data.description,
    //   turnOffWatching: valueSelect
    // })

    console.log({
      title: data.title!,
        description: data.description,
        turnOffWatching: valueSelect
    })
    reset()
  }


  console.log(album?.turnOffWatching)

  return (
    <div className={styles.wrapper}>
      <PhotosHeader title={album?.title!}
                    onClickDelete={onDeleteAlbum}
                    edit={true}
      />
      <div className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CreateAlbumMain title={album?.title}
                           description={album?.description}
                           register={register}
                           selectValue={selectValue}
                           onChangeSelectValue={onChangeSelectValue}
          />
          <div className={styles.button}>
            <SubmitButton title={'Сохранить изменения'}
                          classes={styles.saveBtn}
            />
          </div>

        </form>
      </div>
    </div>
  );
};