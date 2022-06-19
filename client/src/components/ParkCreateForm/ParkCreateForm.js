import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {parkCreate} from "../../store";
import css from './parkcreateform.module.css';

const ParkCreateForm = () => {

    const dispatch = useDispatch();
    const {handleSubmit, reset, register} = useForm();

    const submit = (data) => {
        dispatch(parkCreate({data}))
        reset()
    }

    useEffect(() => {
    }, [])

    return (
        <div className={css.form}>
            <div><h2>Park Create Form</h2></div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Park name: <input type="text" {...register('name')}/></label>
                </div>

                <button> Create park</button>
            </form>
        </div>
    );
};

export {ParkCreateForm};