import {FC, useEffect, useRef, useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';


import styles from './PostWrite.module.scss'
import defaultAvatar from '../../../assets/defaultAvatar.png'
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreatePost} from "../../../types/post.interface";
import {usePostsQuery} from "../../../react-query/usePostsQuery";
import {useAuth} from "../../../hooks/useAuth";

interface IPostProps {
  avatar?: string | undefined
}

const buttons = [
  {
    svg: <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd"
            d="M5.5 5.5c.57 0 1-.2 1.34-.52.24-.24.43-.54.55-.74l.06-.1c.15-.23.26-.37.39-.47.11-.08.3-.17.66-.17h3c.36 0 .55.09.66.17.13.1.24.24.4.48l.05.09c.12.2.3.5.55.74.33.32.77.52 1.34.52.73 0 .99 0 1.19.04.9.18 1.59.88 1.77 1.77.04.2.04.46.04 1.19v3.45c0 .85 0 1.45-.04 1.9-.04.46-.1.72-.2.92-.22.42-.57.77-.99.98-.2.1-.46.17-.91.21-.46.04-1.06.04-1.91.04h-6.9c-.85 0-1.45 0-1.91-.04a2.4 2.4 0 0 1-.91-.2 2.25 2.25 0 0 1-.99-.99 2.4 2.4 0 0 1-.2-.91c-.04-.46-.04-1.06-.04-1.91V8.5c0-.73 0-.99.04-1.19.18-.9.88-1.59 1.77-1.77.2-.04.46-.04 1.19-.04zm3-3.5c-.64 0-1.14.16-1.54.46-.39.27-.62.63-.78.9l-.08.11c-.13.22-.2.34-.3.43-.06.05-.12.1-.3.1h-.09c-.61 0-1.03 0-1.4.07a3.75 3.75 0 0 0-2.94 2.95C1 7.38 1 7.8 1 8.42v3.56c0 .81 0 1.47.04 2 .05.55.14 1.03.37 1.47.36.7.93 1.28 1.64 1.64.44.23.92.32 1.47.37.53.04 1.18.04 2 .04H13.48c.81 0 1.47 0 2-.04a3.84 3.84 0 0 0 1.47-.37c.7-.36 1.28-.93 1.64-1.64.23-.44.32-.92.37-1.47.04-.53.04-1.19.04-2V8.41c0-.61 0-1.03-.07-1.4a3.75 3.75 0 0 0-2.95-2.94 7.5 7.5 0 0 0-1.4-.07h-.08c-.18 0-.24-.05-.3-.1-.1-.1-.17-.2-.3-.43l-.08-.12c-.16-.26-.4-.62-.78-.9-.4-.29-.9-.45-1.54-.45zm3.75 8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"
            fill="currentColor" fillRule="evenodd"></path>
    </svg>,
    type: 'image/*',
  },
  {
    svg: <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd"
            d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-8.5-7a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0zm8.65 3.38 2.7-1.56a2.1 2.1 0 0 0 0-3.64l-2.7-1.56A2.1 2.1 0 0 0 7 8.44v3.12a2.1 2.1 0 0 0 3.15 1.82zm1.95-3.9c.4.23.4.8 0 1.04l-2.7 1.56a.6.6 0 0 1-.9-.52V8.44c0-.46.5-.75.9-.52z"
            fill="currentColor" fillRule="evenodd"></path>
    </svg>,
    type: 'video/*',
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <g id="music_outline_20__Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="music_outline_20__Icons-20/music_outline_20">
          <g id="music_outline_20__music_outline_20">
            <path d="M0 0h20v20H0z"></path>
            <path
              d="M14.73 2.05a2.28 2.28 0 0 1 2.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54ZM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37Zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37Zm-.02-7.78a.78.78 0 0 0-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 0 0-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67V4.2Z"
              id="music_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"></path>
          </g>
        </g>
      </g>
    </svg>,
    type: 'audio/*',
  },
  {
    svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd"
            d="M10.18 1.5H9c-.8 0-1.47 0-2.01.05-.63.05-1.17.16-1.67.41a4.25 4.25 0 0 0-1.86 1.86c-.25.5-.36 1.04-.41 1.67C3 6.1 3 6.86 3 7.82v4.36c0 .95 0 1.71.05 2.33.05.63.16 1.17.41 1.67a4.25 4.25 0 0 0 1.86 1.86c.5.25 1.04.36 1.67.4.61.06 1.37.06 2.33.06h1.36c.96 0 1.72 0 2.33-.05a4.39 4.39 0 0 0 1.67-.41 4.25 4.25 0 0 0 1.86-1.86c.25-.5.36-1.04.41-1.67.05-.62.05-1.38.05-2.33V8.32c0-.48 0-.73-.06-.96-.05-.2-.13-.4-.24-.58-.12-.2-.3-.37-.64-.72l-3.62-3.62a4.27 4.27 0 0 0-.72-.65 2 2 0 0 0-.58-.24c-.23-.05-.48-.05-.96-.05Zm5.32 10.65c0 1 0 1.7-.04 2.24a2.9 2.9 0 0 1-.26 1.1A2.75 2.75 0 0 1 14 16.7c-.25.13-.57.21-1.11.26-.55.04-1.25.04-2.24.04h-1.3c-1 0-1.7 0-2.24-.04a2.9 2.9 0 0 1-1.1-.26 2.75 2.75 0 0 1-1.21-1.2 2.94 2.94 0 0 1-.26-1.11c-.04-.55-.04-1.25-.04-2.24v-4.3c0-1 0-1.7.04-2.24.05-.53.13-.86.26-1.1A2.75 2.75 0 0 1 6 3.3c.25-.13.57-.21 1.11-.26C7.66 3 8.36 3 9.35 3H10v2.35c0 .4 0 .76.02 1.05.03.3.09.61.24.9.21.4.54.73.94.94.29.15.6.21.9.24.29.02.64.02 1.05.02h2.35v3.65ZM14.88 7 11.5 3.62v1.7c0 .45 0 .74.02.95.02.22.05.3.07.33a.75.75 0 0 0 .3.31c.05.02.12.05.33.07.22.02.51.02.96.02h1.7Z"
            clipRule="evenodd"></path>
    </svg>,
    type: ''
  }
]

export const PostWrite: FC<IPostProps> = ({avatar}) => {
  const {user} = useAuth()

  const [show, setShow] = useState(false)
  const inputFileRef = useRef<HTMLInputElement>(null)
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

        <div className={show ? `${styles.buttonComponentActive} ${styles.buttonComponent} ` : styles.buttonComponent}>
          <div ref={inputOutRef}
               className={show ? `${styles.fileInputsActive} ${styles.fileInputs}` : styles.fileInputs}>
            {buttons.map((obj, i) => <div key={i}>
              <button className={styles.btn} onClick={() => inputFileRef.current?.click()}>{obj.svg}</button>
              <input ref={inputFileRef} type="file" accept={obj.type} hidden/>
            </div>)}

            <button className={styles.btn}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.25 14.5c.42 0 .75.34.75.75v.1a.75.75 0 0 1-.75.65H4.75a.75.75 0 1 1 0-1.5h12.5Zm0-5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75v-.1a.75.75 0 0 1 .75-.65h8.5Zm-9-6.5c.4 0 .75.34.75.75v.1a.75.75 0 0 1-.75.65h-2.5v5.75a.75.75 0 0 1-1.5 0V4.5h-2.5a.76.76 0 0 1-.74-.65L1 3.75c0-.42.34-.75.75-.75h6.5Zm9 1.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75v-.1a.75.75 0 0 1 .75-.65h5.5Z"
                  fill="currentColor"></path>
              </svg>
            </button>
          </div>
          {show && <button className={styles.btnSubmit}>Опубликовать</button>}

        </div>

      </div>
    </form>
  );
};