import * as axios from "axios";


const instant = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "00adb810-fa6f-4427-8bcb-00218cb88b97"}
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 50) {
        return await instant.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}
export const followAPI = {
    async follow(userId) {
        return await instant.post(`follow/${userId}`)
    },

    async unfollow(userId) {
        return await instant.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instant.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instant.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instant.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instant.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

    }
}

export const authAPI = {
    me() {
        return instant.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instant.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instant.delete(`auth/login`)
    }
}


