import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FruitCard from '../FruitCard/FruitCard';
import './HomeFruits.css'

const HomeFruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory?limit=${6}`)
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])

    return (
        <Container className='banner-text'>
            <h1 className='my-5'>Our <span className='text-danger'>Products</span></h1>
            <div className='row row-cols-1 row-cols-lg-3 g-4 mb-5'>
                {
                    fruits.map(fruit => <FruitCard
                        key={fruit._id}
                        fruit={fruit}
                    ></FruitCard>)
                }
            </div>
        </Container>
    );
};

export default HomeFruits;