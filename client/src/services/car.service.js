import {axiosService} from "./axios.service";

import {urls} from "../constants";
import authHeader from "./auth-header";

const carService = {
    getAll: (page) => axiosService.get(`${urls.cars}?page=${page}`, {headers: authHeader()}).then(value =>
        value.data),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`, {headers: authHeader()}).then(value =>
        value.data),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}/update`, car, {headers: authHeader()}).then(
        value => value.data),
    deleteByID: (id) => axiosService.delete(`${urls.cars}/${id}/delete`, {headers: authHeader()}).then(value =>
        value.data),
}

export {carService}