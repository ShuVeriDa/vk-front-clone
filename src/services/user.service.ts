import {axiosClassic} from "../api/api.interceptor";
import {getUsersUrl} from "../api/api.config";
import {IUserFull} from "../types/user.interface";

export const UserService = {
  fetchUser: async (userId: string | number) => {
    const {data} = await axiosClassic.get<IUserFull>(getUsersUrl(`/${userId}`))
    return data
  }
}