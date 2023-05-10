import {IRes} from "../types";
import {ICar} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class CarService {
    getAll(): IRes<ICar[]> {
        return axiosService.get(urls.cars)
    }

    create(car: ICar): IRes<ICar> {
        return axiosService.post(urls.cars, car)
    }

    updateById(id: number, car: ICar): IRes<ICar> {
        return axiosService.put(urls.byId(id), car)
    }

    deleteById(id: number): IRes<void> {
        return axiosService.delete(urls.byId(id))
    }
}

export const carService = new CarService();