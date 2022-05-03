import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import './MyItem.css'

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myinventory?email=${email}`;
            console.log(url);
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                console.log(data);
                setProducts(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [user])

    const navigateToDetail = id => {
        navigate(`/inventory/${id}`);
    }

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
                            const remaining = products.filter(fruit => fruit._id !== id);
                            setProducts(remaining);
                        })
                }
            })
    }

    if (products.length === 0) {
        return <Container className='banner-text'>
            <h1 className='mt-5 text-danger fw-bold'>You Didn't Added Any Product Yet</h1>
        </Container>
    }

    return (
        <Container className='table-responsive banner-text'>
            <h1 className='mt-3 text-danger fw-bold'>My Added Items</h1>
            <table className='table table-hover text-start my-5'>
                <thead className='fs-4'>
                    <tr>
                        <th>Name</th>
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>More</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td><button className='btn btn-outline-danger' onClick={() => { navigateToDetail(product._id) }}>...</button></td>
                                <td><button className='btn btn-outline-danger' onClick={() => handleDelete(product._id)}>X</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </Container>
    );
};

export default MyItem;