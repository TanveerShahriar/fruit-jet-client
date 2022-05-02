import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const quantity = parseFloat(event.target.quantity.value);
        const price = parseFloat(event.target.price.value);
        const email = event.target.email.value;
        const description = event.target.description.value;
        const image = event.target.image.value;

        if (quantity <= 0) {
            swal("Please enter a valid quantity");
        }
        else if (price <= 0) {
            swal("Please enter a valid price")
        }
        else {
            const fruit = { name, supplier, quantity, price, email, description, image };

            const url = "http://localhost:5000/inventory";
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(fruit)
            })
                .then(res => res.json())
                .then(data => {
                });
        }
        event.target.reset()
        toast("Item Added")
    }
    return (
        <div className='container bg-danger mx-auto my-5 py-5 rounded login-form'>
            <h2 className='text-white text-center mt-2'>Add Item</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicProduct">
                    <Form.Control type="text" placeholder="Enter Product Name" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSupplier">
                    <Form.Control type="text" value={user.displayName} name="supplier" required readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="number" placeholder="Enter Quantity" name="quantity" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" placeholder="Enter Price" name='price' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" value={user.email} name="email" required readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control type="text" placeholder="Description" name='description' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Control type="text" placeholder="Image URL" name="image" required />
                </Form.Group>

                <Button variant="outline-light" type="submit">
                    ADD
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;