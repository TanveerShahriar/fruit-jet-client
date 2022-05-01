import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FruitCard.css'

const FruitCard = ({ fruit }) => {
    const { _id, name, supplier, image, price, quantity, description } = fruit
    const navigate = useNavigate();

    const navigateToDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div class="col text-start">
            <div class="card h-100 shadow">
                <img className='img-fluid mx-auto mb-3 card-img' src={image} alt="" />
                <div class="card-body">
                    <h2 class="card-title text-danger">{name}</h2>
                    <h4>Supplier : {supplier}</h4>
                    <h5>Quantity : {quantity}</h5>
                    <h5>Price : ${price}</h5>
                    <p class="card-text fs-5 text-secondary">{description}</p>
                    <button className='btn btn-outline-danger' onClick={() => {navigateToDetail(_id)}}>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default FruitCard;