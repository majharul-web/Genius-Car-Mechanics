import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://morning-badlands-38092.herokuapp.com/services/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (id) => {
        const url = `https://morning-badlands-38092.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('delete success');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }

            })

    }
    return (
        <div>
            <h3>Manage users</h3>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}</h4>
                    <button onClick={() => handleDelete(service._id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageUsers;