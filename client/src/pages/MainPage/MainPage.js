import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";


const MainPage = () => {
    useEffect(() => {
    }, [])
    return (
        <div>
            <h2>Main Page</h2>
            <Outlet/>
        </div>
    );
};

export {MainPage};