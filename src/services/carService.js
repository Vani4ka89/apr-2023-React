import {carAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => carAxiosService.get(urls.carAPI.cars),
    create: (car) => carAxiosService.post(urls.carAPI.cars, car),
    updateById: (id, car) => carAxiosService.put(urls.carAPI.byId(id), car),
    deleteById: (id) => carAxiosService.delete(urls.carAPI.byId(id))
}

export {
    carService
}