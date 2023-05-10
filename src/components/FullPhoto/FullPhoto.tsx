import {FC, RefObject, useRef, useState} from 'react';
import styles from './FullPhoto.module.scss';
import {IPhotoFull} from "../../types/photo.interface";
import {avatarUrl} from "../../utils/avatarUrl";
import {CommentsSvg, FavoritePostSVG, RepostPostSVG} from "../SvgComponent";
import {Input} from "../Input/Input";
import TextareaAutosize from "react-textarea-autosize";
import cn from "clsx";
import {SubmitButton} from "../SubmitButton/SubmitButton";
import {useCommentQuery} from "../../react-query/useCommentQuery";
import {SubmitHandler, useForm} from "react-hook-form";
import {IUpdatePhotoAlbum} from "../../types/photoAlbum.interface";
import {ICreateComment} from "../../types/comments.interface";
import {FullPhotoImage} from "./FullPhotoImage/FullPhotoImage";
import {FullPhotoHeader} from "./FullPhotoLeftSide/FullPhotoHeader/FullPhotoHeader";
import {FullPhotoFavoritesAndRepost} from "./FullPhotoLeftSide/FullPhotoFavoritesAndRepost/FullPhotoFavoritesAndRepost";
import {FullPhotoDescription} from "./FullPhotoLeftSide/FullPhotoDescription/FullPhotoDescription";
import {FullPhotoComments} from "./FullPhotoLeftSide/FullPhotoComments/FullPhotoComments";
import {FullPhotoMain} from "./FullPhotoLeftSide/FullPhotoMain/FullPhotoMain";
import {FullPhotoButtons} from "./FullPhotoLeftSide/FullPhotoButtons/FullPhotoButtons";

interface IFullPhotoProps {
  slide: number
  photos: IPhotoFull[]
}

export const FullPhoto: FC<IFullPhotoProps> = ({slide, photos}) => {
  const [isCreateComment, setCreateComment] = useState(false)

  const photo = photos[slide]
  const fullName = photo.user.firstName + " " + photo.user.lastName


  const {createComment, getPhotoComments} = useCommentQuery(undefined, undefined, photo.id)
  const {data: comments, isSuccess} = getPhotoComments
  const {mutate: create} = createComment



  const {register, handleSubmit, formState, reset} = useForm<ICreateComment>({mode: "onChange"})

  const onSubmit: SubmitHandler<ICreateComment> = async (data) => {
    create({
      text: data.text, photoId: photo.id
    })
    reset()
  }

  return (
    <div className={styles.wrapper}>
      <FullPhotoImage photoUrl={photo.photoUrl}/>
      <div className={styles.leftSlide}>
        <FullPhotoHeader fullName={fullName} avatar={photo.user.avatar} createdAt={photo.createdAt}/>
        <FullPhotoMain description={photo.description!} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FullPhotoComments register={register}
                             isCreateComment={isCreateComment}
                             comments={comments!}
                             isSuccess={isSuccess}
                             setCreateComment={setCreateComment}
                             description={photo.description!}
                             />
          <FullPhotoButtons isCreateComment={isCreateComment} />
        </form>
      </div>
    </div>
  );
};