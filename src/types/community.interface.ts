import {IUserAbbr} from "./user.interface";

export interface ICommunitySearchAbbr {
  id: string
  name: string
  category: string
  description: string
  avatar: string
  members: number
}

export interface ICommunitySearchResponse {
  myCommunities: ICommunitySearchAbbr[],
  otherCommunities: ICommunitySearchAbbr[],
  total: number
}

export interface ICommunity {
  id: string
  name: string
  category: string
  description: string
  avatar: string
  members: IUserAbbr[]
}

export interface ISearchCommunityParams {
  name: string
  limit?: number
  take?:  number
}