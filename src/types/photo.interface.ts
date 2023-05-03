export interface IPhotoAbbr {
  id: string
  description: null | string,
  photoUrl: string,
  turnOffComments: boolean,
  createdAt: string,
  updatedAt: string
}

export interface IPhotoForAlbum {
  id: string
  photoUrl: string,
  description: string
}