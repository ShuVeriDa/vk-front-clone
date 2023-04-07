import {IUserAbbr} from "./user.interface";

export interface ICommunityAbbr {
  id: string
  name: string
  category: string
  description: string
  avatar: string
  members: IUserAbbr[] | number
  createdAt?: string
  updatedAt?: string
}

export interface ISearchCommunityParams {
  name: string
  limit?: number
  take?:  number
}