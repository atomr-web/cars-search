import React from "react";
import IconFlag from "../../components/icons/IconFlag";
import IconCar from "../../components/icons/IconCar";
import IconFactory from "../../components/icons/IconFactory";
import classNames from "classnames";
import style from "./CarsItem.module.css";

function CarsItem({ country, brand, model, vin, year }) {
    country = country || "Страна неизвестна";
    brand = country || "Неизвестный бренд, ";
    model = model || "Неизвестная модель";
    vin = vin || "VIN отсутствует";
    year = year || "Год неизвестен";

    return (
        <div className={classNames(style.item)}>
            <div className={classNames(style.title)}>
                <span>
                    {brand} {model}
                </span>
            </div>
            <div>
                <span className={classNames(style.icon)}>
                    <IconFlag />
                </span>
                <span>{country}</span>
            </div>
            <div>
                <span className={classNames(style.icon)}>
                    <IconCar />
                </span>
                <span>{vin}</span>
            </div>
            <div>
                <span className={classNames(style.icon)}>
                    <IconFactory />
                </span>
                <span>{year}</span>
            </div>
        </div>
    );
}

export default CarsItem;
