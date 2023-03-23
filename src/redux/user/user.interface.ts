import {StatusEnum} from "../types";
import {IUser} from "../../types/user.interface";

export interface IUserState {
  id: string | number
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  isAdmin?: boolean
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

export interface IRegister {
  email: string
  password: string
  firstName: string
  lastName: string
  avatar?: string
  isAdmin?: boolean
}

export interface ILogin {
  email: string
  password: string
}

export interface ITokens {
  refreshToken: string
  accessToken: string
}

export interface IAuthResponse extends ITokens {
 user: IUser
}

