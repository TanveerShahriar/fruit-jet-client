import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import Fruit from '../Fruit/Fruit';
import './Inventory.css'

const Inventory = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [fruits])

    const handleDelete = id => {
        swal("Are you sure you want to delete this?", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    const url = `http://localhost:5000/inventory/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            const remaining = fruits.filter(fruit => fruit._id !== id);
                            setFruits(remaining);
                        })
                }
            })
    }

    return (
        <Container>
            <table className='table table-hover text-start my-5'>
                <thead className='fs-4'>
                    <tr>
                        <th>Name</th>
                        <th>Supplier</th>
                        <th>Qty.</th>
                        <th>More</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fruits.map(fruit => <Fruit
                            key={fruit._id}
                            fruit={fruit}
                            handleDelete={handleDelete}
                        ></Fruit>)
                    }
                </tbody>
            </table>
        </Container>
    );
};

export default Inventory;