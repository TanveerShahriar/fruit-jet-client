import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <Container className='d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center my-4'>
            <div className='banner-text text-start my-4'>
                <h2>Grab Our</h2>
                <h1 className='text-danger fw-bolder'>Fresh Fruits</h1>
                <p className='text-secondary fs-4'>Best place for buying organic chemical free fruits. Buy fruits at the best deal and enjoy it.</p>
            </div>
            <div className='banner-image'>
                <img className='img-fluid' src={"https://raw.githubusercontent.com/TanveerShahriar/images/main/a11images/banner.jpg"} alt="banner" />
            </div>
        </Container>
    );
};

export default Home;