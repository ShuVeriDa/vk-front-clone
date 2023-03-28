import {IPost} from "../types/post.interface";
import {instance} from "../api/api.interceptor";
import {getPostsUrl} from "../api/api.config";


export const PostService =  {
  fetchMyPosts: async (userId: string | number) => {
    const res = await instance.get<IPost[]>(getPostsUrl(`/myposts/${userId}`))

    return res.data

  }
}