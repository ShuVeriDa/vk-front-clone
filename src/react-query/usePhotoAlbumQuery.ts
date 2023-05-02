import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {useMemo} from "react";
import {ICreatePost, IPostCommunity, IPostCommunityData, IUpdatePost} from "../types/post.interface";
import {AlbumService} from "../services/album.service";

export const usePhotoAlbumQuery = (album?: string) => {
  const getMyAlbums = useQuery({
    queryFn: () => AlbumService.fetchMyAlbums(),
    queryKey: ['myAlbums', 'allMyAlbums']
  })

  const client = useQueryClient()

  // const createPost = useMutation({
  //   mutationFn: (data:ICreatePost) => PostService.createPost(data),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
  //   }
  // })
  //
  // const updatePost = useMutation({
  //   mutationFn: (data:IUpdatePost) => PostService.updatePost(postId!, data),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
  //   }
  // })
  //
  // const deletePost = useMutation({
  //   mutationFn: (postId: string) => PostService.deletePost(postId),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
  //     getMyPosts.refetch()
  //   }
  // })
  //
  // //community
  // const getCommunityPosts = useQuery({
  //   queryFn: () => PostService.getPostsCommunityUrl(communityId!),
  //   queryKey: ['get all posts', 'in community', communityId],
  //   enabled: !!communityId
  // })

  return useMemo(() => ({
    getMyAlbums
  }), [getMyAlbums])
}