import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllParks} from "../../store";
import {AutoPark} from "../AutoPark/AutoPark";

const AutoParks = () => {
    const {parks, token, parks_payload, parks_list_page} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch();

    let new_page = 1;

    const PageNext = () => {
        try {
            new_page = `${parks_payload.next.split('?')[1].substr(-1,1)}`
        }catch {
            new_page = parks_list_page
        }
        dispatch(getAllParks(new_page))
    }

    const PagePrev = () => {
        try {
            new_page = `${parks_payload.prev.split('?')[1].substr(-1,1)}`
        }catch {
            new_page = 1
        }
        dispatch(getAllParks(new_page))
    }

    useEffect(()=>{
        dispatch(getAllParks(new_page))
  },[dispatch, new_page, token])

    return (
        <div>
            <h1>Auto parks</h1>
            {parks_payload &&
                <div>
                    <div>
                        <h4>Total items - {parks_payload.total_items}</h4>
                        <h4>Total pages - {parks_payload.total_pages}</h4>
                    </div>

                    {parks.map(park => <AutoPark key={park.id} park={park}/>)}

                    {parks_list_page > 1 &&
                        <button onClick={() => PagePrev()}>Prev</button>
                    }
                    {parks_list_page < parks_payload.total_pages &&
                        <button onClick={() => PageNext()}>Next</button>
                    }
                </div>
            }
        </div>
    );
};

export {AutoParks};