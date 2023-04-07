import {FC} from 'react';
import styles from './FriendsAndCommunitiesHeader.module.scss';
import {Link} from "react-router-dom";
interface IFriendsAndCommunitiesHeaderProps {
  firstText: string
  secondText: string
  thirdText: string
  url: string
  itemsLength: number | boolean
  flag?: boolean
}

export const FriendsAndCommunitiesHeader: FC<IFriendsAndCommunitiesHeaderProps> = ({ itemsLength, firstText, secondText, thirdText, url, flag }) => {
  return (
    <div className={styles.header}>
      <ul>
        <li className={styles.active}>
          <span>{firstText} <span className={styles.friendsLength}>{itemsLength}</span></span>
        </li>
        <li><div>
          {secondText}
        </div>

        </li>
        <li style={flag ? {left: "164px"} : {left: '102px'}}>
          <Link to={url}>{thirdText}</Link>
        </li>
      </ul>
    </div>
  );
};