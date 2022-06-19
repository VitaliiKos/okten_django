import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {userActivate} from "../../store";

const ActivePage = () => {
    const params = useParams();

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(userActivate(params.token))
        console.log(JSON.stringify(params.token))
    }, [dispatch, params])


    return (
        <div>
            <h2>Ваш аккаунт успішно активований</h2>
            <NavLink to="/login">log in your account</NavLink>
        </div>
    );
};

export {ActivePage};