import React from 'react'

const AuthHeaderInterceptor = (config) => {
    if (config.url !== '/auth/sign-in'){
        config.headers.Authorization = window.sessionStorage.getItem("token");
    } else if (window.sessionStorage.getItem('token') === ''){
        window.localStorage.clear()
        window.sessionStorage.clear()
    }
    return config;
}

export default AuthHeaderInterceptor
