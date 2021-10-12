import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Service;