import React from "react";
import classNames from "classnames";
import style from "./Header.module.css";

function Header() {
    return (
        <header className={classNames(style.header)}>
            <h1>Поиск автомобилей</h1>
        </header>
    );
}

export default Header;
