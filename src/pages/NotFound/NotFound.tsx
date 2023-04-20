import {FC} from 'react';
import styles from './NotFound.module.scss';

interface INotFoundProps {
}

export const NotFound: FC<INotFoundProps> = () => {
  return (
    <div className={styles.notFound}>
      <a href={'/'}></a>
    </div>
  );
};