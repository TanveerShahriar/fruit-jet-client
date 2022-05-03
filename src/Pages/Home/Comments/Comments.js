import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Comment from '../Comment/Comment';
import './Comments.css'

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/comment')
        .then(res=> res.json())
        .then(data => setComments(data))
    },[])
    return (
        <Container className='banner-text mb-5'>
            <h1 className='text-danger mb-4'>Comments</h1>
            <div className='row row-cols-1 row-cols-lg-3 g-4'>
                {
                    comments.map(comment => <Comment
                        key={comment._id}
                        comment = {comment}
                    ></Comment>)
                }
            </div>
        </Container>
    );
};

export default Comments;