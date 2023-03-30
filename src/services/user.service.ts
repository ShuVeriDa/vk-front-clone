import {axiosClassic, instance} from "../api/api.interceptor";
import {getUsersUrl} from "../api/api.config";
import {IUserFull, IUserUpdate} from "../types/user.interface";

export const UserService = {
  fetchUser: async (userId: string | number) => {
    const {data} = await axiosClassic.get<IUserFull>(getUsersUrl(`/${userId}`))
    return data
  },

  updateUser: async (userId: string | number, data: IUserUpdate) => {
    const res = await instance.patch<IUserFull>(getUsersUrl(`/${userId}`), data)

    return res.data
  }
}