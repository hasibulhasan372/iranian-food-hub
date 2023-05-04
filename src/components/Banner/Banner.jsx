import React from 'react';

const Banner = () => {
    return (
        <div className=' hero-banner'>
            <div className='bg-overly'>
            <h1 className='text-3xl lg:text-5xl text-[#ccdcd2] opacity-100 font-bold font-serif lg:py-10'>Iranian Food Hub</h1>
            <h2 className='text-xl lg:text-2xl font-bold text-[#1ecb71] py-3 lg:pb-2'> “Eat according to your own taste, but dress according to people’s taste”</h2>
            <p className='text-[#d7dde0] text-base lg:text-xl font-semibold'>"كول على ذوقك والبس على ذوق الناس"</p>
            </div>
        </div>
    );
};

export default Banner;