import {FC, useState} from 'react';
import styles from './FullPhoto.module.scss';
import stylesPhotoHeader from '../FullPhotoHeaderAndCommentItem/FullPhotoHeader.module.scss';

import {IPhotoFull} from "../../types/photo.interface";
import {useCommentQuery} from "../../react-query/useCommentQuery";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreateComment} from "../../types/comments.interface";
import {FullPhotoImage} from "./FullPhotoImage/FullPhotoImage";
import {FullPhotoHeaderAndCommentItem} from "../FullPhotoHeaderAndCommentItem/FullPhotoHeaderAndCommentItem";
import {FullPhotoComments} from "./FullPhotoLeftSide/FullPhotoComments/FullPhotoComments";
import {FullPhotoMain} from "./FullPhotoLeftSide/FullPhotoMain/FullPhotoMain";
import {FullPhotoButtons} from "./FullPhotoLeftSide/FullPhotoButtons/FullPhotoButtons";

interface IFullPhotoProps {
  current: number
  // photos: IPhotoFull[]
  photo: IPhotoFull
  prevSlide: () => void
  nextSlide: () => void
}

export const FullPhoto: FC<IFullPhotoProps> = ({current, photo,
                                               prevSlide, nextSlide, }) => {
  const [isCreateComment, setCreateComment] = useState(false)

  // const photo = photos[current]
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
      <FullPhotoImage photoUrl={photo.photoUrl}
                      current={current}
                      prevSlide={prevSlide}
                      nextSlide={nextSlide}
      />
      <div className={styles.leftSlide}>
        <FullPhotoHeaderAndCommentItem fullName={fullName}
                                       avatar={photo.user.avatar}
                                       createdAt={photo.createdAt}
                                       styles={stylesPhotoHeader}
                                       id={photo.user.id}

        />
        <FullPhotoMain description={photo.description!}
                       photoId={photo.id}
                       photoFavoriteAdders={photo.photoFavoriteAdders}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FullPhotoComments register={register}
                             isCreateComment={isCreateComment}
                             comments={comments!}
                             isSuccess={isSuccess}
                             setCreateComment={setCreateComment}
                             description={photo.description!}
          />
          <FullPhotoButtons isCreateComment={isCreateComment}
                            setCreateComment={setCreateComment}
          />
        </form>
      </div>
    </div>
  );
};