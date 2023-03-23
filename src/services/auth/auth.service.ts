import {IAuthResponse, ILogin, IRegister} from "../../redux/user/user.interface";
import {axiosClassic} from "../../api/api.interceptor";
import {removeTokensStorage, saveToStorage} from "./auth.helpers";
import Cookies from "js-cookie";
import {getContentType} from "../../api/api.helper";

export const AuthService = {
  register: async (data: IRegister) => {
    const res = await axiosClassic.post<IAuthResponse>(`auth/register`, data)

    if (res.data.accessToken) {
      saveToStorage(res.data)
    }

    return res
  },
  login: async (data: ILogin) => {
    const res = await axiosClassic.post<IAuthResponse>(`auth/login`, data)

    if (res.data.accessToken) {
      saveToStorage(res.data)
    }

    return res
  },
  logout: async () => {
    removeTokensStorage()
    localStorage.removeItem('user')
  },
  getNewTokens: async () => {
    const refreshToken = Cookies.get("refreshToken")
    const res = await axiosClassic.post<IAuthResponse>
    (`auth/login/access-token`,
      {refreshToken},
    )

    if (res.data.accessToken) {
      saveToStorage(res.data)
    }

    return res
  }

}