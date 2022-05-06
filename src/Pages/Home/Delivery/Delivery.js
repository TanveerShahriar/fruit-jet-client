import React from 'react';
import { Container } from 'react-bootstrap';
import './Delivery.css'

const Delivery = () => {
    return (
        <Container className='d-flex flex-column flex-lg-row justify-content-center align-items-center my-4'>
            <div className='shadow rounded'>
                <img className='img-fluid rounded' src="https://raw.githubusercontent.com/TanveerShahriar/images/main/a11images/truck.gif" alt="truck" />
            </div>
            <div className='banner-text text-start m-4'>
                <h2>Our Own</h2>
                <h1 className='text-danger fw-bolder'>Delivery Service</h1>
                <p className='text-secondary fs-4'>Buy what you want and get them at door easily by our delivery service.</p>
            </div>
        </Container>
    );
};

export default Delivery;