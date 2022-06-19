import {axiosService} from "./axios.service";
import {urls} from "../constants";
import authHeader from './auth-header';

const parkService = {
    getAll: (page) => axiosService.get(`${urls.parks}?page=${page}`, {headers: authHeader()}).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.parks}/${id}`, {headers: authHeader()}).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.parks}/${id}/delete`, {headers: authHeader()}).then(value => value.data),
    addCarByPark: ({
                       parkIdToAddCar,
                       data
                   }) => axiosService.post(`${urls.parks}/${parkIdToAddCar}/add_car`, data, {headers: authHeader()}).then(value => value.data),
    create: (park) => axiosService.post(`${urls.parks}`, park, {headers: authHeader()}).then(value => value.data),
}

export {parkService}