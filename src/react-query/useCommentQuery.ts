import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {CommentService} from "../services/comment.service";
import {ICreateComment, IUpdateComment} from "../types/comments.interface";

export const useCommentQuery = (commentId?: string, postId?: string, photoId?: string, videoId?: string) => {
  // const getOneComment = useQuery({
  //   queryFn: () => CommentService.fetchOneComment(commentId!),
  //   queryKey: ['commentOne'],
  //   enabled: !!commentId
  // })

  const getPhotoComments = useQuery({
    queryFn: () => CommentService.fetchPhotoComments(photoId!),
    queryKey: ['photoComments', 'allPhotoComments'],
    enabled: !!photoId
  })

  const getVideoComments = useQuery({
    queryFn: () => CommentService.fetchVideoComments(videoId!),
    queryKey: ['videoComments', 'allVideoComments', videoId],
    enabled: !!videoId
  })

  const getPostComments = useQuery({
    queryFn: () => CommentService.fetchPostComments(postId!),
    queryKey: ['postComments', 'allPostComments', postId],
    enabled: !!postId
  })

  //
  const client = useQueryClient()

  const createComment = useMutation({
    mutationFn: (data: ICreateComment) => CommentService.createComment(data),
    onSuccess: () => {
      client.invalidateQueries(['photoComments', 'allPhotoComments'])
    }
  })

  const updateComment = useMutation({
    mutationFn: (data: IUpdateComment) => CommentService.updateComment(commentId!, data),
    onSuccess: () => {
      client.invalidateQueries(['photoComments', 'allPhotoComments'])
    }
  })

  const deleteComment = useMutation({
    mutationFn: (commentId: string) => CommentService.deleteComment(commentId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['photoComments', 'allPhotoComments']})
      client.invalidateQueries({queryKey: ['videoComments', 'allVideoComments']})
      client.invalidateQueries({queryKey: ['postComments', 'allPostComments']})
      if (photoId) getPhotoComments.refetch()
      if (videoId) getVideoComments.refetch()
      if (postId) getPostComments.refetch()
    }
  })
  //
  // //community
  // const getCommunityPosts = useQuery({
  //   queryFn: () => PostService.getPostsCommunityUrl(communityId!),
  //   queryKey: ['get all posts', 'in community', communityId],
  //   enabled: !!communityId
  // })

  return useMemo(() => ({createComment, getPhotoComments, updateComment, deleteComment}), [createComment, getPhotoComments, updateComment, deleteComment])
}