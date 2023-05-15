import {ICommunitySearchAbbr} from "./community.interface";
import {IUserAbbr} from "./user.interface";
import {ICommentsAbbr} from "./comments.interface";
import exp from "constants";

export interface IPhotoAbbr {
  id: string
  description: null | string,
  photoUrl: string,
  turnOffComments: boolean,
  photoFavorites: number,
  createdAt: string,
  updatedAt: string
}

export interface IPhotoFull extends IPhotoAbbr {
  community: ICommunitySearchAbbr,
  user: IUserAbbr,
  comments: ICommentsAbbr[]
}

export interface IPhotoFullToggleFavorites extends IPhotoFull {
  favoritePhotoUsers: IUserAbbr[]
}

export interface IPhotoForAlbum {
  id: string
  photoUrl: string,
  description: string
}

export interface ICreatePhoto {
  photoUrl: string
}

export interface IUpdatePhoto {
  description: string
}