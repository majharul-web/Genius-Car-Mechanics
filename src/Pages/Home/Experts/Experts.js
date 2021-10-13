import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';


const Experts = () => {
    const experts = [
        {
            img: mechanic1,
            name: 'Andrew Smith',
            expertize: '-Engine Expert-'
        },
        {
            img: mechanic2,
            name: 'John Anderson',
            expertize: '-Polish Expert-'
        },
        {
            img: mechanic3,
            name: 'Zakaria Smith',
            expertize: '-Coloring Expert-'
        },
        {
            img: mechanic4,
            name: 'Sakib Anderson',
            expertize: '-Alrounder Expert-'
        },
    ]

    return (
        <div id='experts' className='container'>
            <h2 className='text-primary'>Our Expert</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert expert={expert} key={expert.name}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;