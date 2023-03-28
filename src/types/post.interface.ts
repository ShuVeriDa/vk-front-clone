import {IUserAbbr} from "./user.interface";
import {ICommunityAbbr} from "./community.interface";
import {ICommentsAbbr} from "./comments.interface";

export interface IPost {
  id: string,
  text: string,
  imageUrl: string | null,
  musicUrl: string | null,
  videoUrl: string | null,
  views: number,
  reposts: number,
  favorites: number,
  rating: number,
  turnOffComments: boolean,
  createdAt: string,
  updatedAt: string,
  community: ICommunityAbbr | null,
  user: IUserAbbr,
  comments: ICommentsAbbr[]
}
