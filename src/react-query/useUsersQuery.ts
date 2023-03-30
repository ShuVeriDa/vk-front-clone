import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {UserService} from "../services/user.service";
import {useMemo} from "react";
import {IUserUpdate} from "../types/user.interface";

export const useUsersQuery = (userId: string | number) => {
  const getUserById = useQuery({
    queryFn: () => UserService.fetchUser(userId!),
    queryKey: ['user', userId],
  })

  const client = useQueryClient()

  const updateUser = useMutation({
    mutationFn: (data: IUserUpdate) => UserService.updateUser(userId, data),
    onSuccess: () => [
      client.invalidateQueries({queryKey: ['user', userId]})
    ]
  })

  return useMemo(() => ({
    getUserById,
    updateUser
  }), [getUserById, updateUser])
}
