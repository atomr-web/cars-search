import React from "react";
import CarsItem from "./CarsItem";
import { useSelector } from "react-redux";

import { selectCars } from "./carsSlice";
import Loading from "../../components/Loading/Loading";
import style from "./Cars.module.css";

function Cars() {
    const { items, loading, isNotFoundItems } = useSelector(selectCars);

    if (loading) {
        return <Loading />;
    } else if (isNotFoundItems) {
        return <div>Автомобилей не найдено</div>;
    } else {
        return (
            <section className={style.cars}>
                {items.map((i) => {
                    return (
                        <CarsItem
                            key={i.id}
                            country={i.country}
                            brand={i.brand}
                            model={i.model}
                            vin={i.vin}
                            year={i.year}
                        />
                    );
                })}
            </section>
        );
    }
}

export default Cars;
