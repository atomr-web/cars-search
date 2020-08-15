import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "../features/cars/carsSlice";
import { paginationReducer } from "../features/pagination/paginationSlice";
import { searchFormReducer } from "../features/searchForm/searchFormSlice";

export default configureStore({
    reducer: {
        cars: carsReducer,
        pagination: paginationReducer,
        searchForm: searchFormReducer,
    },
});
