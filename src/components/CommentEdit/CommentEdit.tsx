import {ChangeEvent, FC, useState} from 'react';
import styles from './CommentEdit.module.scss';
import TextareaAutosize from "react-textarea-autosize";
import {ICommentsFull} from "../../types/comments.interface";
import {useCommentQuery} from "../../react-query/useCommentQuery";

interface ICommentEditProps {
  comment: ICommentsFull
  setIsEdit: (edit: boolean) => void
  authorizedUserId?: string | number
}

export const CommentEdit: FC<ICommentEditProps> = ({comment, authorizedUserId, setIsEdit}) => {
  const [value, setValue] = useState(comment?.text!)

  const {updateComment} = useCommentQuery(comment?.id )
  const {mutate: update} = updateComment


  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }
  const onClickSubmit = () => {
    update({text: value, photoId: comment.photo?.id})
    setIsEdit(false)
  }

  return (
      <div className={styles.editText}>
        <TextareaAutosize className={styles.textArea}
                          value={value}
                          onChange={onChangeValue}
        />
        <div className={styles.btnDiv}>
          <button className={styles.btn}>Отмена</button>
          <button
                  className={`${styles.btn} ${styles.btnSave}`} onClick={onClickSubmit}
          >
            Сохранить
          </button>
        </div>
      </div>
  );
};