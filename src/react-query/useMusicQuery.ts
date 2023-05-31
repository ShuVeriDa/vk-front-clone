import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {AlbumService} from "../services/album.service";
import {ICreatePhotoAlbum, ICreatePhotoInAlbum, IUpdatePhotoAlbum} from "../types/photoAlbum.interface";
import {MusicService} from "../services/music.service";
import {ISearchMusic} from "../types/music.interface";

export const useMusicQuery = (musicId?: string, query?: ISearchMusic) => {
  const getOneMusic = useQuery({
    queryFn: () => MusicService.fetchOneMusic(musicId!),
    queryKey: ['oneMusic'],
    enabled: !!musicId
  })

  const getMyMusic = useQuery({
    queryFn: () => MusicService.fetchMyMusic(),
    queryKey: ['myMusic']
  })

  const getAllMusic = useQuery({
    queryFn: () => MusicService.fetchAllMusic(),
    queryKey: ['allMusic']
  })

  const searchMusic=useQuery({
    queryFn: () => MusicService.searchMusic(query!),
    queryKey: ['searchMusic', query]
  })

  // const client = useQueryClient()
  //
  // const createMusic = useMutation({
  //   mutationFn: (data:ICreatePhotoAlbum) => AlbumService.createAlbum(data),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myAlbums', 'allMyAlbums']})
  //   }
  // })
  //
  // const createPhotoInAlbum = useMutation({
  //   mutationFn: (data:ICreatePhotoInAlbum) => AlbumService.createPhotoInAlbum(albumId!, data),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myAlbum', 'albumOne']})
  //   }
  // })
  //
  // const updateAlbum = useMutation({
  //   mutationFn: (data:IUpdatePhotoAlbum) => AlbumService.updateAlbum(albumId!, data),
  //   onSuccess: () => {
  //     client.invalidateQueries(['myAlbums', 'allMyAlbums'])
  //   }
  // })
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
    getOneMusic, getMyMusic, getAllMusic, searchMusic
  }), [getOneMusic, getMyMusic, getAllMusic, searchMusic])
}