import {axiosClassic, instance} from "../api/api.interceptor";
import {getCommunityUrl, getUsersUrl} from "../api/api.config";
import {IFriendsResponse, ISearchFriendsParams} from "../types/friend.interface";
import {ICommunitySearchResponse, ISearchCommunityParams} from "../types/community.interface";

export const CommunityService = {
  searchCommunity: async (params?: ISearchCommunityParams) => {
    const {data} = await instance.get< ICommunitySearchResponse>(getCommunityUrl(`/search?name=${params?.name}`))

    return data
  },

  addCommunity: async (communityId: string ) => {
    const {data} = await instance.post<string>(getCommunityUrl(`/subscribe/${communityId}`))

    return data
  },

  removeCommunity: async (communityId: string ) => {
    const {data} = await instance.delete<string>(getCommunityUrl(`/subscribe/${communityId}`))

    return data
  },
}