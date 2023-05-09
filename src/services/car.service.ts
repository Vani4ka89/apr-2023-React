import {IRes} from "../types/response.type";
import {ICar} from "../interfaces/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(urls.cars),
    create: (car: ICar): IRes<ICar> => axiosService.post(urls.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(urls.byId(id), car),
    deleteById: (id: number): IRes<void> => axiosService.delete(urls.byId(id))
}

export {
    carService
}