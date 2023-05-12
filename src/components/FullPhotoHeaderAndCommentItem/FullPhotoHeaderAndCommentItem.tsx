import {FC, useState} from 'react';

import {avatarUrl} from "../../utils/avatarUrl";
import ReactTimeago from "react-timeago";
import {Link} from "react-router-dom";
import {ClearSearchValueSVG, EditSVG} from "../SvgComponent";
import {CommentEdit} from "../CommentEdit/CommentEdit";
import {ICommentsFull} from "../../types/comments.interface";
import cn from "clsx";
import {useCommentQuery} from "../../react-query/useCommentQuery";

interface IFullPhotoHeaderProps {
  avatar: string
  fullName: string
  createdAt: string
  isComment?: boolean
  comment?: ICommentsFull
  styles?: { readonly [key: string]: string }
  id?: string | number
}

export const FullPhotoHeaderAndCommentItem: FC<IFullPhotoHeaderProps> = (
  {
    fullName, avatar, createdAt, isComment,
    styles, id, comment
  }
) => {

  const {deleteComment} = useCommentQuery(comment?.id)
  const {mutate: remove} = deleteComment

  const [isEdit, setIsEdit] = useState(false)

  const onClickDelete = () => {
    setIsEdit(false)
    remove(comment?.id!)
  }

  return (
    <div className={styles?.wrapper}>
      <div className={cn(styles?.header, {
        [styles?.headerEdit!]: isEdit,
      })}>
        <div className={styles?.avatar}>
          <img src={avatarUrl(avatar)} alt=""/>
        </div>
        <div className={styles?.info}>
          <span className={styles?.name}> <Link to={`/profile/${id}`}>{fullName}</Link>
            {isComment && <div className={cn(styles?.editAndCancel, {
              [styles?.editAndCancelActive!]: isEdit,
            })}>
              {!isEdit && <EditSVG styles={styles?.edit} onClick={() => setIsEdit(true)}/>}
              <ClearSearchValueSVG styles={styles?.cancel} onClick={onClickDelete}/>
            </div>}</span>
          {isEdit && <><span className={styles?.editComment}>редактирование комментария</span> </>}

          {isComment
            ? <div className={styles?.commentItem}>
              {isEdit ? <CommentEdit comment={comment!}
                                     setIsEdit={setIsEdit}
                />
                : <> <span className={styles?.text}>{comment?.text}</span>
                  <span className={styles?.created}>
            <ReactTimeago date={createdAt}/></span>
                </>
              }
            </div>
            : <span className={styles?.created}><ReactTimeago date={createdAt}/></span>
          }
        </div>

      </div>
    </div>
  );
};