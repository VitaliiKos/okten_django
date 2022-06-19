import React from 'react';
import {useDispatch} from "react-redux";

import {carDelete, carToUpdate} from "../../store";
import css from './car.module.css'

const Car = ({car}) => {
    const {id, brand, price, year, auto_park_id} = car
    const dispatch = useDispatch();

    return (
        <div className={css.car_item}>

            <div>id - {id}</div>
            <div>auto_park_id - {auto_park_id}</div>
            <div>Brand - {brand}</div>
            <div>Year - {year}</div>
            <div>Price - {price}</div>

            <div className={css.car_button}>
                <button onClick={() => dispatch(carDelete({id}))}>Delete</button>
                <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>

            </div>
        </div>
    );
};

export {Car};