import {FC} from 'react';
import styles from './FrAndCoNotFound.module.scss';
interface IFriendAndCommunityNotFoundProps {
  text?: string
}

export const FrAndCoNotFound: FC<IFriendAndCommunityNotFoundProps> = ({text}) => {
  return (
    <div className={styles.notFound}>
      <span className={styles.info}>
        {text
          ? <> По запросу <span className={styles.text}>{text}</span> не найдено ни одного друга.</>
          : <>Среди ваших сообществ совпадений не найдено.</>
        }

      </span>
    </div>
  );
};