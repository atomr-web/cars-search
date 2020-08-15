import React from "react";

import { throttle } from "throttle-debounce";
import { useDispatch } from "react-redux";
import { debounceSearch } from "../pagination/paginationSlice";
import { searchHandler } from "./searchFormSlice";
import classNames from "classnames";
import style from "./SearchForm.module.css";

function SearchForm() {
    const dispatch = useDispatch();

    return (
        <form
            action="#"
            onSubmit={(e) => e.preventDefault()}
            onChange={throttle(1000, false, () => dispatch(debounceSearch()))}
            className={classNames(style.form)}
        >
            <input
                type="text"
                onChange={(e) => dispatch(searchHandler(e.target.value))}
                className={classNames(style.input)}
                placeholder="Поиск"
            />
            <button type="submit" className={classNames(style.button)}>
                <svg className={classNames(style.icon)}>
                    <use xlinkHref="#icon-search">
                        <symbol id="icon-search" viewBox="0 0 20 20">
                            <path d="M12.9 14.32c-1.34 1.049-3.050 1.682-4.908 1.682-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8 0 1.858-0.633 3.567-1.695 4.925l0.013-0.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6v0c-3.314 0-6 2.686-6 6s2.686 6 6 6v0z"></path>
                        </symbol>
                    </use>
                </svg>
            </button>
        </form>
    );
}

export default SearchForm;
