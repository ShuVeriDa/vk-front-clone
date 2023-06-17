import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {AlbumService} from "../services/album.service";
import {ICreatePhotoAlbum, ICreatePhotoInAlbum, IUpdatePhotoAlbum} from "../types/photoAlbum.interface";
import {MusicService} from "../services/music.service";
import {ICreateMusic, ISearchMusic} from "../types/music.interface";

export const useMusicQuery = (musicId?: string, query?: ISearchMusic) => {
  const getOneMusic = useQuery({
    queryFn: () => MusicService.fetchOneMusic(musicId!),
    queryKey: ['oneMusic', musicId],
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

  const searchMusic = useQuery({
    queryFn: () => MusicService.searchMusic(query!),
    queryKey: ['searchMusic', query]
  })

  const client = useQueryClient()

  const updateMusic = useMutation({
    mutationFn: (data: IUpdatePhotoAlbum) => MusicService.updateMusic(musicId!, data),
    onSuccess: () => {
      client.invalidateQueries(['myMusic'])
    }
  })

  const deleteMusic = useMutation({
    mutationFn: (musicId: string) => MusicService.deleteMusic(musicId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myMusic']})
      getMyMusic.refetch()
    }
  })

  const createMusic = useMutation({
    mutationFn: (data:ICreateMusic) => MusicService.createMusic(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['myMusic']})
    }
  })
  //
  // const createPhotoInAlbum = useMutation({
  //   mutationFn: (data:ICreatePhotoInAlbum) => AlbumService.createPhotoInAlbum(albumId!, data),
  //   onSuccess: () => {
  //     client.invalidateQueries({queryKey: ['myAlbum', 'albumOne']})
  //   }
  // })

  //

  //
  // //community
  // const getCommunityPosts = useQuery({
  //   queryFn: () => PostService.getPostsCommunityUrl(communityId!),
  //   queryKey: ['get all posts', 'in community', communityId],
  //   enabled: !!communityId
  // })

  return useMemo(() => ({
    getOneMusic, getMyMusic, getAllMusic, searchMusic, updateMusic, deleteMusic, createMusic

  }), [getOneMusic, getMyMusic, getAllMusic, searchMusic, updateMusic, deleteMusic, createMusic])
}