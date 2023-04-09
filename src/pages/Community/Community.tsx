import {FC} from 'react';
import {CommunityHeader} from "../../components/Community/CommunityHeader/CommunityHeader";
import {useParams} from "react-router-dom";
import {useCommunityQuery} from "../../react-query/useCommunityQuery";

interface ICommunityPageProps {
}

export const CommunityPage: FC<ICommunityPageProps> = () => {
  const {id} = useParams()

  const {fetchOne} = useCommunityQuery(undefined, id)
  const {data: community} = fetchOne
  console.log(community)

  return (
    <div>
      <CommunityHeader />
    </div>
  );
};