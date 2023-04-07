import {FC} from 'react';
import styles from './Posts.module.scss';
import {ProfileWall} from "../Profile/ProfileWall/ProfileWall";
import {PostWrite} from "./PostWrite/PostWrite";
import {CategoryPosts} from "../CategoryPosts/CategoryPosts";
import {PostItem} from "./PostItem/PostItem";
import {IUserFull} from "../../types/user.interface";
import {IPost} from "../../types/post.interface";
import {useAuth} from "../../hooks/useAuth";
import {avatarUrl} from "../../utils/avatarUrl";
interface IPostsProps {
  user: IUserFull
  posts: IPost[]
  isSuccessPosts: boolean
}

export const PostsWrapper: FC<IPostsProps> = ({user, posts, isSuccessPosts}) => {
  const {user: authorizedUser} = useAuth()
  const avatar = avatarUrl(user?.avatar)
  const borderRadius = {
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
  }

  return (
    <div className={styles.profilePosts}>
      <ProfileWall/>
      <PostWrite avatar={avatar}/>
      <CategoryPosts/>
      {isSuccessPosts && posts.map((post, i) => {
        return <PostItem key={post.id}
                         post={post}
                         borderRadius={i === 0 ? borderRadius : undefined}
                         // user={user}
                         authorizedUserId={authorizedUser?.id!}
        />
      })}
    </div>
  );
};