import {StatusEnum} from "../types";

export interface IUserState {
  id: string | number
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  isAdmin: boolean
  // reposts
  // favorites
  // friends:
  createdAt: string
  updatedAt: string
}

export interface IInitialState {
  user: IUserState | null
  status: StatusEnum
}