import {FC} from 'react';
import styles from './CreateAlbum.module.scss';
import {CreateAlbumHeader} from "./CreateAlbumHeader/CreateAlbumHeader";

interface ICreateAlbumProps {
  onClickClose: () => void
}

export const CreateAlbum: FC<ICreateAlbumProps> = ({onClickClose}) => {
  return (
    <div className={styles.wrapper}>
      <CreateAlbumHeader onClickClose={onClickClose}/>
      <div className={styles.main}>

      </div>
    </div>
  );
};