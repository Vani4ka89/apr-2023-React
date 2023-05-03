import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
}
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        createCar: (state, action) => {
            state.cars.push(action.payload)
        }
    }
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}