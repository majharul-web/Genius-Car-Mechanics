import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-3'>
            <h3 className='text-primary'>Our Services</h3>
            <div className='services-container'>

                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;