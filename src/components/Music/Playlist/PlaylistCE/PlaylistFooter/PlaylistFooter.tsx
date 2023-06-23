import {FC} from 'react';
import styles from './PlaylistFooter.module.scss';
import {SubmitButton} from "../../../../SubmitButton/SubmitButton";
interface IPlaylistFooterProps {
}

export const PlaylistFooter: FC<IPlaylistFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <SubmitButton title={"Сохранить"} classes={styles.button}/>
    </footer>
  );
};