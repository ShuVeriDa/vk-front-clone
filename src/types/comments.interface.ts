import {IPhotoAbbr} from "./photo.interface";
import {IUserAbbr} from "./user.interface";
import {IVideoAbbr} from "./video.interface";
import {IPostAbbr} from "./post.interface";

export interface ICommentsAbbr {
  id: string,
  text: string,
  favorites: number,
  createdAt: string,
  updatedAt: string
}

export interface ICommentsFull extends ICommentsAbbr {
  user: IUserAbbr
  photo: IPhotoAbbr | null
  video: IVideoAbbr | null
  post: IPostAbbr | null
}

export interface ICreateComment {
  text: string
  videoId?: string
  photoId?: string
  postId?: string
  communityId?: string;
}

export interface IUpdateComment extends ICreateComment {}

