import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fruit from '../Fruit/Fruit';
import './Inventory.css'

const Inventory = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])
    return (
        <Container>
            <table className='table text-start my-5'>
                <thead className='fs-4'>
                    <th>Name</th>
                    <th>Supplier</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        fruits.map(fruit => <Fruit
                            key={fruit._id}
                            fruit={fruit}
                        ></Fruit>)
                    }
                </tbody>
            </table>
        </Container>
    );
};

export default Inventory;