import {axiosClassic, instance} from "../api/api.interceptor";
import {getCommunityUrl, getUsersUrl} from "../api/api.config";
import {IFriendsResponse, ISearchFriendsParams} from "../types/friend.interface";
import {ICommunityAbbr, ISearchCommunityParams} from "../types/community.interface";

export const CommunityService = {
  searchCommunity: async (params?: ISearchCommunityParams) => {
    const {data} = await axiosClassic.get<{communities: ICommunityAbbr[]}>(getCommunityUrl(`/search?name=${params?.name}`))

    return data
  },

  // addCommunity: async (userId: string | number) => {
  //   const {data} = await instance.patch<string>(getCommunityUrl(`/friend/${userId}`))
  //
  //   return data
  // },
  //
  // removeCommunity: async (userId: string | number) => {
  //   const {data} = await instance.delete<string>(getCommunityUrl(`/friend/${userId}`))
  //
  //   return data
  // },
}