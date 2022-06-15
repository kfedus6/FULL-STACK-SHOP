import axios, { AxiosInstance } from 'axios';

const $host: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}