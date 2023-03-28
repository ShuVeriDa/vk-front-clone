import {FC, MutableRefObject} from 'react';
import styles from "../Post.module.scss";
import {ShowPostMenuSVG} from "../../SvgComponent";

const crudList = ['Удалить запись', "Редактировать", "Выключить комментарий"]

interface IPostMenuProps {
  refOut:  MutableRefObject<null>
  show: boolean
  setShow: () => void
}

export const PostMenu: FC<IPostMenuProps> = ({refOut, show, setShow}) => {
  return (
    <div ref={refOut} className={styles.crudComponent}>
      <div className={styles.svgComponent}>
        <ShowPostMenuSVG onClick={setShow}/>
      </div>
      <div className={`${styles.crud} ${show ? styles.show : ''}`}>
        <ul>
          {crudList.map((list, i) => <li key={i}>
            {list}
          </li>)}
        </ul>
      </div>
    </div>
  );
};