import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceID } = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceID}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div>
            <h2>Service:{service.name}</h2>
            <h3>this is booking : {serviceID}</h3>

        </div>
    );
};

export default Booking;