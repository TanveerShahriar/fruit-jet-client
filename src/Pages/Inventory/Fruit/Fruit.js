import React from 'react';
import './Fruit.css'

const Fruit = ({ fruit, handleDelete }) => {
    const {_id, name, supplier, quantity, price } = fruit;
    return (
        <tr>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{quantity}</td>
            {/* <td>{price}</td> */}
            <td><button className='btn btn-outline-danger'>...</button></td>
            <td><button className='btn btn-outline-danger' onClick={() => handleDelete(_id)}>X</button></td>
        </tr>
    );
};

export default Fruit;