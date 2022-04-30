import React from 'react';
import './Fruit.css'

const Fruit = ({ fruit }) => {
    const { name, supplier, quantity, price } = fruit;
    return (
        <tr>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td><button className='btn btn-outline-danger'>DELETE</button></td>
        </tr>
    );
};

export default Fruit;