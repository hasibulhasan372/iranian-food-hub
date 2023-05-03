import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const {error, status} = useRouteError()
    return (
        <div className='my-container h-screen justify-center items-center flex'>
           <div className='inline-block text-center'>
           <h2 className='text-4xl font-bold lg:mb-6'>Page not Found</h2>
           <h2 className='text-4xl font-bold lg:mb-6'>{error.message}</h2>
            <img className='lg:w-1/2 inline-block' src="https://i.ibb.co/YpDk8g7/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />
           </div>
            

        </div>
    );
};

export default Error;