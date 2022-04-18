// import axios from "axios";
//
// import baseURL from "../constants/urls";
//
// const axiosService = axios.create({baseURL})
//
// export {axiosService}

import axios from "axios";

import baseURL from "../constants/urls";

const axiosService = axios.create({
    withCredentials:true,
    baseURL
})
axiosService.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${(localStorage.getItem('user')).slice(1,-1)}`
    // console.log(config)
    return config;
})

export {axiosService}
