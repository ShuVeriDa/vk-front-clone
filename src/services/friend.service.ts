import {axiosClassic, instance} from "../api/api.interceptor";
import {getUsersUrl} from "../api/api.config";
import {IFriendsResponse, ISearchFriendsParams} from "../types/friend.interface";

export const FriendService = {
  searchFriends: async (params: ISearchFriendsParams) => {
    const {data} = await instance.get<IFriendsResponse>(getUsersUrl(`/search?firstname=${params.firstname}&lastname=${params.lastname}`))

    return data
  }
}