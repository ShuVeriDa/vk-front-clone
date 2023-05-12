import {FC, useEffect, useRef} from 'react';
import styles from './FullPhotoComments.module.scss';
import stylesCommentItem from '../../../FullPhotoHeaderAndCommentItem/FullPhotoCommentItem.module.scss';
import {CommentsSvg} from "../../../SvgComponent";
import cn from "clsx";
import TextareaAutosize from "react-textarea-autosize";
import {ICommentsFull, ICreateComment} from "../../../../types/comments.interface";
import {UseFormRegister} from "react-hook-form";
import {FullPhotoHeaderAndCommentItem} from "../../../FullPhotoHeaderAndCommentItem/FullPhotoHeaderAndCommentItem";
import {useAuth} from "../../../../hooks/useAuth";
import {avatarUrl} from "../../../../utils/avatarUrl";

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
  const {user} = useAuth()

  return (
    <div className={styles.comments} >
      <div className={styles.commentsList}
           style={isCreateComment ? {minHeight: '600px'} : {}}
      >
        <div className={styles.noCommentsWrapper}>
          {!comments?.length && <div className={styles.noComments}>
            <CommentsSvg/>
            <div className={styles.title}>Будье первым, кто оставит комментарий к этой фотографии</div>
          </div>}
        </div>
        {
          comments?.length > 0 && <div className={styles.commentItem}>
            {isSuccess && comments.map(comment => {
                const fullName = comment.user.firstName + ' ' + comment.user.lastName
                return <FullPhotoHeaderAndCommentItem key={comment.id}
                                                      id={user?.id}
                                                      fullName={fullName}
                                                      comment={comment}
                                                      createdAt={comment.createdAt}
                                                      avatar={comment.user?.avatar!}
                                                      isComment={true}
                                                      styles={stylesCommentItem}
                />
              }
            )}
          </div>
        }


      </div>
      <div className={cn(styles.commentsWrite, {
        [styles.commentsWriteEditing]: isCreateComment,
      })}>
        <div className={styles.commentUserAvatar}>
          <img src={avatarUrl(user?.avatar!)} alt=""/>
        </div>
        <div className={cn(styles.setComment)}>
          {!isCreateComment
            ? <div className={styles.edit} onClick={() => setCreateComment(true)}>Написать комментарий...</div>
            : <>
              <div className={cn(styles.textareaField)}
              >
                <TextareaAutosize {...register('text')}
                                  defaultValue={description}
                />
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};