import React from 'react';

import Notfound from '../../images/404  .png'

const NotFound = () => {
    return (
        <div>
            <img src={Notfound} className='img-fluid' alt="" />
            <br />

            <button className='btn btn-danger'>Go back</button>

        </div>
    );
};

export default NotFound;