import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faGoogle);

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-white'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
                <p className='mt-2 px-2 text-white fw-bold fs-3'>or</p>
                <div style={{ height: '1px' }} className='bg-white w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline-light d-block mx-auto my-2 google-btn'>
                    <FontAwesomeIcon icon={['fab', 'fa-google']} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;