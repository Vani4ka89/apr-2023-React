import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/userSlice";
import {commentReducer} from "./slices/commentSlice";
import {carReducer} from "./slices/carSlice";

const rootReducer = combineReducers({
    cars: carReducer,
    users: userReducer,
    comments: commentReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}