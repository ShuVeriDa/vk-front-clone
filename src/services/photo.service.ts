import {IPostCommunity} from "../types/post.interface";
import {axiosClassic, instance} from "../api/api.interceptor";
import {getPhotosUrl, getPostsCommunityUrl, getPostsUrl} from "../api/api.config";
import {ICreatePhoto, IPhotoForAlbum, IPhotoFull, IUpdatePhoto} from "../types/photo.interface";


export const PhotoService =  {
  fetchPhoto: async (photoId: string) => {
    const res = await instance.get<IPhotoFull>(getPhotosUrl(`/${photoId}`))
    return res.data
  },

  fetchMyPhotos: async () => {
    const res = await instance.get<IPhotoFull[]>(getPhotosUrl(``))
    return res.data
  },

  createPhoto: async (data: ICreatePhoto) => {
    const res = await instance.post<IPhotoForAlbum>(getPhotosUrl(''), data)
    return res.data
  },

  updatePhoto: async (photoId: string, data: IUpdatePhoto) => {
    const res = await instance.put<IPhotoFull>(getPhotosUrl(`/${photoId}`), data)

    return res.data
  },

  deletePhoto: async (postId: string) => {
    const res = await instance.delete(getPostsUrl(`/${postId}`))
    return res.data
  },

  toggleFavoritesPhoto: async (photoId:string) => {
    const res = await instance.post<IPhotoFull>(getPhotosUrl(`/${photoId}/favorites`))
    return res.data
  },


  //community
  getPhotosCommunityUrl: async (communityId: string) => {
    const res = await axiosClassic.get<IPostCommunity[]>(getPostsCommunityUrl(communityId, ''))

    return res.data
  }

}