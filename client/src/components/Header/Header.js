import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {chooseTheme} from "../../store";
import css from './header.module.css';
import './style.css'
import {authService} from "../../services";

const Header = () => {
    const {themeStatus} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    const userLogout = () => {
        authService.logout()
    }
    useEffect(() => {

    }, [])

    return (
        <>
            <div className={!themeStatus ? css.header : css.headerLight}>
                {localStorage.user &&
                    <div className={css.user_menu}>
                        <NavLink to="cars">Cars</NavLink>
                        <NavLink to="parks">Parks</NavLink>
                        <NavLink to="users">Users</NavLink>
                        <NavLink to="auth_user">My Page</NavLink>
                    </div>
                }
                <div>
                    <div className={css.toggleContainer}>
                        <span style={{color: !themeStatus ? "grey" : "yellow", fontSize: 18}}>☀︎</span>
                        <span className={css.toggle}>
                                <input
                                    checked={!themeStatus}
                                    onChange={() => dispatch(chooseTheme())}
                                    id="checkbox"
                                    className="checkbox"
                                    type="checkbox"/>
                                <label htmlFor="checkbox"/>
                            </span>
                        <span style={{color: !themeStatus ? "aqua" : "grey", fontSize: 18}}>☾</span>
                    </div>
                </div>

                <div>
                    {localStorage.user &&
                        <div>
                            <NavLink to="cars" onClick={() => userLogout()}>Logout</NavLink>
                        </div>
                    }
                    {!localStorage.user &&
                        <div>
                            <div>
                                <NavLink to="registration">Registration</NavLink>
                            </div>
                            <div>
                                <NavLink to="login">Log in</NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export {Header};