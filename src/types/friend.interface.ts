import {IUserAbbr} from "./user.interface";

export interface IFriend extends IUserAbbr {}

export interface ISearchFriendsParams {
  firstname: string
  lastname: string
  limit?: number
  take?:  number
}

export interface IFriendsResponse {
  users: IUserAbbr[]
  friends: IFriend[]
  total: number
}