import {ICommunityAbbr} from "./community.interface";

export interface IUser {
  id: string | number
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  isAdmin?: boolean
}

export interface IUserFull extends IUser {
  createdAt: string
  updatedAt: string
  friends: IUserAbbr[]
  communities: ICommunityAbbr[]
}

export interface IUserAbbr {
  id: number | string,
  firstName: string,
  lastName: string,
  avatar: string
}