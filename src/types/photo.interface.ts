import {ICommunitySearchAbbr} from "./community.interface";
import {IUserAbbr} from "./user.interface";
import {ICommentsAbbr} from "./comments.interface";

export interface IPhotoAbbr {
  id: string
  description: null | string,
  photoUrl: string,
  turnOffComments: boolean,
  createdAt: string,
  updatedAt: string
  photoFavoriteAdders: IUserAbbr[]
}

export interface IPhotoFull extends IPhotoAbbr {
  community: ICommunitySearchAbbr,
  user: IUserAbbr,
  comments: ICommentsAbbr[]
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