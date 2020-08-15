import { createSlice } from "@reduxjs/toolkit";
import { debounce } from "throttle-debounce";

import data from "../../data/data.json";
import { formatData } from "../../helpers/formatData";
import { updatePager } from "../../helpers/updatePager";

import { searchFormSlice } from "../searchForm/searchFormSlice";

export const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        loading: false,
        allItems: [],
        filtredItems: [],
        pageOfItems: [],
        isNotFoundItems: false,
        pager: {},
        searchQuery: "",
    },
    reducers: {
        setAllItems: (state, action) => {
            state.allItems = action.payload;
        },
        setFiltredItems: (state, action) => {
            state.filtredItems = action.payload;
        },
        setPageOfItems: (state, action) => {
            state.pageOfItems = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setPager: (state, action) => {
            state.pager = action.payload;
        },
        setIsNotFound: (state, action) => {
            state.isNotFoundItems = action.payload;
        },
    },
    extraReducers: {
        [searchFormSlice.actions.setQuery]: (state, action) => {
            state.searchValue = action.payload;
        },
    },
});

const {
    setIsNotFound,
    setAllItems,
    setFiltredItems,
    setPager,
    setLoading,
    setPageOfItems,
} = paginationSlice.actions;

export const setPage = (page) => (dispatch, getState) => {
    const items = getState().pagination.allItems;
    const filtredItems = getState().pagination.filtredItems;
    let pager = getState().pagination.pager;
    let pageOfItems;

    if (page < 1 || page > pager.totalPages) {
        return;
    }

    // get new page of all items/filtred items
    if (filtredItems.length) {
        pager = updatePager(filtredItems.length, page);
        pageOfItems = filtredItems.slice(pager.startIndex, pager.endIndex + 1);
    } else {
        pager = updatePager(items.length, page);
        pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    }

    dispatch(setPager(pager));
    dispatch(setPageOfItems(pageOfItems));
};

export const fecthData = (dispatch) => {
    dispatch(setLoading(true));

    const outputData = formatData(data);

    // emulate async
    setTimeout(() => {
        dispatch(setAllItems(outputData));
        dispatch(setPage(1));
        dispatch(setLoading(false));
    }, 1000);
};

export const debounceSearch = () =>
    debounce(500, (dispatch, getState) => {
        const value = getState().pagination.searchValue.toString().toLowerCase();
        const inData = getState().pagination.allItems;

        if (value.length) {
            const outData = inData.filter((i) => {
                // remove 'id' key from search
                let values = Object.values(i).slice(1);
                values = values.toString().toLowerCase().split(",").join(" ");

                if (values.includes(value)) {
                    return i;
                }
            });

            if (outData.length) {
                dispatch(setFiltredItems(outData));
                dispatch(setPage(1));
                dispatch(setIsNotFound(false));
            } else {
                dispatch(setIsNotFound(true));
            }
        } else {
            dispatch(setFiltredItems(inData));
            dispatch(setPage(1));
            dispatch(setIsNotFound(false));
        }
    });

export const selectPagination = (state) => state.pagination;

export const paginationReducer = paginationSlice.reducer;
