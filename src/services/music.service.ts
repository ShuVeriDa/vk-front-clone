import {IPostCommunity} from "../types/post.interface";
import {axiosClassic, instance} from "../api/api.interceptor";
import {getMusicUrl, getPhotosUrl, getPostsCommunityUrl, getPostsUrl} from "../api/api.config";
import {ICreatePhoto, IPhotoForAlbum, IPhotoFull, IUpdatePhoto} from "../types/photo.interface";
import {IMusicFull, ISearchMusic} from "../types/music.interface";


export const MusicService =  {
  fetchOneMusic: async (musicId: string) => {
    const res = await axiosClassic.get<IMusicFull>(getMusicUrl(`/${musicId}`))
    return res.data
  },

  fetchMyMusic: async () => {
    const res = await instance.get<IMusicFull[]>(getMusicUrl(``))
    return res.data
  },

  fetchAllMusic: async () => {
    const res = await axiosClassic.get<IMusicFull[]>(getMusicUrl(`/all`))
    return res.data
  },

  searchMusic: async (query?: ISearchMusic) => {
    const res = await axiosClassic.get<IMusicFull[]>(getMusicUrl(`/search?title=${query?.title}`))
    // const res = await axiosClassic.get<IMusicFull[]>(getMusicUrl(`/search?title=${query?.title}&artist=${query?.artist}`))
    return res.data
  },

  // createPhoto: async (data: ICreatePhoto) => {
  //   const res = await instance.post<IPhotoForAlbum>(getPhotosUrl(''), data)
  //   return res.data
  // },
  //
  // updatePhoto: async (photoId: string, data: IUpdatePhoto) => {
  //   const res = await instance.put<IPhotoFull>(getPhotosUrl(`/${photoId}`), data)
  //
  //   return res.data
  // },
  //
  // deletePhoto: async (postId: string) => {
  //   const res = await instance.delete(getPostsUrl(`/${postId}`))
  //   return res.data
  // },
  //
  // toggleFavoritesPhoto: async (photoId:string) => {
  //   const res = await instance.post<IPhotoFull>(getPhotosUrl(`/${photoId}/favorites`))
  //   return res.data
  // },
  //
  //
  // //community
  // getPhotosCommunityUrl: async (communityId: string) => {
  //   const res = await axiosClassic.get<IPostCommunity[]>(getPostsCommunityUrl(communityId, ''))
  //
  //   return res.data
  // }

}