import {FC} from 'react';
import styles from './CreateAlbumFooter.module.scss';
import {SubmitButton} from "../../../../SubmitButton/SubmitButton";
interface ICreateAlbumFooterProps {
}

export const CreateAlbumFooter: FC<ICreateAlbumFooterProps> = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.btn}>
        <SubmitButton classes={styles.cancel}
                      title={'Отмена'}
        />
        <SubmitButton classes={styles.create}
                      title={'Создать альбом'}
        />
      </div>
    </div>
  );
};