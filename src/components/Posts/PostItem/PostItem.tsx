import {FC, useEffect, useRef, useState} from 'react';

import styles from './PostItem.module.scss'
import defaultAvatar from '../../../assets/defaultAvatar.png'
import {Link, NavLink} from "react-router-dom";
import {IPost} from "../../../types/post.interface";
import ReactTimeago from "react-timeago";
import {CommentPostSVG, FavoritePostSVG, RepostPostSVG, ShowPostMenuSVG, ViewsPostSVG} from "../../SvgComponent";
import {PostMenu} from "../PostMenu/PostMenu";



interface IPostProps {
  post: IPost
  borderRadius?: object
}

export const PostItem: FC<IPostProps> = ({post, borderRadius}) => {
  const refOut = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refOut.current && !event.composedPath().includes(refOut.current)) {
        setShow(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.addEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.post} style={borderRadius}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={post.user.avatar || defaultAvatar} alt=""/>
        </div>
        <div className={styles.nameAndDate}>
          <span className={styles.name}>
             <Link to={'/'}>{`${post.user.lastName} ${post.user.firstName}`}</Link>
          </span>
          <span className={styles.date}>
            <Link to={'/'}>
              <ReactTimeago date={post.updatedAt}/>
            </Link>
          </span>
        </div>
        <PostMenu setShow={() => setShow(!show)}
                  show={show}
                  refOut={refOut}
                  postId={post.id}
        />
      </div>
      <div className={styles.postText}>

        <span className={styles.text}>{post.text}</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.buttonComponent}>
          <button className={styles.bottomBtn}>
            <FavoritePostSVG onClick={() => {}} />
          </button>
          <button className={styles.bottomBtn}>
            <CommentPostSVG onClick={() => {} } />
          </button>
          <button className={styles.bottomBtn}>
           <RepostPostSVG onClick={() => {}} />
          </button>
        </div>
        <div className={styles.viewsComponent}>
          <span>
            <ViewsPostSVG onClick={() => {}} />
          </span>
          <span>{post.views}</span>
        </div>
      </div>
    </div>
  );
};