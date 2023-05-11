import {ChangeEvent, FC, useState} from 'react';
import styles from './CommentEdit.module.scss';
import TextareaAutosize from "react-textarea-autosize";

import {SubmitHandler, useForm} from "react-hook-form";
import {ICommentsFull, IUpdateComment} from "../../types/comments.interface";
import {useCommentQuery} from "../../react-query/useCommentQuery";

interface ICommentEditProps {
  comment: ICommentsFull
  setIsEdit: (edit: boolean) => void
  authorizedUserId?: string | number
}

export const CommentEdit: FC<ICommentEditProps> = ({comment, authorizedUserId, setIsEdit}) => {
  const [value, setValue] = useState(comment?.text)

  const {updateComment} = useCommentQuery(comment?.id )
  const {mutate: update} = updateComment

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }

  const {register, handleSubmit, formState, reset} = useForm<IUpdateComment>({mode: "onChange"})

  const onSubmit: SubmitHandler<IUpdateComment> = async (data) => {

    await update({text: value, photoId: comment.photo?.id})
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