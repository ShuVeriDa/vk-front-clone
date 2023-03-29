import {FC, MutableRefObject} from 'react';
import styles from "../Post.module.scss";
import {ShowPostMenuSVG} from "../../SvgComponent";
import {usePostsQuery} from "../../../react-query/usePostsQuery";
import {useAuth} from "../../../hooks/useAuth";

const crudList = ['Удалить запись', "Редактировать", "Выключить комментарий"]

interface IPostMenuProps {
  refOut:  MutableRefObject<null>
  show: boolean
  setShow: () => void
  postId: string
}

export const PostMenu: FC<IPostMenuProps> = ({refOut, show, setShow, postId}) => {
  const {user} = useAuth()
  const {deletePost} = usePostsQuery(user?.id)
  const {mutate: remove} = deletePost

  const onDeleteClick = () => {
    remove(postId)
  }

  const currentElem = (elem: number) => {
    if(elem === 0) {
      onDeleteClick()
    }
  }

  return (
    <div ref={refOut} className={styles.crudComponent}>
      <div className={styles.svgComponent}>
        <ShowPostMenuSVG onClick={setShow}/>
      </div>
      <div className={`${styles.crud} ${show ? styles.show : ''}`}>
        <ul>
          {crudList.map((list, i) => <li key={i} onClick={() => currentElem(i)}>
            {list}
          </li>)}
        </ul>
      </div>
    </div>
  );
};