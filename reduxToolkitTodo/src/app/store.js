//steps to make store  -- 1. configure store from redux toolkit , 2. make reducers , we can also say it slices , 3.

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/todoSlice';     //importing reducer

export const store = configureStore({
    reducer: todoReducer
})