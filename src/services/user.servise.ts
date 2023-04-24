import {IRes} from "../types/response.type";
import {IUser} from "../interfaces/user.interface";

import {placeAxiosServise} from "./axios.servise";
import {urls} from "../configs/urls";

export const userServise = {
    getAll:():IRes<IUser[]> => placeAxiosServise.get(urls.placeAPI.users),
    create:(user:IUser):IRes<IUser> => placeAxiosServise.post(urls.placeAPI.users, user)
}