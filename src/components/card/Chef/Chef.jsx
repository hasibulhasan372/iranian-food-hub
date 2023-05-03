import React, { useContext, useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Chef = () => {
    const [chefs, setChefs] = useState([]);
    const {loading} = useContext(AuthContext)

    useEffect(() => {
        
        fetch('https://iranian-food-hub-server-hasibulhasan372.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, []);

    return (
        <div className='my-container m-auto lg:mt-20 lg:pb-16'>
            <div className='lg:mb-10 text-center'>
            <h2 className=' mb-4 text-4xl font-bold font-serif'>Our Chefs</h2>
            <h4 className='text-xl font-bold'>The Best <span className='text-yellow-600'>Iranian Chefs</span> in Town</h4>
            </div>

            <div className='grid lg:grid-cols-3 lg:gap-y-6 '>
                {
                    chefs.map(chef => <ChefDetails
                        chef={chef}
                        key={chef.id}
                    ></ChefDetails>)
                }
            </div>
        </div>
    );
};

export default Chef;