import React from 'react';
import './Q4.css'

const Q4 = () => {
    return (
        <div className='ans p-3 mt-5 m-5 rounded text-white bg-danger'>
            <h3>What is the purpose of JWT and how does it work</h3>
            <p className='text-start'>
                JWT or JSON Web Token is an open standard used to share security information between a client and a server. It creates a token for every user which have information of who issued the token, how long it is valid for and what permissions the client has been granted. By these information of the token server can decide whether the give the access or information to client or not. That's how JWT works and helps to maintain security.
            </p>
        </div>
    );
};

export default Q4;