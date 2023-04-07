import {IUserAbbr} from "./user.interface";
import {ICommunitySearchResponse} from "./community.interface";
import {ICommentsAbbr} from "./comments.interface";

export interface IPost {
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
  community: ICommunitySearchResponse | null,
  user: IUserAbbr,
  comments: ICommentsAbbr[]
  repost?: IPost | null
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
