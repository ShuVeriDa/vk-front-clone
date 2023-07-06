import {FC, MutableRefObject, RefObject, useRef} from 'react';
import styles from './PlaylistCECover.module.scss';
interface IPlaylistCoverProps {
}

export const PlaylistCECover: FC<IPlaylistCoverProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className={styles.cover} onClick={() => inputRef.current?.click()}>
      <span className={styles.plus}>+</span>
      <span className={styles.title}>Обложка</span>
      <input type="file"
             name={'cover'}
             accept='image/png, image/jpeg'
             ref={inputRef}
             hidden
      />
    </div>
  );
};