import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { user, googleSingIn } = useAuth();
    return (
        <div>
            <h4 className='text-primary'>Please Login</h4>
            <button onClick={googleSingIn} className='btn btn-danger'>Google SingIn</button>
        </div>
    );
};

export default Login;