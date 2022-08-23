import AuthHeaderInterceptor from "./interceptors/AuthHeaderInterceptor"
import axios from "axios"

export const clientInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
}) 

clientInstance.interceptors.request.use(AuthHeaderInterceptor)