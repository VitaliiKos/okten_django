import React from 'react';
import {useDispatch} from "react-redux";

import css from './car.module.css'
import {carDelete, carToUpdate} from "../../store";

const Car = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = useDispatch();

    return (
        <div className={css.car_item}>

            <div>{id}--{brand}--{year}--{price}</div>
            <div className={css.car_button}>
                <button onClick={() => dispatch(carDelete({id}))}>Delete</button>
                <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>

            </div>
        </div>
    );
};


export {Car};