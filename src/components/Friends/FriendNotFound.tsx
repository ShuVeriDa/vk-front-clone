import {FC} from 'react';
import styles from '../../pages/Friends/Friends.module.scss';
interface IFriendNotFoundProps {
  text: string
}

export const FriendNotFound: FC<IFriendNotFoundProps> = ({text}) => {
  return (
    <div className={styles.notFound}>
      <span className={styles.info}>
        По запросу <span className={styles.text}>{text}</span> не найдено ни одного друга.
      </span>
    </div>
  );
};