import {FC} from 'react';
import styles from './FullPhotoImage.module.scss';
import {avatarUrl} from "../../../utils/avatarUrl";
import {LeftArrow, RightArrow} from "../../SvgComponent";
import cn from "clsx";

interface IFullPhotoImageProps {
  photoUrl: string
  current: number
  prevSlide: () => void
  nextSlide: () => void
}

export const FullPhotoImage: FC<IFullPhotoImageProps> = ({photoUrl, nextSlide, prevSlide}) => {
  return (<>
      <div className={cn(styles.arrow, styles.leftArrow)}>
        <LeftArrow onClick={prevSlide} styles={styles.svg}/>
      </div>

      <div className={cn(styles.arrow, styles.rightArrow)}>
        <RightArrow onClick={nextSlide} styles={styles.svg}/>
      </div>

      <div className={styles.image}>
        <div className={styles.imageItem}>
          <img src={avatarUrl(photoUrl)} alt={avatarUrl(photoUrl)}/>
        </div>
      </div>
    </>
  );
};