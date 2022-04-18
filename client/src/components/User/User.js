import React from 'react';
import {useSelector} from "react-redux";

const User = ({user: {avatar,born, id, name, phone, surname}}) => {

    return (
        <div>

            <h3>id - {id}</h3>
            <h3>Name - {name}</h3>
            <h3>Surname - {surname}</h3>
            <h3>Born - {born}</h3>
            <h3>Phone - {phone}</h3>
            <img src={avatar} alt="photo"/>

        </div>
    );
};

export {User};