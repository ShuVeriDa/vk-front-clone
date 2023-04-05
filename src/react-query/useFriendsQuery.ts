import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {FriendService} from "../services/friend.service";
import {ISearchFriendsParams} from "../types/friend.interface";
import {PostService} from "../services/post.service";
import {IUpdatePost} from "../types/post.interface";

export const useFriendsQuery = (params?: ISearchFriendsParams | undefined, userId?: string | number ) => {
  const searchFriends = useQuery({
    queryFn: () => FriendService.searchFriends(params!),
    queryKey: ['friends', 'all', params],
  })

  const client = useQueryClient()

  const addFriend = useMutation({
    mutationFn: (userId: string | number) => FriendService.addFriend(userId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['friends', 'all']})
    }
  })


  const removeFriend = useMutation({
    mutationFn: (userId: string | number) => FriendService.removeFriend(userId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['friends', 'all']})
      searchFriends.refetch()
    }
  })

  return useMemo(() => ({
    searchFriends,
    addFriend,
    removeFriend
  }), [searchFriends, addFriend, removeFriend])
}
