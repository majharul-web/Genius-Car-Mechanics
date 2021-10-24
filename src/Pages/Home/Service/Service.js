import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p className='px-3'>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className='btn btn-warning fw-bold'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;