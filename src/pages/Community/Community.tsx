import {FC} from 'react';
import {CommunityHeader} from "../../components/Community/CommunityHeader/CommunityHeader";
import {useParams} from "react-router-dom";

interface ICommunityPageProps {
}

export const CommunityPage: FC<ICommunityPageProps> = () => {
  const {id} = useParams()



  return (
    <div>
      <CommunityHeader />
    </div>
  );
};