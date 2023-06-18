import {FC, useState} from 'react';
import styles from '../Photos.module.scss';
import {MyPhotosHeader} from "./MyPhotosHeader/MyPhotosHeader";
import {usePhotoQuery} from "../../../react-query/usePhotoQuery";
import {PhotoItem} from "../Album/Photos/PhotoItem/PhotoItem";
import {serverUrl} from "../../../utils/serverUrl";
import {FullPhoto} from "../../FullPhoto/FullPhoto";
import {ModalWindow} from "../../ModalWindow/ModalWindow";
import {ClearSearchValueSVG} from "../../SvgComponent";

interface IPhotosProps {
}

export const Photos: FC<IPhotosProps> = () => {
  const [visible, setVisible] = useState(false)

  const [toggler, setToggler] = useState(false);

  const {getMyPhotos} = usePhotoQuery()
  const {data: photos, isSuccess} = getMyPhotos

  //////////////
  const [current, setCurrent] = useState(1)
  const length = photos?.length;
  if (!Array.isArray(photos) || photos?.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length! - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length! - 1 : current - 1);
  };
/////////////////


  const imagesUrl = photos?.map(photo => {
    return photo.photoUrl
  })

  const images2 = imagesUrl?.map(image => {
    const url = serverUrl(image)
    return url
  })

  const onChangeToggler = (slide: number) => {
    setCurrent(slide)
    setToggler(!toggler)
  }

  return (
    <div className={styles.wrapper}>
      <MyPhotosHeader count={photos.length}/>
      <div className={styles.main}>
        {visible
          ? <>
            <ModalWindow onClickClose={() => setVisible(false)}
                         open={visible}
            >
              {photos.map((slide, index) => {
                return (
                  <div key={slide.id}>
                    {index === current && <FullPhoto current={current}
                                                     photo={slide}
                      // photos={photos!}
                                                     nextSlide={nextSlide}
                                                     prevSlide={prevSlide}

                    />}
                  </div>
                )
              })}

              {/*<FullPhoto current={current}*/}
              {/*           photos={photos!}*/}
              {/*           nextSlide={nextSlide}*/}
              {/*           prevSlide={prevSlide}*/}
              {/*/>*/}

              <div className={styles.svg}>
                <ClearSearchValueSVG styles={styles.close}
                                     width={'30'}
                                     height={'30'}
                                     onClick={() => setVisible(false)}
                />
              </div>
            </ModalWindow>

          </>
          : <>
            {isSuccess && photos.map((photo, i) => {
              return <PhotoItem key={photo.id}
                                index={i}
                                photo={photo!}
                                isMyPhoto={true}
                                setToggler={onChangeToggler}
                                setVisible={setVisible}
                                visible={visible}
              />
            })
            }
          </>
        }
      </div>
    </div>
  );
};