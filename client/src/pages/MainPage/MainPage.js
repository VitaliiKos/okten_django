import React from 'react';
import {Outlet} from "react-router-dom";


const MainPage = () => {
    return (
        <div>
            <h2>Main Page</h2>
            <Outlet/>
        </div>
    );
};

export {MainPage};