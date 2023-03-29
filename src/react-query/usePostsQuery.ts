import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {useMemo} from "react";

export const usePostsQuery = (userId: string | number | undefined) => {
  const getMyPosts = useQuery({
    queryFn: () => PostService.fetchMyPosts(userId!),
    queryKey: ['myPosts', userId]
  })

  const client = useQueryClient()

  const createPost = useMutation({
    mutationFn: PostService.createPost,
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPosts', userId]})
    }
  })

  return useMemo(() => ({
    getMyPosts,
    createPost
  }), [getMyPosts, createPost])
}