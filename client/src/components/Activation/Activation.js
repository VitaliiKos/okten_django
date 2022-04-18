import React from 'react';
import {useParams} from "react-router-dom";

const ActivePage = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h2>Ваш аккаунт успішно активований</h2>
            <button>Go main page</button>

        </div>
    );
};

export {ActivePage};