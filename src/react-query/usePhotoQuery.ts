import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {PostService} from "../services/post.service";
import {useMemo} from "react";
import {ICreatePost, IPostCommunity, IPostCommunityData, IUpdatePost} from "../types/post.interface";
import {AlbumService} from "../services/album.service";
import {ICreatePhotoAlbum, IUpdatePhotoAlbum} from "../types/photoAlbum.interface";
import {PhotoService} from "../services/photo.service";
import {ICreatePhoto, IUpdatePhoto} from "../types/photo.interface";

export const usePhotoQuery = (photoId?: string) => {
  // const getOneAlbum = useQuery({
  //   queryFn: () => AlbumService.fetchOneAlbum(albumId!),
  //   queryKey: ['myAlbum', 'one'],
  //   enabled: !!albumId
  // })
  //

  const getMyPhotos = useQuery({
    queryFn: () => PhotoService.fetchMyPhotos(),
    queryKey: ['myPhotos', 'allMyPhotos']
  })

  const client = useQueryClient()

  const createPhoto = useMutation({
    mutationFn: (data:ICreatePhoto) => PhotoService.createPhoto(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myPhotos', 'allMyPhotos']})
    }
  })

  const updatePhoto = useMutation({
    mutationFn: (data:IUpdatePhoto) => PhotoService.updatePhoto(photoId!, data),
    onSuccess: () => {
      client.invalidateQueries(['myPhoto', 'photoOne'])
    }
  })
  //
  // const deleteAlbum = useMutation({
  //   mutationFn: (albumId: string) => AlbumService.deleteAlbum(albumId),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myAlbums', 'allMyAlbums']})
  //     getMyAlbums.refetch()
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
    getMyPhotos, createPhoto, updatePhoto,
  }), [getMyPhotos, createPhoto, updatePhoto])
}