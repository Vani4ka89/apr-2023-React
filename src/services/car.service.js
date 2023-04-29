import {carsAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => carsAxiosService.get(urls.carsAPI.cars),
    create: (car) => carsAxiosService.post(urls.carsAPI.cars, car),
    updateById: (id, car) => carsAxiosService.put(urls.carsAPI.byId(id), car),
    deleteById: (id) => carsAxiosService.delete(urls.carsAPI.byId(id))
}

export {
    carService
}