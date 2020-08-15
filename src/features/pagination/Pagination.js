import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPagination, setPage } from "./paginationSlice";
import classNames from "classnames";
import style from "./Pagination.module.css";

function Pagination() {
    const dispatch = useDispatch();
    const { pager, loading, isNotFoundItems } = useSelector(selectPagination);

    if (!loading && Object.keys(pager).length > 0 && !isNotFoundItems) {
        const btn = classNames(style.button);
        const btnDisabled = classNames(style.disabled);
        const btnActive = classNames(style.active);
        const btnLeft = classNames([btn, pager.currentPage === 1 && btnDisabled]);
        const btnRight = classNames([btn, pager.currentPage === pager.totalPages && btnDisabled]);

        return (
            <div className={classNames(style.pagination)}>
                <button className={btnLeft} onClick={() => dispatch(setPage(1))}>
                    В начало
                </button>
                <button
                    className={btnLeft}
                    onClick={() => dispatch(setPage(pager.currentPage - 1))}
                >
                    Пред.
                </button>
                {pager.pages.map((page, idx) => (
                    <button
                        key={idx}
                        className={classNames(btn, pager.currentPage === page && btnActive)}
                        onClick={() => dispatch(setPage(page))}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className={btnRight}
                    onClick={() => dispatch(setPage(pager.currentPage + 1))}
                >
                    След.
                </button>
                <button className={btnRight} onClick={() => dispatch(setPage(pager.totalPages))}>
                    В конец
                </button>
            </div>
        );
    } else return null;
}

export default Pagination;
