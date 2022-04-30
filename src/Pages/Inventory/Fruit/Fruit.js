import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fruit.css'

const Fruit = ({ fruit, handleDelete }) => {
    const { _id, name, supplier, quantity } = fruit;
    const navigate = useNavigate();

    const navigateToDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{quantity}</td>
            <td><button className='btn btn-outline-danger' onClick={() => {navigateToDetail(_id)}}>...</button></td>
            <td><button className='btn btn-outline-danger' onClick={() => handleDelete(_id)}>X</button></td>
        </tr>
    );
};

export default Fruit;