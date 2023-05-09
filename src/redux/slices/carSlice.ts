import {createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces/car.interface";
import {IError} from "../../interfaces/error.interface";

export interface IState {
    cars: ICar[],
    errors: IError,
    carForUpdate: ICar,
    trigger: boolean
}

const initialState: IState = {
    cars: [],
    errors: null,
    carForUpdate: null,
    trigger: false

}
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {}
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}