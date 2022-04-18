// import {$axiosService} from "./axios.service";
//
// import {urls} from "../constants";
//
// const usersService = {
//     getAll:()=>$axiosService.get(urls.users).then(value => value.data),
//     create: (user) => $axiosService.post(`${urls.users}`, user).then(value =>
//         value.data
//         // console.log(value.data)
//     ),
//     // getById:(id)=>axiosService.get(`${urls.parks}/${id}`).then(value => value.data),
//     // deleteById:(id)=>axiosService.delete(`${urls.parks}/${id}/delete`).then(value => value.data),
//
//     // addCarByPark:(id)=>axiosService.post(`${urls.parks}/${id}/update`).then(value => value.data),
//     // partialUpdateById:(id)=>axiosService.patch(`${urls.parks}/${id}/partial_update`).then(value => value.data),
// }
//
// export {usersService}


import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getAll:()=>axiosService.get(`${urls.users}/otherusers`).then(value => value.data),
    create: (user) => axiosService.post(`${urls.users}`, user).then(value =>
        value.data
        // console.log(value.data)
    ),
    // getById:(id)=>axiosService.get(`${urls.parks}/${id}`).then(value => value.data),
    // deleteById:(id)=>axiosService.delete(`${urls.parks}/${id}/delete`).then(value => value.data),

    // addCarByPark:(id)=>axiosService.post(`${urls.parks}/${id}/update`).then(value => value.data),
    // partialUpdateById:(id)=>axiosService.patch(`${urls.parks}/${id}/partial_update`).then(value => value.data),
}

export {usersService}