import {instance} from "./api"
import {UserType} from "../types/types"

export type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export const usersApi = {
    async getUsers(currentPage = 1, pageSize = 50) {
        return await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    async follow(userId: number) {
        return await instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
    async unfollow(userId: number) {
        return await instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data)
    }
}