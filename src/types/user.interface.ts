import {ICommunityAbbr} from "./community.interface";

export interface IUser {
  id: string | number
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  location: string
  password?: string
  isAdmin?: boolean

}

export interface IUserFull extends IUser {
  createdAt: string
  updatedAt: string
  friends: IFriend[]
  communities: ICommunityAbbr[]
}

export interface IFriend extends IUserAbbr {}

export interface IUserAbbr {
  id: number | string,
  firstName: string,
  lastName: string,
  avatar: string
}

export interface IUserUpdate {
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  location: string
}