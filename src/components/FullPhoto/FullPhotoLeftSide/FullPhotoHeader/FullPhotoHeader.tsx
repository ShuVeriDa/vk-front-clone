import {FC, useState} from 'react';

import {avatarUrl} from "../../../../utils/avatarUrl";
import ReactTimeago from "react-timeago";
import {Link} from "react-router-dom";
import {ClearSearchValueSVG, EditSVG} from "../../../SvgComponent";
import {CommentEdit} from "../../../CommentEdit/CommentEdit";
import {ICommentsFull} from "../../../../types/comments.interface";
import cn from "clsx";
import styles from "../FullPhotoComments/FullPhotoComments.module.scss";

interface IFullPhotoHeaderProps {
  avatar: string
  fullName: string
  createdAt: string
  isComment?: boolean
  comment?: ICommentsFull
  styles?: { readonly [key: string]: string }
  id?: string | number
}

export const FullPhotoHeader: FC<IFullPhotoHeaderProps> = (
  {
    fullName, avatar, createdAt, isComment,
    styles, id, comment
  }
) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className={styles?.wrapper}>
      <div className={cn(styles?.header, {
        [styles?.headerEdit!]: isEdit,
      })}>
        <div className={styles?.avatar}>
          <img src={avatarUrl(avatar)} alt=""/>
        </div>
        <div className={styles?.info}>
          <span className={styles?.name}><Link to={`/profile/${id}`}>{fullName}</Link></span>
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
        {isComment && <div className={cn(styles?.editAndCancel, {
          [styles?.editAndCancelActive!]: isEdit,
        })}>
          {!isEdit && <EditSVG styles={styles?.edit} onClick={() => setIsEdit(true)}/>}
          <ClearSearchValueSVG styles={styles?.cancel}/>
        </div>}
      </div>

    </div>

  );
};