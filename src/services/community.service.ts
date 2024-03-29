import {instance} from "../api/api.interceptor";
import {getCommunityUrl} from "../api/api.config";
import {
  ICommunityFull,
  ICommunitySearchResponse,
  ICommunityCreate,
  ISearchCommunityParams, ICommunityUpdate
} from "../types/community.interface";

export const CommunityService = {
  searchCommunity: async (params?: ISearchCommunityParams) => {
    const {data} = await instance.get<ICommunitySearchResponse>(getCommunityUrl(`/search?name=${params?.name}`))

    return data
  },

  fetchOne: async (id: string | undefined) => {
    const {data} = await instance.get<ICommunityFull>(getCommunityUrl(`/${id}`))

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

  createCommunity: async (data: ICommunityCreate) => {
    const res = await instance.post<{ id: string }>(getCommunityUrl(''), data)

    return res.data
  },

  updateCommunity: async (communityId: string, data: ICommunityUpdate) => {
    const res = await instance.patch<{id: string}>(getCommunityUrl(`/${communityId}`), data)

    return res.data
  }
}