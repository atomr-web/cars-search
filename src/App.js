import React, { useEffect } from "react";

import { fecthData } from "./features/pagination/paginationSlice";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import SearchForm from "./features/searchForm/SearchForm";
import Cars from "./features/cars/Cars";
import Pagination from "./features/pagination/Pagination";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fecthData);
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <main>
                <SearchForm />
                <Pagination />
                <Cars />
                <Pagination />
            </main>
        </div>
    );
}

export default App;
