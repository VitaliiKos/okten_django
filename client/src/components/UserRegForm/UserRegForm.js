import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {userCreate} from "../../store";
import css from './useregform.module.css';

const UserRegForm = () => {

    const dispatch = useDispatch();
    const {handleSubmit, reset, register} = useForm();

    const submit = (data) => {
        dispatch(userCreate({data}))
        reset()
    }

    useEffect(() => {}, [])

    return (
        <div className={css.form}>
            <div className={css.form_title}><h2>Register Form</h2></div>
            <form onSubmit={handleSubmit(submit)}>

                <div className={css.blockInput}>
                    <label>Email: <input type="email" {...register('email')}/></label>
                    <label>Password: <input type="password" {...register('password')}/></label>
                    <label>Name: <input type="text" name={'profile.name'} {...register('profile.name')}/></label>
                    <label>Surname: <input type="text" name={'profile.surname'}{...register('profile.surname')}/></label>
                    <label>Born: <input type="text" name={'profile.born'}{...register('profile.born')}/></label>
                    <label>Phone: <input type="tel" name={'profile.phone'}{...register('profile.phone')}/></label>
                </div>
                <button> Create </button>
            </form>
        </div>
    );
};

export {UserRegForm};