import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCarToPark, updateCarById} from "../../store";

const CarCreateForm = () => {

    const {parkIdToAddCar, carForUpdate} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    const {handleSubmit, reset, setValue, register} = useForm();

    const submit = (data) => {
        if (carForUpdate) {
            dispatch(updateCarById({id: carForUpdate.id, car: data}))
            reset()
            return
        }
            dispatch(addCarToPark({parkIdToAddCar, data}))
            reset()
    }

     useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])
    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>

                <div>
                    <label>Brand: <input type="text" {...register('brand')}/></label>
                    <label>Price: <input type="text" {...register('price')}/></label>
                    <label>Year: <input type="text" {...register('year')}/></label>
                </div>

                <button>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {CarCreateForm};