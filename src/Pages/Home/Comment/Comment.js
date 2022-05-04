import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Comment.css'

const Review = ({ comment }) => {
    const [user] = useAuthState(auth);
    const { picture, name, description } = comment;
    return (
        <Col className='comment'>
            <Card className='h-100'>
                <Card.Body>
                    <div className='d-flex'>
                        <img src={picture} alt="" className='col-6 me-4' />
                        <p className='fs-2 text-color fw-bold'>{name}</p>
                    </div>
                    <p className='text-secondary text-start'>{description}</p>
                    {
                        (user?.displayName === name) ?
                            <div className='w-100 me-auto'>
                                <button className='btn btn-danger text-white text-decoration-none link'>Delete</button>
                            </div>
                            :
                            <></>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;