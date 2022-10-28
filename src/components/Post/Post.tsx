import {FC, useState} from 'react';

import styles from './Post.module.scss'
import defaultAvatar from './../../assets/defaultAvatar.png'
import {Link, NavLink} from "react-router-dom";

const crudList = ['Удалить запись', "Редактировать", "Выключить комментарий"]

interface PostPropsType {
}

export const Post: FC<PostPropsType> = () => {

  const [show, setShow] = useState(false)

  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={defaultAvatar} alt=""/>
        </div>
        <div className={styles.nameAndDate}>
          <span className={styles.name}>
             <Link to={'/'}>Biltoyn SaIid-Muhammad</Link>
          </span>
          <span className={styles.date}>
            <Link to={'/'}>28 октябрь 2022 в 18:07</Link>
          </span>
        </div>
        <div className={styles.crudComponent}>
              <div className={styles.svgComponent} >
                <svg onClick={() => setShow(true)} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="more_horizontal_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="more_horizontal_24__more_horizontal_24">
                      <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path>
                      <path
                        d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z"
                        id="more_horizontal_24__Mask" fill="#AEB7C2">
                      </path>
                    </g>
                  </g>
                </svg>
              </div>


          {show && <div className={styles.crud}>
              <ul>
                {crudList.map((list, i) => <li key={i}>
                  {list}
                </li>)}
              </ul>
          </div>}


        </div>
      </div>
      <div>
        POST
      </div>
      <div>
        like, comment, share, views
      </div>
    </div>
  );
};