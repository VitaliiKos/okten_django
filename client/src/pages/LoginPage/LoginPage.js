import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {userAuth} from "../../store";

const LoginPage = () => {
    const {token, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    const {handleSubmit, reset, setValue, register} = useForm();
    const submit = (data) => {
        dispatch(userAuth({data}))
        reset()
    }
    useEffect(() => {
    }, [setValue, token, error])
    return (
        <div>
            <div><h2>Login Form</h2></div>
            {token ?
                <NavLink to="/auth_user">Go to your page</NavLink> :
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <label>Email: <input type="email" {...register('email')}/></label>
                        <label>Password: <input type="password" {...register('password')}/></label>
                    </div>

                    <button> Log in</button>
                </form>
            }
        </div>
    );
};

export {LoginPage};