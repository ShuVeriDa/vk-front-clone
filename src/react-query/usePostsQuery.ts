import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {useMemo} from "react";
import {ICreatePost, IPostCommunity, IPostCommunityData, IUpdatePost} from "../types/post.interface";

export const usePostsQuery = (userId?: string | number, id?: string, communityId?: string) => {
  const getMyPosts = useQuery({
    queryFn: () => PostService.fetchMyPosts(userId!),
    queryKey: ['myPosts', 'allMyPosts', userId],
    enabled: !!userId
  })

  const client = useQueryClient()

  const createPost = useMutation({
    mutationFn: (data:ICreatePost) => PostService.createPost(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
    }
  })

  const repost = useMutation({
    mutationFn: (data: ICreatePost) => PostService.repost(data, id!),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
    }
  })

  const updatePost = useMutation({
    mutationFn: (data:IUpdatePost) => PostService.updatePost(id!, data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
    }
  })

  const deletePost = useMutation({
    mutationFn: (postId: string) => PostService.deletePost(postId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
      getMyPosts.refetch()
    }
  })

  

  //community
  const getCommunityPosts = useQuery({
    queryFn: () => PostService.getPostsCommunityUrl(communityId!),
    queryKey: ['get all posts', 'in community', communityId],
    enabled: !!communityId
  })

  return useMemo(() => ({
    getMyPosts,
    createPost,
    updatePost,
    deletePost,
    repost,
    getCommunityPosts,
  }), [getMyPosts, createPost, deletePost, updatePost, repost, getCommunityPosts])
}