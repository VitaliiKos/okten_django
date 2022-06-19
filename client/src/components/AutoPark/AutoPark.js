import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {parkDelete, parkId} from "../../store";
import css from './autoPark.module.css'

const AutoPark = ({park: {id, name}}) => {
    const {parkIdToAddCar} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [dispatch, parkIdToAddCar])

    return (
        <>
            <div className={css.parkCard}>
                <h3>Park ID -- {id}</h3>
                <h3>Park name -- {name}</h3>

                <div className={css.park_button}>
                    <div>
                        <button onClick={() => dispatch(parkDelete({id}))}>Delete</button>
                    </div>

                    <div>
                        <button onClick={() => dispatch(parkId({id}))}>Add car to this park</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export {AutoPark};