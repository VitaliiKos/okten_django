import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const UserPage = () => {

    return (
        <div>
            <h1>User Page</h1>
            <div>
                <button><NavLink to="/auth_user">Main</NavLink></button>
            </div>
            <div>
                <button><NavLink to="/cars">Get all cars</NavLink></button>
            </div>
            <div>
                <button><NavLink to="/parks">Get all parks</NavLink></button>
            </div>
            <div>
                <button><NavLink to="/users">Get other users</NavLink></button>
            </div>

             <Outlet/>

        </div>
    );
};

export {UserPage};