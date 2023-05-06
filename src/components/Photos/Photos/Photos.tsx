import {FC} from 'react';
import styles from '../Photos.module.scss';
import {MyPhotosHeader} from "./MyPhotosHeader/MyPhotosHeader";
import {usePhotoQuery} from "../../../react-query/usePhotoQuery";
import {PhotoItem} from "../Album/Photos/PhotoItem/PhotoItem";

interface IPhotosProps {
}

export const Photos: FC<IPhotosProps> = () => {
  const {getMyPhotos} = usePhotoQuery()
  const {data: photos, isSuccess} = getMyPhotos
  return (
    <div className={styles.wrapper}>
      <MyPhotosHeader count={2}/>

      <div className={styles.main}>
        {isSuccess && photos.map(photo => {
          return <PhotoItem key={photo.id}
                            photo={photo!}
                            isMyPhoto={true}
          />
        })
        }
      </div>
    </div>
  );
};