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
        <div className="col text-start">
            <div className="card h-100 shadow">
                <img className='img-fluid mx-auto mb-3 card-img' src={image} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-danger">{name}</h2>
                    <h4>Supplier : {supplier}</h4>
                    <h5>Quantity : {quantity} KG</h5>
                    <h5>Price : ${price} per KG</h5>
                    <p className="card-text fs-5 text-secondary">{description}</p>
                    <button className='btn btn-outline-danger' onClick={() => {navigateToDetail(_id)}}>Stock Update</button>
                </div>
            </div>
        </div>
    );
};

export default FruitCard;