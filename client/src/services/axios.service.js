import axios from "axios";

import baseURL from "../constants/urls";

const axiosService = axios.create({
    withCredentials: true,
    baseURL
})

export {axiosService}
