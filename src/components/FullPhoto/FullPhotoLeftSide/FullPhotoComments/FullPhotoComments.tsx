import {FC} from 'react';
import styles from './FullPhotoComments.module.scss';
import {CommentsSvg} from "../../../SvgComponent";
import cn from "clsx";
import TextareaAutosize from "react-textarea-autosize";
import {ICommentsFull, ICreateComment} from "../../../../types/comments.interface";
import {UseFormRegister} from "react-hook-form";

interface IFullPhotoCommentsProps {
  register: UseFormRegister<ICreateComment>
  isCreateComment: boolean
  comments: ICommentsFull[]
  isSuccess: boolean
  setCreateComment: (isCreateComment: boolean) => void
  description: string
}

export const FullPhotoComments: FC<IFullPhotoCommentsProps> = (
  {isCreateComment, comments, isSuccess, setCreateComment, description, register}
) => {
  return (
    <div className={styles.comments}>
      <div className={styles.commentsList} style={isCreateComment ? {minHeight: '600px'} : {}}>
        {!comments?.length && <div className={styles.noComments}>
          <CommentsSvg/>
          <div className={styles.title}>Будье первым, кто оставит комментарий к этой фотографии</div>
        </div>}
        <ul>
          {isSuccess && comments.map(comment => <li key={comment.id}>
            {comment.text}
          </li>)}
        </ul>

      </div>
      <div className={cn(styles.commentsWrite, {
        [styles.commentsWriteEditing]: isCreateComment,
      })}>
        <div className={styles.commentUserAvatar}>
          <img src="" alt=""/>
        </div>
        <div className={cn(styles.setComment)}>
          {!isCreateComment
            ? <div className={styles.edit} onClick={() => setCreateComment(true)}>Написать комментарий...</div>
            : <>
              <div className={cn(styles.textareaField)}
              >
                <TextareaAutosize {...register('text')}
                                  defaultValue={description}
                                  placeholder={'Введите описание'}
                />
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};