import {ICommunity, ICommunitySearchResponse} from "./community.interface";
import {IFriend} from "./friend.interface";

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

export interface IUserFull {
  id: string | number
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  location: string
  password?: string
  isAdmin?: boolean
  createdAt: string
  updatedAt: string
  friends: IFriend[]
  communities: ICommunity[]
}

export interface IUserAbbr {
  id: number | string,
  firstName: string,
  lastName: string,
  avatar: string
  location?: string
}

export interface IUserUpdate {
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  location: string
}