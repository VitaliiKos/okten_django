import {axiosService} from "./axios.service";

import {urls} from "../constants";

const authService = {
    login: (user) => axiosService.post(`${urls.auth}`, user).then(
        (response) => {
            if (response.data.access) {
                localStorage.setItem("user", JSON.stringify(response.data.access));
            }
            return response.data;
        }
    ),
    logout() {
        localStorage.removeItem("user");
    },
    activate: (params) => axiosService.get(`${urls.auth}/activate/${params}`).then(value =>
        value.data
    ),
}

export {authService}
