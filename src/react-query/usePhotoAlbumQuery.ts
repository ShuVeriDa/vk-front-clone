import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {useMemo} from "react";
import {ICreatePost, IPostCommunity, IPostCommunityData, IUpdatePost} from "../types/post.interface";
import {AlbumService} from "../services/album.service";
import {ICreatePhotoAlbum} from "../types/photoAlbum.interface";

export const usePhotoAlbumQuery = (albumId?: string) => {
  const getMyAlbums = useQuery({
    queryFn: () => AlbumService.fetchMyAlbums(),
    queryKey: ['myAlbums', 'allMyAlbums']

  })

  const getOneAlbum = useQuery({
    queryFn: () => AlbumService.fetchOneAlbum(albumId!),
    queryKey: ['myAlbum', 'one'],
    enabled:!!albumId
  })

  const client = useQueryClient()

  const createAlbum = useMutation({
    mutationFn: (data:ICreatePhotoAlbum) => AlbumService.createAlbum(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myAlbums', 'allMyAlbums']})
    }
  })
  //
  // const updatePost = useMutation({
  //   mutationFn: (data:IUpdatePost) => PostService.updatePost(postId!, data),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myPosts', 'allMyPosts']})
  //   }
  // })
  //
  const deleteAlbum = useMutation({
    mutationFn: (albumId: string) => AlbumService.deleteAlbum(albumId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myAlbums', 'allMyAlbums']})
      getMyAlbums.refetch()
    }
  })
  //
  // //community
  // const getCommunityPosts = useQuery({
  //   queryFn: () => PostService.getPostsCommunityUrl(communityId!),
  //   queryKey: ['get all posts', 'in community', communityId],
  //   enabled: !!communityId
  // })

  return useMemo(() => ({
    getMyAlbums,
    createAlbum,
    getOneAlbum,
    deleteAlbum
  }), [getMyAlbums, getOneAlbum, createAlbum, deleteAlbum])
}