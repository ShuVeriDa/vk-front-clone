import {FC} from 'react';
import defaultAvatar from '../../../assets/img/defaultAvatar.png'

import {serverUrl} from "../../../utils/serverUrl";
import {IFriend} from "../../../types/friend.interface";
import {useFriendsQuery} from "../../../react-query/useFriendsQuery";
import {IUserAbbr} from "../../../types/user.interface";
import {FrAndCoItem} from "../FrAndCoItem/FrAndCoItem";

interface IFriendItemProps {
  authorizedUserId: number | string
  user: IFriend | IUserAbbr
  isFriend: boolean
  isAnotherUsers?: boolean
}

export const FriendItem: FC<IFriendItemProps> = (
  {
    user, isFriend,
    authorizedUserId, isAnotherUsers
  }
) => {
  const {addFriend, removeFriend} = useFriendsQuery()
  const {mutate: remove} = removeFriend
  const {mutate: add} = addFriend

  const avatar = user.avatar !== null ? serverUrl(user.avatar) : defaultAvatar
  const fullName = `${user.firstName} ${user.lastName}`
  const path = '../profile/'

  const onClick = () => {
    isFriend ? remove(user.id) : add(user.id)
  }

  return (
    <FrAndCoItem userAndCommunityId={user.id}
                 isFriend={isFriend}
                 location={user.location}
                 avatar={avatar}
                 name={fullName}
                 path={path}
                 onClick={onClick}
    />
  );
};