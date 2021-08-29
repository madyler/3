import axios, {AxiosResponse} from "axios";
import {PhotosType, ProfileType, UserType} from "../types/types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "00adb810-fa6f-4427-8bcb-00218cb88b97"}
});

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
type GeneralResponseType = {
    resultCode: number
    messages: Array<string>
    data: object
}
type SavePhotoResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
            photos: PhotosType
    }
}

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 50) {
        return await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    async follow(userId: number) {
        return await instance.post<GeneralResponseType>(`follow/${userId}`).then(res => res.data)
    },
    async unfollow(userId: number) {
        return await instance.delete<GeneralResponseType>(`follow/${userId}`).then(res => res.data)
    }
};

export const profileAPI = {
    getUserProfile<ProfileType>(userId: number) {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<GeneralResponseType>(`profile`, profile).then(res => res.data)
    },
    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<GeneralResponseType>(`profile/status`, {status: status}).then(res => res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<SavePhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
};

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: { id: number, email: string, login: string },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}
type LoginResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        userId: number
    }
}
type LogoutResponseType = {
    resultCode: number
    messages: Array<string>
    data: object
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`).then(res => res.data)
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`).then(res => res.data)
    }
};
