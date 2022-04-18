import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOtherUsers} from "../../store";
import {User} from "../User/User";

const Users = () => {

    const {users, token, users_payload} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getOtherUsers())
  },[dispatch, token])

    return (

        <div>
            <h1>User List</h1>
            { users_payload &&
                <div>
                    <h4>Total items - {users_payload.total_items}</h4>
                    <h4>Total pages - {users_payload.total_pages}</h4>
                </div>
            }


            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};


export {Users};