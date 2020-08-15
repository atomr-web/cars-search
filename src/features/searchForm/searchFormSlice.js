import { createSlice } from "@reduxjs/toolkit";

export const searchFormSlice = createSlice({
    name: "searchform",
    initialState: {
        query: "",
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
    },
});

const { setQuery } = searchFormSlice.actions;

export const searchHandler = (query) => (dispatch) => {
    dispatch(setQuery(query));
};

export const selectSearchForm = (state) => state.searchform;
export const searchFormReducer = searchFormSlice.reducer;
