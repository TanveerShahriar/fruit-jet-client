import React from 'react';
import './Q2.css'

const Q2 = () => {
    return (
        <div className='ans p-3 mt-5 m-5 rounded text-white bg-danger'>
            <h3>When should we use NodeJS and when should we use MongoDB</h3>
            <p className='text-start'>
                We should use NodeJS if our server side code requires very few cpu cycles means it does not have heavy algorithms and also if you are from Javascript background and comfortable in writing single threaded code just like client side Javascript.
            </p>
            <p className='text-start'>
                We should use MongoDB when we want to store our data unstructured and we want to put our data json format which is very fast and efficient. Other advantages of mongodb is we can store a collection inside another collection and it supports more user at a time and also helpful if we have large number of fields.
            </p>
        </div>
    );
};

export default Q2;