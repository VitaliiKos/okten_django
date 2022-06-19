import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllParks} from "../../store";
import {AutoPark} from "../AutoPark/AutoPark";
import css from './autoparks.module.css'
import {CarCreateForm} from "../CarCreateForm/CarCreateForm";
import {ParkCreateForm} from "../ParkCreateForm/ParkCreateForm";

const AutoParks = () => {
    const {parks, token, parks_payload, parks_list_page, parkIdToAddCar} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch();

    let new_page = 1;

    const PageNext = () => {
        try {
            new_page = `${parks_payload.next.split('?')[1].substr(-1, 1)}`
        } catch {
            new_page = parks_list_page
        }
        dispatch(getAllParks(new_page))
    }

    const PagePrev = () => {
        try {
            new_page = `${parks_payload.prev.split('?')[1].substr(-1, 1)}`
        } catch {
            new_page = 1
        }
        dispatch(getAllParks(new_page))
    }

    useEffect(() => {
        dispatch(getAllParks(new_page))
    }, [dispatch, new_page, token])

    return (
        <div className={css.parkblock}>
            {parks_payload &&
                <div className={css.parkList}>
                    <h1>Auto parks</h1>
                    <ParkCreateForm/>
                    <div>
                        <h4>Total items - {parks_payload.total_items}</h4>
                        <h4>Total pages - {parks_payload.total_pages}</h4>
                    </div>

                    {parkIdToAddCar && <div><CarCreateForm/></div>}

                    {parks.map(park => <AutoPark key={park.id} park={park}/>)}

                    <div className={css.parkButton}>
                        {parks_list_page > 1 &&
                            <button onClick={() => PagePrev()}>Prev</button>
                        }
                        {parks_list_page < parks_payload.total_pages &&
                            <button onClick={() => PageNext()}>Next</button>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export {AutoParks};