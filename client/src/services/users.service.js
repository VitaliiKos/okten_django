import {axiosService} from "./axios.service";
import {urls} from "../constants";
import authHeader from "./auth-header";

const usersService = {
    getAll: () => axiosService.get(`${urls.users}/otherusers`, {headers: authHeader()}).then(value => value.data),
    create: (user) => axiosService.post(`${urls.users}`, user).then(value => value.data),
    addAvatar: (formData) => axiosService.patch(`${urls.users}/avatar`, formData, {headers: authHeader()}).then(value => value.data),
}


export {usersService}