import React from 'react';
import './Q1.css'

const Q1 = () => {
    return (
        <div className='ans p-3 mt-5 m-5 rounded text-white bg-danger'>
            <h3>Difference between Javascript and NodeJS</h3>
            <p className='text-start'>
                Javascript is a programming language that can only be run in the browser where NodeJS is a Javascript runtime environment which helps to run Javascript outside the browser. Javascript is mostly used on the client side. On the other hand NodeJS is mostly used on the server side. Javascript can run in any browser engine but NodeJS can run only in V8 engine.  
            </p>
        </div>
    );
};

export default Q1;