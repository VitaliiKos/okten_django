import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';
import './style.css'

const Header = () => {

    return (
        <div>
        <div className={css.header}>
            {/*<div className={!themeStatus ? css.header : css.headerLight}>*/}
                <NavLink to="login">Log in</NavLink>
                <NavLink to="registration">Registration</NavLink>
                <NavLink to="parks">Parks</NavLink>
                <NavLink to="cars">Cars</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="auth_user">My Page</NavLink>

                <div>
                    {/*<div className={css.toggleContainer}>*/}
                    {/*    <span style={{color: !themeStatus ? "grey" : "yellow", fontSize: 18}}>☀︎</span>*/}
                    {/*    <span className={css.toggle}>*/}
                    {/*        <input*/}
                    {/*            checked={!themeStatus}*/}
                    {/*            onChange={() => dispatch(chooseTheme())}*/}
                    {/*            id="checkbox"*/}
                    {/*            className="checkbox"*/}
                    {/*            type="checkbox"/>*/}
                    {/*        <label htmlFor="checkbox"/>*/}
                    {/*    </span>*/}
                    {/*    <span style={{color: !themeStatus ? "aqua" : "grey", fontSize: 18}}>☾</span>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>
    );
};

export {Header};