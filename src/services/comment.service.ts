import {instance} from "../api/api.interceptor";
import {getCommentsUrl} from "../api/api.config";
import {ICommentsFull, ICreateComment, IUpdateComment} from "../types/comments.interface";
import {IUpdatePhoto} from "../types/photo.interface";


export const CommentService =  {
  fetchPhotoComments: async (photoId: string) => {
    const res = await instance.get<ICommentsFull[]>(getCommentsUrl(`/photo/${photoId}`))
    return res.data
  },

  fetchVideoComments: async (videoId: string) => {
    const res = await instance.get<ICommentsFull[]>(getCommentsUrl(`/video/${videoId}`))
    return res.data
  },

  fetchPostComments: async (postId: string) => {
    const res = await instance.get<ICommentsFull[]>(getCommentsUrl(`/post/${postId}`))
    return res.data
  },

  fetchOneComment: async (commentId: string) => {
    const res = await instance.get<ICommentsFull>(getCommentsUrl(`/commentId`))
    return res.data
  },

  createComment: async (data: ICreateComment) => {
    const res = await instance.post<ICommentsFull>(getCommentsUrl(''), data)
    return res.data
  },

  updateComment: async (commentId: string, data: IUpdateComment) => {
    const res = await instance.put<ICommentsFull>(getCommentsUrl(`/${commentId}`), data)

    return res.data
  },

  deleteComment: async (commentId: string) => {
    const res = await instance.delete(getCommentsUrl(`/${commentId}`))
    return res.data
  },

  /*

  //community
  getPhotosCommunityUrl: async (communityId: string) => {
    const res = await axiosClassic.get<IPostCommunity[]>(getPostsCommunityUrl(communityId, ''))

    return res.data
  }*/

}