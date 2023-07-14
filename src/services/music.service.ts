import {axiosClassic, instance} from "../api/api.interceptor";
import {getMusicUrl} from "../api/api.config";
import {
  ICreateMusic,
  ICreatePlaylist,
  IMusicFull, IMyMusicAndOther,
  ISearchMusic,
  IToggleMusicToPlaylist,
  IUpdateMusic,
  IUpdatePlaylist
} from "../types/music.interface";


export const MusicService = {
  fetchOneMusic: async (musicId: string) => {
    const res = await axiosClassic.get<IMusicFull>(getMusicUrl(`/${musicId}`))
    return res.data
  },

  fetchMyMusic: async () => {
    const res = await instance.get<IMusicFull[]>(getMusicUrl(``))
    return res.data
  },

  fetchAllMusic: async () => {
    const res = await axiosClassic.get<IMusicFull[]>(getMusicUrl(`/all`))
    return res.data
  },

  searchMusic: async (query?: ISearchMusic) => {
    const res = await axiosClassic.get<IMusicFull[]>(getMusicUrl(`/search?title=${query?.title}`))
    // const res = await axiosClassic.get<IMusicFull[]>(getMusicUrl(`/search?title=${query?.title}&artist=${query?.artist}`))
    return res.data
  },

  searchMyMusicAndOther: async (query?: ISearchMusic) => {
    const res = await instance.get<IMyMusicAndOther>(getMusicUrl(`/search/mo?title=${query?.title}`))
    // const res = await axiosClassic.get<IMusicFull[]>(getMusicUrl(`/search?title=${query?.title}&artist=${query?.artist}`))
    return res.data
  },

  createMusic: async (data: ICreateMusic) => {
    const res = await instance.post<IMusicFull>(getMusicUrl(''), data)
    return res.data
  },

  updateMusic: async (musicId: string, data: IUpdateMusic) => {
    const res = await instance.put<IMusicFull>(getMusicUrl(`/${musicId}`), data)

    return res.data
  },

  deleteMusic: async (musicId: string) => {
    const res = await instance.delete(getMusicUrl(`/${musicId}`))
    return res.data
  },

  //PLAYLIST

  fetchPlaylists: async () => {
    const res = await instance.get(getMusicUrl('/playlists'))
    return res.data
  },

  fetchOnePlaylist:async (playlistId: string) => {
    const res = await instance.get(getMusicUrl(`/playlists/${playlistId}`))
    return res.data
  },

  createPlaylist: async (data: ICreatePlaylist) => {
    const res = await instance.post(getMusicUrl(`/playlists`), data)
    return res.data
  },

  updatePlaylist: async (data: IUpdatePlaylist, playlistId: string) => {
    const res  = await instance.patch(getMusicUrl(`/playlists/${playlistId}`), data)
    return res.data
  },

  removePlaylist: async (playlistId: string) => {
    const res = await instance.delete(getMusicUrl(`/playlists/${playlistId}`))
    return res.data
  },

  toggleMusicToPlaylist: async (playlistId: string, data: IToggleMusicToPlaylist) => {
    const res = await instance.post(getMusicUrl(`/playlists/${playlistId}`), data)
  }
}