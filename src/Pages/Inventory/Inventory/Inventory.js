import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Fruit from '../Fruit/Fruit';
import './Inventory.css'

const Inventory = () => {
    const [fruits, setFruits] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [])

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

    const navigateToAddItem = () => {
        navigate("/additem")
    }

    return (
        <Container className='table-responsive'>
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
            <button className='btn btn-outline-danger my-5 py-3 w-100 fw-bold fs-5' onClick={navigateToAddItem}>Add New Item</button>
        </Container>
    );
};

export default Inventory;