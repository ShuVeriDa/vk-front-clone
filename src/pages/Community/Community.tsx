import {FC} from 'react';
import {CommunityHeader} from "../../components/Community/CommunityHeader/CommunityHeader";
import {useParams} from "react-router-dom";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {useAuth} from "../../hooks/useAuth";
import {PostsWrapper} from "../../components/Posts/PostsWrapper";
import {usePostsQuery} from "../../react-query/usePostsQuery";

interface ICommunityPageProps {
}

export const CommunityPage: FC<ICommunityPageProps> = () => {
  const {id} = useParams()
  const {user} = useAuth()

  const {fetchOne} = useCommunityQuery (id!)
  const {data: community} = fetchOne
  const {getCommunityPosts} = usePostsQuery(undefined, undefined, id)
  const {data: posts, isSuccess} = getCommunityPosts
  console.log(posts)
  return (
    <div>
      <CommunityHeader community={community}/>
      <PostsWrapper user={user!} posts={posts!} isSuccessPosts={isSuccess} />
    </div>
  );
};