import React from 'react';

import css from './user.module.css'
import {AvatarCreateForm} from "../AvatarCreateForm/AvatarCreateForm";

const User = ({user: {avatar, born, id, name, phone, surname}}) => {
    return (

        <div className={css.userCard}>
            <AvatarCreateForm/>
            <img
                src="../../../../backend/storage/M_e_r_l_i_n@ukr.net/avatars/4d6d1d6e-c4c0-11ec-ba15-0242ac120006.IMG_20180528_165511_jpg"
                alt="avatar" width="100" height="50"/>
            <img
                src="../../../../backend/storage/M_e_r_l_i_n@ukr.net/avatars/4d6d1d6e-c4c0-11ec-ba15-0242ac120006.IMG_20180528_165511.jpg"
                alt="avatar" width="100" height="50"/>
            <img
                src="../../../../backend/storage/M_e_r_l_i_n@ukr.net/avatars/4d6d1d6e-c4c0-11ec-ba15-0242ac120006.IMG_20180528_165511_jpg.jpg"
                alt="avatar" width="100" height="50"/>
            <h3>Avatar - {avatar}</h3>
            <h3>id - {id}</h3>
            <h3>Name - {name}</h3>
            <h3>Surname - {surname}</h3>
            <h3>Born - {born}</h3>
            <h3>Phone - {phone}</h3>
        </div>
    );
};

export {User};