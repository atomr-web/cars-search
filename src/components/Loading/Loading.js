import React from "react";
import IconLoading from "../icons/IconLoading";
import classNames from "classnames";
import style from "./Loading.module.css";

function Loading() {
    return (
        <div className={classNames(style.loading)}>
            <IconLoading />
        </div>
    );
}

export default Loading;
