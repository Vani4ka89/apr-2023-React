import axios from "axios";

import {carsBaseURL, placeBaseURL} from "../constants/urls";

const carAxiosService = axios.create({baseURL: carsBaseURL})
const placeAxiosService = axios.create({baseURL: placeBaseURL})

export {
    carAxiosService,
    placeAxiosService
}