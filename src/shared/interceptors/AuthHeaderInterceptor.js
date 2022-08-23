import React from 'react'

const AuthHeaderInterceptor = (config) => {
    if (config.url !== '/auth/sign-in' || config.url !== '/auth/sign-up' ){
        config.headers.Authorization = window.sessionStorage.getItem("token");
    } else if (window.sessionStorage.getItem('token') === ''){
        console.log('No token');
        window.sessionStorage.clear()
    }
    return config;
}

export default AuthHeaderInterceptor
