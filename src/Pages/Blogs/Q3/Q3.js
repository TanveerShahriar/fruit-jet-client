import React from 'react';
import './Q3.css'

const Q3 = () => {
    return (
        <div className='ans p-3 mt-5 m-5 rounded text-white bg-danger'>
            <h3>Difference between SQL and NoSQL database</h3>
            <p className='text-start'>
                SQL databases are vertically scalable table based database which have predefined schema, while NoSQL databases are horizontally scalable document or key-value based database which have dynamic schemas for unstructured data. So, SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
        </div>
    );
};

export default Q3;