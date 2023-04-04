import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {useMemo} from "react";
import {ICreatePost, IUpdatePost} from "../types/post.interface";

export const usePostsQuery = (userId: string | number | undefined, postId?: string) => {
  const getMyPosts = useQuery({
    queryFn: () => PostService.fetchMyPosts(userId!),
    queryKey: ['myPosts', 'allMyPosts', userId]
  })

  const client = useQueryClient()

  const createPost = useMutation({
    mutationFn: (data:ICreatePost) => PostService.createPost(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
    }
  })

  const updatePost = useMutation({
    mutationFn: (data:IUpdatePost) => PostService.updatePost(postId!, data),
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

  return useMemo(() => ({
    getMyPosts,
    createPost,
    updatePost,
    deletePost,
  }), [getMyPosts, createPost, deletePost, updatePost])
}