import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AddComment from '../AddComment/AddComment';
import Comment from '../Comment/Comment';
import './Comments.css'

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetch('https://blooming-reef-45045.herokuapp.com/comment')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [refresh])
    return (
        <Container className='banner-text mb-5'>
            <h1 className='text-danger mb-4'>Comments</h1>
            <div className='row row-cols-1 row-cols-lg-3 g-4'>
                {
                    comments.map(comment => <Comment
                        key={comment._id}
                        comment={comment}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    ></Comment>)
                }
            </div>
            <AddComment
                refresh = {refresh}
                setRefresh = {setRefresh}
            >
            </AddComment>
        </Container>
    );
};

export default Comments;