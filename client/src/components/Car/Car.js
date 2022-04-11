import React from 'react';

const Car = ({car: {id, brand, year, price}}) => {
    return (
        <div>
            {id}--{brand}--{year}--price

        </div>
    );
};


export {Car};