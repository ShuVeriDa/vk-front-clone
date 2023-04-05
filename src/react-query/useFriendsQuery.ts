import {useQuery} from "@tanstack/react-query";
import {useMemo} from "react";
import {FriendService} from "../services/friend.service";
import {ISearchFriendsParams} from "../types/friend.interface";

export const useFriendsQuery = (params: ISearchFriendsParams) => {
  const searchFriends = useQuery({
    queryFn: () => FriendService.searchFriends(params),
    queryKey: ['friends', 'all', params],
  })

  return useMemo(() => ({
    searchFriends
  }), [searchFriends])
}
