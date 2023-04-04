import {ChangeEvent, FC, useState} from 'react';
import styles from "../PostItem/PostItem.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import {IPost, IUpdatePost} from "../../../types/post.interface";
import {usePostsQuery} from "../../../react-query/usePostsQuery";
import {SubmitHandler, useForm} from "react-hook-form";

interface IPostUpdateProps {
  post: IPost
  authorizedUserId: string | number
  setIsEdit: (edit: boolean) => void
}

export const PostUpdate: FC<IPostUpdateProps> = ({post, authorizedUserId, setIsEdit}) => {
  const [value, setValue] = useState(post.text)

  const {updatePost} = usePostsQuery(authorizedUserId, post.id)
  const {mutateAsync: update} = updatePost

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }

  const {register, handleSubmit, formState, reset} = useForm<IUpdatePost>({mode: "onChange"})

  const onSubmit: SubmitHandler<IUpdatePost> = async (data) => {
    console.log(data)
    await update({...data, text: value})
    setIsEdit(false)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.editText}>
        <TextareaAutosize {...register('text', {
          required: 'Text is required',
          minLength: {
            value: 1,
            message: '',
          },
        })}
                          className={styles.textArea}
                          value={value}
                          onChange={onChangeValue}
        />
        <div className={styles.btnDiv}>
          <button className={styles.btn} onClick={() => setIsEdit(false)}>Отмена</button>
          <button type="submit"
                  className={`${styles.btn} ${styles.btnSave}`}
          >
            Сохранить
          </button>
        </div>

      </div>
    </form>
  );
};