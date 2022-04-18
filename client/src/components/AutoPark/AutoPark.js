import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {parkDelete, parkId} from "../../store";
import css from './autoPark.module.css'
import {CarCreateForm} from "../CarCreateForm/CarCreateForm";

const AutoPark = ({park: {id, name}}) => {
    const {parkIdToAddCar} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
      },[dispatch, parkIdToAddCar])

    return (
        <>
            <div className={css.parkCard}>
                <NavLink to="/auth_user">Go home</NavLink> :
                <div>{id}--{name}</div>

                <div>
                    <button onClick={() => dispatch(parkDelete({id}))}>Delete</button>                       <button>Put</button>
                    <button>Patch</button>
                    <button>Detail</button>
                </div>

                {parkIdToAddCar ?
                    <div><CarCreateForm/></div>
                    :
                    <div>
                        <button onClick={() => dispatch(parkId({id}))}>Add car to this park</button>
                    </div>
                }

            </div>
        </>
    );
};

export {AutoPark};