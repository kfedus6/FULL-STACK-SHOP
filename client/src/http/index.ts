import axios, { AxiosInstance } from 'axios';

/*
const $host: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
*/

const $host: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
})

export {
    $host,
}