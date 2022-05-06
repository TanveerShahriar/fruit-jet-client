import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container>
            <div className='mt-5 banner-text w-100'>
                <h1>Words of <span className='text-danger'>Tanveer</span></h1>
                <p className='text-secondary fst-italic'>CEO, Fruit Jet</p>
                <p className="myself text-start shadow-lg">Fruit Jet is the place where we collect all the products directly from the farmers or producer. We also preserve these in a natural way so they are always at the best quality. We also have our own delivery service which helps customers to get these fresh and organic products very easily. As the products are directly collected from the producers, price is also reasonable. So, this is the best place to buy your fruit.</p>
            </div>
        </Container>
    );
};

export default About;