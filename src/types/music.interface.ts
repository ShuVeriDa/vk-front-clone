import {ICommunity} from "./community.interface";
import {IUserAbbr} from "./user.interface";
import exp from "constants";

export interface IMusicAbbr {
  id: string,
  title: string,
  artist: string,
  musicUrl: string,
  createdAt: string,
  updatedAt: string
}

export interface IMusicFull extends IMusicAbbr {
  communities: ICommunity[]
  user: IUserAbbr
  musicAdders: IUserAbbr[]
}

export interface ISearchMusic {
  title?: string | null
  artist?: string
  limit?: number
  take?: number
}

export interface IUpdateMusic {
  title?: string
  artist?: string
}
export interface ICreateMusic {
  musicUrl: string
}

export interface IPlaylist {
  title: string
  description: string
  coverUrl: string
}

export interface IPlaylistResponse extends IPlaylist {
  music: IMusicFull[]
  updatedAt: string;
  createdAt: string
}

export interface IUpdatePlaylist extends IPlaylist {
  musicIds: string[]
}

export interface ICreatePlaylist extends IPlaylist {
  musicIds: string[]
}

export interface IToggleMusicToPlaylist {
  musicIds: string[]
}
