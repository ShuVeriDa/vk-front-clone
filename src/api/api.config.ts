export const getPostsUrl = (string: string) => `/posts${string}`
export const getPostsCommunityUrl = (communityId: string, string: string) => `/posts/community/${communityId}/post${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getCommunityUrl = (string: string) => `/community${string}`
export const getPhotosUrl = (string: string) => `/photos${string}`
export const getCommentsUrl = (string: string) => `/comments${string}`
export const getPhotoAlbumsUrl = (string: string) => `/photos/albums${string}`