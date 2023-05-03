import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    comments: []
}
const slice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload
        }
    }
});

const {reducer: commentReducer, actions} = slice;

const commentActions = {
    ...actions
}

export {
    commentReducer,
    commentActions
}