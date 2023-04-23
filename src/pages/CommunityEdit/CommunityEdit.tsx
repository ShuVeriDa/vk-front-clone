import {ChangeEvent, FC, Reducer, useReducer, useRef} from 'react';
import styles from './CommunityEdit.module.scss';
import {Input} from "../../components/Input/Input";
import {SubmitButton} from "../../components/SubmitButton/SubmitButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {useUploadQuery} from "../../react-query/useUploadQuery";
import {avatarUrl} from "../../utils/avatarUrl";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {ICommunityUpdate} from "../../types/community.interface";

interface ICommunityEditProps {
}

export type EventAction = Partial<ICommunityUpdate>;
type EventState = ICommunityUpdate;
type EventReducer = Reducer<EventState, EventAction>;

export const CommunityEdit: FC<ICommunityEditProps> = () => {
  const {id} = useParams()
  const inputFileRef = useRef<any>(null)
  const navigate = useNavigate()
  const {fetchOne} = useCommunityQuery(id)
  const {data: community} = fetchOne
  const avatar = avatarUrl(community?.avatar!)
  const fullName = `${community?.name}`

  // const {updateUser} = useUsersQuery(user?.id!)
  // const {mutate} = updateUser

  const {updateCommunity} = useCommunityQuery(id)
  const {mutate: update} = updateCommunity

  const uploadAvatar = (url: string) => {
    update({avatar: url} as ICommunityUpdate)
  }

  const {uploadFile} = useUploadQuery('avatar', uploadAvatar, community?.id!)

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e)
  }

  const [event, updateEvent] = useReducer<EventReducer>((prev, next) => {
      return {...prev, ...next}
    }, {
      name: community?.name!,
      category: community?.category!,
      description: community?.description!,
      avatar: community?.avatar!

    }
    //   TODO: При повторном изменении пользователя, данные приходят со времени авторизации, а не измененные - решить проблему
  )

  const {register, handleSubmit, formState, reset} = useForm<ICommunityUpdate>({mode: "onChange"})

  const onSubmit: SubmitHandler<ICommunityUpdate> = (data) => {
    update(data)

    navigate(`/community/${community?.id}`)
    reset()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.userInfo}>
        <div className={styles.img}>
          <img src={avatar} alt=""/>
          <button onClick={() => inputFileRef.current.click()}></button>
          <input type="file" ref={inputFileRef} onChange={handleChangeImage} hidden/>
        </div>
        <div className={styles.info}>
          <span className={styles.fullName}>{fullName}</span><br/>
          <span className={styles.id}>ID: {community?.id}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.edit}>
          <div className={styles.inputs}>
            <Input {...register('name', {
              required: "Имя обязательно",
              minLength: {
                value: 3,
                message: "Минимальная длина должна быть больше 3 символов"
              }
            })}
                   type={'text'}
                   label={'Имя:'}
                   classes={styles.inputItem}
                   classesError={styles.inputError}
                   value={event.name}
                   onChangeSome={(e) => updateEvent({name: e.currentTarget.value})}
                   error={formState.errors.name}
            />

            <Input {...register('category', {
              required: "Категория обязательна",
              minLength: {
                value: 3,
                message: "Минимальная длина должна быть больше 3 символов"
              }
            })}
                   type={'text'}
                   label={'Категория:'}
                   classes={styles.inputItem}
                   classesError={styles.inputError}
                   value={event.category}
                   onChangeSome={(e) => updateEvent({category: e.currentTarget.value})}
                   error={formState.errors.category}
            />

            <Input {...register('description')}
                   type={'text'}
                   label={'Описание:'}
                   classes={styles.inputItem}
                   value={event.description}
                   onChangeSome={(e) => updateEvent({description: e.currentTarget.value})}
                   error={formState.errors.description}
            />

            <Input {...register('avatar',)}
                   type={'text'}
                   label={'Аватар:'}
                   classes={styles.inputItem}
                   value={event.avatar}
                   onChangeSome={(e) => updateEvent({avatar: e.currentTarget.value})}
                   error={formState.errors.avatar}
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