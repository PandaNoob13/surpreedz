import React from 'react'

const AuthHeaderInterceptor = (config) => {
    if (config.url !== '/auth/sign-in'){
        config.headers.Authorization = window.localStorage.getItem("token");
    } else if (window.sessionStorage.getItem('token') === ''){
        window.localStorage.clear()
    }
    return config;
}

export default AuthHeaderInterceptor
