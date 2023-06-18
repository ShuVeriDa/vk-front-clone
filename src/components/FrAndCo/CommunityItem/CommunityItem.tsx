import {FC} from 'react';
import defaultCommunityAvatar from '../../../assets/img/defaultCommunityAvatar.png'

import {serverUrl} from "../../../utils/serverUrl";
import {ICommunitySearchAbbr} from "../../../types/community.interface";
import {FrAndCoItem} from "../FrAndCoItem/FrAndCoItem";
import {useCommunityQuery} from "../../../react-query/useCommunityQuery";

interface ICommunityItemProps {
  community: ICommunitySearchAbbr
  isCommunity: boolean
}

export const CommunityItem: FC<ICommunityItemProps> = (
  {
    isCommunity, community,
  }
) => {

  const avatar = community.avatar !== null ? serverUrl(community.avatar) : defaultCommunityAvatar
  const name = community.name
  const path = `../group/`

  const {removeCommunity, addCommunity} = useCommunityQuery()
  const {mutate: subscribe} = addCommunity
  const {mutate: unsubscribe} = removeCommunity

  const onClick = () => {
    isCommunity ? unsubscribe(community.id) : subscribe(community.id)
  }

  return (
    <FrAndCoItem userAndCommunityId={community.id}
                 category={community.category}
                 members={community.members}
                 isCommunity={isCommunity}
                 avatar={avatar}
                 name={name}
                 path={path}
                 onClick={onClick}
    />
  );
};