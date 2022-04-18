import {axiosService} from "./axios.service";
import {urls} from "../constants";
import authHeader from './auth-header';

const parkService = {
    getAll:(page)=>axiosService.get(`${urls.parks}?page=${page}`, {headers: authHeader() }).then(value =>
        value.data
        // console.log(token)
    ),
    getById:(id)=>axiosService.get(`${urls.parks}/${id}`).then(value => value.data),
    deleteById:(id)=>axiosService.delete(`${urls.parks}/${id}/delete`).then(value => value.data),

    addCarByPark:({parkIdToAddCar, data})=>axiosService.post(`${urls.parks}/${parkIdToAddCar}/add_car`, data).then(value =>
        value.data
    ),

    // partialUpdateById:(id)=>axiosService.patch(`${urls.parks}/${id}/partial_update`).then(value => value.data),
}

export {parkService}