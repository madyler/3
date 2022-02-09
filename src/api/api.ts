import axios from "axios"


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "00adb810-fa6f-4427-8bcb-00218cb88b97"}
});

export type APIResponseType<D = {}, RC = ResultCodesEnum> ={
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

