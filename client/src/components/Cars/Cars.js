import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCars} from "../../store";
import {Car} from "../Car/Car";
import css from './car.module.css'
import {CarCreateForm} from "../CarCreateForm/CarCreateForm";

const Cars = () => {
    const {cars, cars_payload, cars_list_page, carForUpdate} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch();

    let new_page = 1;

    const PageNext = () => {
        try {
            new_page = `${cars_payload.next.split('?')[1].substr(-1,1)}`
        }catch {
            new_page = cars_list_page
        }
        dispatch(getAllCars(new_page))
    }

    const PagePrev = () => {
        try {
            new_page = `${cars_payload.prev.split('?')[1].substr(-1,1)}`
        }catch {
            new_page = 1
        }
        dispatch(getAllCars(new_page))
    }

    useEffect(()=>{
        dispatch(getAllCars(new_page))
  },[dispatch, new_page])

    return (
        <div className={css.cars_list}>
            {carForUpdate && <CarCreateForm/>}
            { cars_payload &&
                <div>
                    <div>
                        <h4>Total items - {cars_payload.total_items}</h4>
                        <h4>Total pages - {cars_payload.total_pages}</h4>
                    </div>
                    {cars.map(car => <Car key={car.id} car={car}/>)}

                    {cars_list_page > 1 &&
                        <button onClick={() => PagePrev()}>Prev</button>
                    }
                    {cars_list_page < cars_payload.total_pages &&
                        <button onClick={() => PageNext()}>Next</button>
                    }
                </div>
            }
        </div>
    );
};

export {Cars};