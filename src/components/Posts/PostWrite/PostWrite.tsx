import {FC, useEffect, useRef, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';


import styles from './PostWrite.module.scss'
import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePost} from "../../../types/post.interface";
import {usePostsQuery} from "../../../react-query/usePostsQuery";
import {useAuth} from "../../../hooks/useAuth";
import {UploadOptions} from "../../UploadOptions/UploadOptions";

interface IPostProps {
  avatar?: string | undefined
}

export const PostWrite: FC<IPostProps> = ({avatar}) => {
  const {user} = useAuth()

  const [show, setShow] = useState(false)
  const inputOutRef = useRef(null)

  const {createPost} = usePostsQuery(user?.id)
  const {mutate} = createPost

  const onClickShow = () => {
    setShow(true)
  }

  const onClickHide = () => {
    setShow(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputOutRef.current && !event.composedPath().includes(inputOutRef.current)) {
        setShow(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.addEventListener('click', handleClickOutside)
    }
  }, [])

  const {register, handleSubmit, formState, reset} = useForm<ICreatePost>({mode: "onChange"})

  const onSubmit: SubmitHandler<ICreatePost> = async (data) => {
    await mutate(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div ref={inputOutRef} className={show ? `${styles.postWriteActive} ${styles.postWrite}` : styles.postWrite}>
        <div className={show ? `${styles.imgAndInputActive} ${styles.imgAndInput}` : styles.imgAndInput}>
          <div className={styles.profileImg}>
            <img src={avatar || defaultAvatar} alt=""/>
          </div>
          <div className={styles.inputField}>
            <TextareaAutosize
              {...register('text', {
                required: "Text is required",
                minLength: {
                  value: 1,
                  message: ''
                }
              })}
              onClick={onClickShow}
              placeholder="Что у вас нового?"
            />
          </div>
        </div>

        <UploadOptions inputOutRef={inputOutRef}
                       show={show}
        />

      </div>
    </form>
  );
};