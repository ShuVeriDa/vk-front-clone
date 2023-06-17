import {axiosClassic, instance} from "../api/api.interceptor";
import {getMusicUrl, getPhotosUrl} from "../api/api.config";
import {ICreateMusic, IMusicFull, ISearchMusic, IUpdateMusic} from "../types/music.interface";


export const MusicService = {
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

  createMusic: async (data: ICreateMusic) => {
    const res = await instance.post<IMusicFull>(getMusicUrl(''), data)
    return res.data
  },

  updateMusic: async (musicId: string, data: IUpdateMusic) => {
    const res = await instance.put<IMusicFull>(getMusicUrl(`/${musicId}`), data)

    return res.data
  },

  deleteMusic: async (musicId: string) => {
    const res = await instance.delete(getMusicUrl(`/${musicId}`))
    return res.data
  },

  // createPhoto: async (data: ICreatePhoto) => {
  //   const res = await instance.post<IPhotoForAlbum>(getPhotosUrl(''), data)
  //   return res.data
  // },
  //
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