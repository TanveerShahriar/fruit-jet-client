import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FruitDetail.css'

const FruitDetail = () => {
    const [fruit, setFruit] = useState([]);
    const {fruitId} = useParams()

    useEffect( () =>{
        fetch(`http://localhost:5000/inventory/${fruitId}`)
        .then(res=> res.json())
        .then(data => setFruit(data));

    }, [fruitId]);

    return (
        <div>
            This is Detail {fruitId} {fruit.name}
        </div>
    );
};

export default FruitDetail;