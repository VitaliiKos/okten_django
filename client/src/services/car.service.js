// import {$axiosService} from "./axios.service";
//
// import {urls} from "../constants";
//
// const carService = {
//     getAll:()=>$axiosService.get(urls.cars).then(value =>
//         value.data
//         // console.log(value.data)
//     ),
//     getById:(id)=>$axiosService.get(`${urls.cars}/${id}`).then(value =>
//         value.data
//         // console.log(value.data)
//     ),
//     updateById:(id)=>$axiosService.put(`${urls.cars}/${id}/update`).then(value => value.data),
//     partialUpdateById:(id)=>$axiosService.patch(`${urls.cars}/${id}/partial_update`).then(value => value.data),
//     deleteById:(id)=>$axiosService.delete(`${urls.cars}/${id}/delete`).then(value => value.data),
// }
//
// export {
//     carService
// }

import {axiosService} from "./axios.service";

import {urls} from "../constants";

const carService = {
    getAll:(page)=>axiosService.get(`${urls.cars}?page=${page}`).then(value =>
        value.data
    ),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`).then(value =>
        value.data
    ),
    updateById:(id, car)=>axiosService.patch(`${urls.cars}/${id}/update`, car).then(value => value.data),
    // partialUpdateById:(id)=>axiosService.patch(`${urls.cars}/${id}/partial_update`).then(value => value.data),
    deleteByID:(id)=>axiosService.delete(`${urls.cars}/${id}/delete`).then(value => value.data),
}

export {carService}