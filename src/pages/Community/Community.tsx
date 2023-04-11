import {FC} from 'react';
import {CommunityHeader} from "../../components/Community/CommunityHeader/CommunityHeader";
import {useParams} from "react-router-dom";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";
import {useAuth} from "../../hooks/useAuth";
import {useCommunitySearchQuery} from "../../react-query/useCommunitySearchQuery";
import {PostsWrapper} from "../../components/Posts/PostsWrapper";

interface ICommunityPageProps {
}

export const CommunityPage: FC<ICommunityPageProps> = () => {
  const {id} = useParams()
  const {user} = useAuth()

  const {fetchOne} = useCommunityQuery (id!)
  const {data: community} = fetchOne

  return (
    <div>
      <CommunityHeader community={community}/>
      {/*<PostsWrapper user={user!} posts={} isSuccessPosts={true} />*/}
    </div>
  );
};