import {placeAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => placeAxiosService.get(urls.placeAPI.users),
    create: (user) => placeAxiosService.post(urls.placeAPI.users, user)
}

export {
    userService
}