import { createSlice } from "@reduxjs/toolkit";
import { paginationSlice } from "../pagination/paginationSlice";

export const carsSlice = createSlice({
    name: "cars",
    initialState: {
        items: [],
        loading: false,
        isNotFoundItems: false,
    },
    reducers: {
        setData: (state, action) => {
            state.items = action.payload;
            state.loaded = true;
        },
    },
    extraReducers: {
        [paginationSlice.actions.setPageOfItems]: (state, action) => {
            state.items = action.payload;
        },
        [paginationSlice.actions.setLoading]: (state, action) => {
            state.loading = action.payload;
        },
        [paginationSlice.actions.setIsNotFound]: (state, action) => {
            state.isNotFoundItems = action.payload;
        },
    },
});

export const selectCars = (state) => state.cars;

export const carsReducer = carsSlice.reducer;
