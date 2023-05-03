import {instance} from "../api/api.interceptor";
import {getPhotoAlbumsUrl} from "../api/api.config";
import {ICreatePhotoAlbum, IPhotoAlbum, IUpdatePhotoAlbum} from "../types/photoAlbum.interface";


export const AlbumService = {
  fetchMyAlbums: async () => {
    const res = await instance.get<IPhotoAlbum[]>(getPhotoAlbumsUrl(''))
    return res.data
  },

  fetchOneAlbum: async (albumId: string) => {
    const res = await instance.get<IPhotoAlbum>(getPhotoAlbumsUrl(`/${albumId}`))
    return res.data
  },

  createAlbum: async (data: ICreatePhotoAlbum) => {
    const res = await instance.post<IPhotoAlbum>(getPhotoAlbumsUrl(''), data)
    return res.data
  },

  updateAlbum: async (albumId: string, data: IUpdatePhotoAlbum) => {
    const res = await instance.put<IPhotoAlbum>(getPhotoAlbumsUrl(`/${albumId}`), data)

    return res.data
  },

  deleteAlbum: async (albumId: string) => {
    const res = await instance.delete(getPhotoAlbumsUrl(`/${albumId}`))
    return res.data
  },


  //community
  // getPostsCommunityUrl: async (communityId: string) => {
  //   const res = await axiosClassic.get<IPostCommunity[]>(getPostsCommunityUrl(communityId, ''))
  //
  //   return res.data
  // }

}