import {FC} from 'react';
import {CommunityHeader} from "../../components/Community/CommunityHeader/CommunityHeader";
import {useParams} from "react-router-dom";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {PostsWrapper} from "../../components/Posts/PostsWrapper";
import {useAuth} from "../../hooks/useAuth";

interface ICommunityPageProps {
}

export const CommunityPage: FC<ICommunityPageProps> = () => {
  const {id} = useParams()
  const {user} = useAuth()

  const {fetchOne} = useCommunityQuery(undefined, id)
  const {data: community} = fetchOne
  console.log(community)

  return (
    <div>
      <CommunityHeader community={community}/>
      {/*<PostsWrapper user={user!} posts={community?.posts!} isSuccessPosts={true} />*/}
    </div>
  );
};