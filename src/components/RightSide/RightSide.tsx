import {FC} from 'react';

import styles from './RightSide.module.scss'
import {Link, NavLink} from "react-router-dom";

interface RightSidePropsType {
}

const lists = [{
  title: 'Новости',
  svgShow: <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M7.5 7.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5.11 6A2.5 2.5 0 0 1 9.9 6h6.36a.75.75 0 0 1 0 1.5H9.89a2.5 2.5 0 0 1-4.78 0H3.75a.75.75 0 0 1 0-1.5zm7.39 8.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2.39-1.75a2.5 2.5 0 0 0-4.78 0H3.75a.75.75 0 0 0 0 1.5h6.36a2.5 2.5 0 0 0 4.78 0h1.36a.75.75 0 0 0 0-1.5z" fill="currentColor" fillRule="evenodd"></path></svg>,
  svgAdd: <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M10 2c.41 0 .75.34.75.75v6.5h6.5a.75.75 0 0 1 0 1.5h-6.5v6.5a.75.75 0 0 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5c0-.41.34-.75.75-.75z" fill="currentColor" fillRule="evenodd"></path></svg>,
}, {title: "Рекомендации"}, {title: "Поиск"}, {title: "Реакции"}, {title: "Обновления"}, {title: "Комментарии"}]

export const RightSide: FC<RightSidePropsType> = () => {
  return (
    <div className={styles.rightSide}>
      <ul>
        {lists.map((list, i) => <li key={i}>
          <NavLink to={"/"} className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            {
              <><span>{list.title}</span> <span>{list.svgShow} {list.svgAdd}</span></>
            }
          </NavLink>
        </li>)}
      </ul>

    </div>
  );
};