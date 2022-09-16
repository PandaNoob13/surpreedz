import AuthHeaderInterceptor from "./interceptors/AuthHeaderInterceptor"
import axios from "axios"

export const clientInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
}) 
clientInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
clientInstance.interceptors.request.use(AuthHeaderInterceptor)