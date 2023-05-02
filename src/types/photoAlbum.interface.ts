import {IUserAbbr} from "./user.interface";
import {IPhotoForAlbum} from "./photo.interface";

export interface IPhotoAlbum {
  id: string,
  title: string,
  description: string,
  turnOffWatching: "me" | "friends" | 'all',
  photos: IPhotoForAlbum[],
  createdAt: string,
  updatedAt: string,
  user: IUserAbbr
}

export interface ICreatePhotoAlbum {
  title: string,
  description?: string,
  turnOffWatching?: "all" | "friends" | "me"
}

export interface IUpdatePhotoAlbum{
  title?: string,
  description?: string,
  turnOffWatching?: "friend" | "me" | "all"
}