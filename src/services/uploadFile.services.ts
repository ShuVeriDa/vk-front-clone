import {axiosClassic} from "../api/api.interceptor";

type UploadFileResponseType = {
  url: string
  name: string
}

export const UploadFileService = {
  uploadFile: (file: FormData, folder?: string) => {
    return axiosClassic.post<UploadFileResponseType[]>(`/files`, file, {
      params: {folder},
      headers: {'Content-Type': "multipart/form-data"}
    })
  }
}