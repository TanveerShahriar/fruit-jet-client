import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '300px'}} id='loader-container' className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Loading;