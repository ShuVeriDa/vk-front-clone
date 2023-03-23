export interface IUser {
  id: string | number
  email: string
  firstName: string
  lastName: string
  avatar: string
  status: string
  isAdmin?: boolean
}