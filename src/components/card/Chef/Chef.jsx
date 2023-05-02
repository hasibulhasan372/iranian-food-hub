import React, { useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';

const Chef = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[]);

    return (
        <div className='container m-auto lg:mt-20'>
            <h2>Total Chef: {chefs.length}</h2>
            <div className='grid lg:grid-cols-3 lg:gap-10 '>
                {
                    chefs.map(chef => <ChefDetails
                    chef ={chef}
                    key={chef.id}
                    ></ChefDetails>)
                }
            </div>
        </div>
    );
};

export default Chef;