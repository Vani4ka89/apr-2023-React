import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";

import {ICar, IError} from "../../interfaces";
import {carService} from "../../services";
import {AxiosError} from "axios";

export interface IState {
    cars: ICar[],
    errors: IError | null,
    carForUpdate: ICar | null,
    trigger: boolean
}

const initialState: IState = {
    cars: [],
    errors: null,
    carForUpdate: null,
    trigger: false
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll()
            return data
            console.log(data);
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAll
}

export {
    carReducer,
    carActions
}