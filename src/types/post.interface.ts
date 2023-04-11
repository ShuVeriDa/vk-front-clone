import {IUserAbbr} from "./user.interface";
import {ICommunitySearchAbbr, ICommunitySearchResponse} from "./community.interface";
import {ICommentsAbbr} from "./comments.interface";

export interface IPost extends IPostAbbr{
  community: ICommunitySearchResponse | null,
  user: IUserAbbr,
  comments: ICommentsAbbr[]
  repost?: IPost | null
}

export interface IPostAbbr {
  id: string,
  text: string,
  imageUrl: string | null,
  musicUrl: string | null,
  videoUrl: string | null,
  views: number,
  reposts: number,
  favorites: number,
  rating: number,
  turnOffComments: boolean,
  createdAt: string,
  updatedAt: string,
}

export interface IPostCommunity extends IPostAbbr {
  community: ICommunitySearchAbbr | null,
  user: IUserAbbr,
  comments: ICommentsAbbr[]
}

export interface ICreatePost {
  text: string,
  imageUrl: string | null,
  musicUrl: string | null,
  videoUrl: string | null,
  turnOffComments: boolean
}

export interface IUpdatePost {
  text?: string,
  imageUrl?: string | null,
  musicUrl?: string | null,
  videoUrl?: string | null,
  turnOffComments?: boolean
}
