import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Fruit from '../Fruit/Fruit';
import './Inventory.css'

const Inventory = () => {
    const [fruits, setFruits] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    useEffect( () =>{
        fetch(`https://blooming-reef-45045.herokuapp.com/inventory?page=${page}`)
        .then(res => res.json())
        .then(data => setFruits(data));
    }, [page]);

    useEffect( () =>{
        fetch('https://blooming-reef-45045.herokuapp.com/fruitCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/5);
            setPageCount(pages);
        })
    }, [page])

    const handleDelete = id => {
        swal("Are you sure you want to delete this?", {
            buttons: ["No!", true],
        })
            .then(proceed => {
                if (proceed) {
                    const url = `https://blooming-reef-45045.herokuapp.com/inventory/${id}`;
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
        <Container className='table-responsive banner-text'>
            <h1 className='text-danger fw-bold mt-3'>Inventory</h1>
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
            <Container>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className='btn btn-outline-danger me-2'
                            key={number}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }
            </Container>
            <button className='btn btn-outline-danger my-5 py-3 w-100 fw-bold fs-5' onClick={navigateToAddItem}>Add New Item</button>
        </Container>
    );
};

export default Inventory;