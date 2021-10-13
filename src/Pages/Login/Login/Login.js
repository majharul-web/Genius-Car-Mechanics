import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { googleSingIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // console.log('came from', location.state.form);

    const redirect_url = location.state?.from || '/home'

    const handleGoogleSingIN = () => {
        googleSingIn()
            .then(result => {
                history.push(redirect_url)
            });
    }
    return (
        <div>
            <h4 className='text-primary'>Please Login</h4>
            <button onClick={handleGoogleSingIN} className='btn btn-danger'>Google SingIn</button>
        </div>
    );
};

export default Login;