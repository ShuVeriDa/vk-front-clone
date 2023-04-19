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
  avatar: string | null
  members: IUserAbbr[]
}

export interface ICommunityFull extends ICommunity{
  createdAt: string,
  updatedAt: string,
  // posts: IPostAbbr[],
  // music: IMusicAbbr[],
  // photos: IPhotoAbbr[],
  // video: IVideoAbbr[],
  admins: IUserAbbr[],
  author: IUserAbbr
}

export interface ISearchCommunityParams {
  name: string
  limit?: number
  take?:  number
}

export interface ICreateCommunity {
  name: string
  category: string
  description: string
}