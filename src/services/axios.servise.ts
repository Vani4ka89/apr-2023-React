import axios from "axios";

import {carsBaseURL, placeBaseURL} from "../configs/urls";

const placeAxiosServise = axios.create({baseURL: placeBaseURL})
const carsAxiosServise = axios.create({baseURL: carsBaseURL})

export {
    placeAxiosServise,
    carsAxiosServise
}