import {FC} from 'react';
import styles from '../../pages/Community/Community.module.scss';
interface ICommunityNotFoundNotFoundProps {
  text?: string
}

export const CommunityNotFound: FC<ICommunityNotFoundNotFoundProps> = ({text}) => {
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