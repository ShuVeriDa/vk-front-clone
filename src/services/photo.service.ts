import {ICreatePost, IPost, IPostCommunity, IPostCommunityData, IUpdatePost} from "../types/post.interface";
import {axiosClassic, instance} from "../api/api.interceptor";
import {getPhotosUrl, getPostsCommunityUrl, getPostsUrl} from "../api/api.config";
import {ICreatePhoto, IPhotoForAlbum} from "../types/photo.interface";


export const PhotoService =  {
  fetchMyPhotos: async (userId: string | number) => {
    const res = await instance.get<IPost[]>(getPostsUrl(`/myposts/${userId}`))
    return res.data
  },

  createPhoto: async (data: ICreatePhoto) => {
    const res = await instance.post<IPhotoForAlbum>(getPhotosUrl(''), data)
    return res.data
  },

  updatePhoto: async (postId: string, data: IUpdatePost) => {
    const res = await instance.put<IPost>(getPostsUrl(`/${postId}`), data)

    return res.data
  },

  deletePhoto: async (postId: string) => {
    const res = await instance.delete(getPostsUrl(`/${postId}`))
    return res.data
  },


  //community
  getPhotosCommunityUrl: async (communityId: string) => {
    const res = await axiosClassic.get<IPostCommunity[]>(getPostsCommunityUrl(communityId, ''))

    return res.data
  }

}