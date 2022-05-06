import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './AddComment.css'

const AddComment = ({ refresh, setRefresh }) => {
    const [user] = useAuthState(auth);

    if (!user) {
        return <div className='border my-4 p-4 shadow-lg'>
            <h1>Please <span className='text-danger'>Login</span> To Add Your <span className='text-danger'>Comment</span></h1>
        </div>
    }

    const handleComment = event => {
        event.preventDefault();
        const name = user.displayName;
        const description = event.target.description.value;
        let picture = event.target.picture.value;
        if (!picture.length) {
            picture = "https://raw.githubusercontent.com/TanveerShahriar/images/main/a11images/default.jpg"
        }
        const comment = { name, description, picture };
        const url = "https://blooming-reef-45045.herokuapp.com/comment";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(!refresh);
            });
        toast("Comment Added")
        event.target.reset();
    }

    return (
        <Container>
            <h1 className='my-5'>Add <span className='text-danger'>Comments</span></h1>
            <div>
                <form onSubmit={handleComment} className="form-floating">
                    <textarea className='form-control h-100' name="description" id="floatingTextarea" cols="30" rows="10" required></textarea>
                    <label htmlFor="floatingTextarea">Drop a comment here</label>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" id="floatingPic" name='picture' />
                        <label htmlFor="floatingPic">Photo URL (Optional)</label>
                    </div>
                    <button className='btn btn-outline-danger mt-3 w-100 fs-3 fw-bold' type="submit">Submit</button>
                </form>
            </div>
        </Container>
    );
};

export default AddComment;