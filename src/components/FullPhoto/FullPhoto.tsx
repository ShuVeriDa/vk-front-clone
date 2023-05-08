import {FC, useState} from 'react';
import styles from './FullPhoto.module.scss';
import {IPhotoFull} from "../../types/photo.interface";
import {avatarUrl} from "../../utils/avatarUrl";
import {CommentsSvg, FavoritePostSVG, RepostPostSVG} from "../SvgComponent";
import {Input} from "../Input/Input";
import TextareaAutosize from "react-textarea-autosize";

interface IFullPhotoProps {
  slide: number
  photos: IPhotoFull[]
}

export const FullPhoto: FC<IFullPhotoProps> = ({slide, photos}) => {
  const photo = photos[slide]
  const fullName = photo.user.firstName + " " + photo.user.lastName
  const [isEditDescription, setEditDescription] = useState(false)

  const [isDescription, setDescription] = useState(false)
  return (

    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.imageItem}>
          <img src={avatarUrl(photo.photoUrl)} alt=""/>
        </div>
      </div>
      <div className={styles.leftSlide}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <img src={avatarUrl(photo.user.avatar)} alt=""/>
          </div>
          <div className={styles.info}>
            <span className={styles.name}>{fullName}</span>
            <span className={styles.created}>{photo.createdAt}</span>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.favoritesAndRepost}>
            <div className={styles.svg}>
              <FavoritePostSVG/>
              <RepostPostSVG/>
            </div>
          </div>
          <div className={styles.description}>
            {!isEditDescription
              ? <div className={styles.edit} onClick={() => setEditDescription(true)}>Редактировать описание</div>
              : <div className={styles.textareaField}>
                <TextareaAutosize
                  defaultValue={photo?.description!}
                  placeholder={'Введите описание'}
                />
              </div>
            }
          </div>
        </div>
        <div className={styles.comments}>
          <div className={styles.commentsList}>
            {true && <div className={styles.noComments}>
              <CommentsSvg/>
              <div className={styles.title}>Будье первым, кто оставит комментарий к этой фотографии</div>
            </div>}
          </div>
          <div className={styles.commentsWrite}>
            <div className={styles.commentUserAvatar}>
              <img src="" alt=""/>
            </div>
            <div className={styles.setDescription}>
              {!isDescription
                ? <div className={styles.edit} onClick={() => setDescription(true)}>Написать комментарий...</div>
                : <div className={styles.textareaField}>
                  <TextareaAutosize
                    defaultValue={photo?.description!}
                    placeholder={'Введите описание'}
                  />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};