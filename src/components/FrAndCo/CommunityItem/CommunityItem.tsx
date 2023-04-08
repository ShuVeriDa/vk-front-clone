import {FC} from 'react';
import defaultCommunityAvatar from '../../../assets/defaultCommunityAvatar.png'

import {avatarUrl} from "../../../utils/avatarUrl";
import {ICommunitySearchAbbr} from "../../../types/community.interface";
import {FrAndCoItem} from "../FrAndCoItem/FrAndCoItem";

interface ICommunityItemProps {
  community: ICommunitySearchAbbr
  isCommunity: boolean
}

export const CommunityItem: FC<ICommunityItemProps> = (
  {
    isCommunity, community,
  }
) => {

  const avatar = community.avatar !== null ? avatarUrl(community.avatar) : defaultCommunityAvatar
  const name = community.name
  const path = '../community/'

  const onClick = () => {
    // isCommunity ? remove(user.id) : add(user.id)
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