import {FC, useState} from 'react';
import styles from '../Photos.module.scss';
import {MyPhotosHeader} from "./MyPhotosHeader/MyPhotosHeader";
import {usePhotoQuery} from "../../../react-query/usePhotoQuery";
import {PhotoItem} from "../Album/Photos/PhotoItem/PhotoItem";
import {avatarUrl} from "../../../utils/avatarUrl";
import FsLightbox from "fslightbox-react";
import {FullPhoto} from "../../FullPhoto/FullPhoto";
import {ModalWindow} from "../../ModalWindow/ModalWindow";
import {CreateAlbum} from "../Album/CreateAlbum/CreateAlbum";

interface IPhotosProps {
}

export const Photos: FC<IPhotosProps> = () => {

  const {getMyPhotos} = usePhotoQuery()
  const {data: photos, isSuccess} = getMyPhotos
  const [slide, setSlide] = useState(1)
  const [toggler, setToggler] = useState(false);


  const imagesUrl = photos?.map(photo => {
    return photo.photoUrl
  })


  const images2 = imagesUrl?.map(image => {
    const url = avatarUrl(image)
    return url
  })

  const onChangeToggler = (slide: number) => {
    setSlide(slide)
    setToggler(!toggler)
  }

  const [open, setOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <MyPhotosHeader count={2}/>


      <div className={styles.main}>
        {/*{ photos && photos.map((photo, i) => {*/}
        {/*  const images = avatarUrl(photo.photoUrl)*/}
        {/*  return <FsLightbox toggler={toggler} sources={[photo.photoUrl]}/>}*/}
        {/*)}*/}
        {open
          ? <>
            <button onClick={() => setOpen(!open)}>button</button>
            <ModalWindow onClickClose={() => setOpen(false)} open={open}>
              <FullPhoto slide={slide} photos={photos!}/>
            </ModalWindow>

          </>
          : <>
            <button onClick={() => setOpen(!open)}>button</button>
            {isSuccess && photos.map((photo, i) => {
              return <PhotoItem key={photo.id}
                                index={i}
                                photo={photo!}
                                isMyPhoto={true}
                                setToggler={onChangeToggler}
              />
            })
            }

          </>
        }


      </div>
    </div>
  );
};