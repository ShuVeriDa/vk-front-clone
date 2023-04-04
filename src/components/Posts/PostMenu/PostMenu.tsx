import {FC, MutableRefObject} from 'react';
import styles from "../PostItem/PostItem.module.scss";
import {ShowPostMenuSVG} from "../../SvgComponent";
import {usePostsQuery} from "../../../react-query/usePostsQuery";
import {useAuth} from "../../../hooks/useAuth";

const crudList = ['Удалить запись', "Редактировать", "Выключить комментарий"]

interface IPostMenuProps {
  refOut:  MutableRefObject<null>
  show: boolean
  setShow: () => void
  postId: string
  setIsEdit: (edit: boolean) => void
  isEdit: boolean
}

export const PostMenu: FC<IPostMenuProps> = ({refOut, show, setShow, postId, setIsEdit, isEdit}) => {
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

    if(elem === 1) {
      setIsEdit(!isEdit)
      setShow()
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