import {IUserAbbr} from "./user.interface";
import {IMusicAbbr} from "./music.interface";
import {IVideoAbbr} from "./video.interface";
import {IPostAbbr} from "./post.interface";
import {IPhotoAbbr} from "./photo.interface";

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

export interface ICommunityFull {
  id: string,
  name: string,
  description: string,
  avatar: string | null,
  createdAt: string,
  updatedAt: string,
  members: IUserAbbr[],
  posts: IPostAbbr[],
  music: IMusicAbbr[],
  photos: IPhotoAbbr[],
  video: IVideoAbbr[],
  admins: IUserAbbr[],
  author: IUserAbbr
}

export interface ISearchCommunityParams {
  name: string
  limit?: number
  take?:  number
}