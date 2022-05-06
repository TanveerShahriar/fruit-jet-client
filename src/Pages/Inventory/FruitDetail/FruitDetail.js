import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import './FruitDetail.css'

const FruitDetail = () => {
    const updateRef = useRef('');
    const navigate = useNavigate();
    const [fruit, setFruit] = useState([]);
    const { fruitId } = useParams();
    const { image, name, supplier, price, quantity, description } = fruit;

    useEffect(() => {
        fetch(`https://blooming-reef-45045.herokuapp.com/inventory/${fruitId}`)
            .then(res => res.json())
            .then(data => setFruit(data));

    }, [fruitId]);

    const navigateToInventory = () => {
        navigate("/inventory");
    }

    const handleStockUpdate = event => {
        event.preventDefault();
        const { quantity, ...rest } = fruit;

        const update = parseInt(updateRef.current.value);

        if (update <= 0) {
            swal("Please Enter A Valid Amount To Restock");
        }
        else {
            const updatedFruit = { quantity: quantity + update, ...rest };
            setFruit(updatedFruit);


            const url = `https://blooming-reef-45045.herokuapp.com/inventory/${fruitId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedFruit)
            })
                .then(res => res.json())
                .then(data => {
                })
        }
        event.target.reset();
    }

    const handleDeliver = () => {

        const { quantity, ...rest } = fruit;
        if (quantity > 0) {
            const updatedFruit = { quantity: quantity - 1, ...rest };
            setFruit(updatedFruit);

            // send data to the server
            const url = `https://blooming-reef-45045.herokuapp.com/inventory/${fruitId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedFruit)
            })
                .then(res => res.json())
                .then(data => {
                })
        }
    }

    return (
        <div>
            <Container className='d-flex flex-column flex-lg-row justify-content-center align-items-center my-4'>
                <div className='fruit-img me-5'>
                    <img className='img-fluid' src={image} alt="banner" />
                </div>
                <div className='banner-text text-start m-4'>
                    <h1 className="text-danger">{name}</h1>
                    <h4>Supplier : {supplier}</h4>
                    <h5>Quantity : {quantity} KG</h5>
                    <h5>Price : ${price} per KG</h5>
                    <p className="card-text fs-5 text-secondary">{description}</p>
                    {
                        (!quantity) && <h3 className='text-danger'>Out of Stock</h3>
                    }
                    <div className='d-flex'>
                        <form className='d-flex' onSubmit={handleStockUpdate}>
                            <input className='form-control me-3' ref={updateRef} type="number" name="" id="" placeholder='Amount To Restock' required/>
                            <button className='btn btn-outline-danger me-3' type="submit">Restock</button>
                        </form>
                        <button className='btn btn-outline-danger' onClick={handleDeliver} disabled={!quantity}>Deliver</button>
                    </div>
                </div>
            </Container>
            <Container>
                <button className='btn btn-outline-danger my-5 py-3 w-100 fw-bold fs-5' onClick={navigateToInventory}>Manage Inventory</button>
            </Container>
        </div>
    );
};

export default FruitDetail;