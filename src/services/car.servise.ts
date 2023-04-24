import {IRes} from "../types/response.type";
import {ICar} from "../interfaces/car.interface";
import {carsAxiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

const carServise = {
    getAll: (): IRes<ICar[]> => carsAxiosServise.get(urls.carAPI.cars),
    create: (car: ICar): IRes<ICar> => carsAxiosServise.post(urls.carAPI.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => carsAxiosServise.put(urls.carAPI.byId(id), car),
    deleteById: (id: number): IRes<void> => carsAxiosServise.delete(urls.carAPI.byId(id))
}

export {
    carServise
}