import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {FriendService} from "../services/friend.service";
import {ISearchFriendsParams} from "../types/friend.interface";
import {PostService} from "../services/post.service";
import {IUpdatePost} from "../types/post.interface";
import {CommunityService} from "../services/community.service";
import {ISearchCommunityParams} from "../types/community.interface";

export const useCommunityQuery = (params?: ISearchCommunityParams | undefined, userId?: string | number ) => {
  const searchCommunity = useQuery({
    queryFn: () => CommunityService.searchCommunity(params!),
    queryKey: ['community', 'all', params],
  })

  const client = useQueryClient()

  // const addCommunity = useMutation({
  //   mutationFn: (userId: string | number) => CommunityService.addFriend(userId),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['friends', 'all']})
  //   }
  // })
  //
  //
  // const removeCommunity = useMutation({
  //   mutationFn: (userId: string | number) => FriendService.removeFriend(userId),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['friends', 'all']})
  //     searchFriends.refetch()
  //   }
  // })

  return useMemo(() => ({
    searchCommunity
  }), [searchCommunity])
}
