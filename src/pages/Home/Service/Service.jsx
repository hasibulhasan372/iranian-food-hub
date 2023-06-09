import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Service = () => {
    const {loading} = useState(AuthContext)
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('https://iranian-food-hub-server-hasibulhasan372.vercel.app/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <section className='bg-[#1b4352]'>
            <div className='my-container pt-6 pb-8 lg:pb-16'>
             <div className='text-center'>
             <h4 className='text-[#cc3333] text-xl font-bold font-serif'>Our Services</h4>
            <h2 className='capitalize text-[#1ecb71] text-4xl font-bold my-4'>We are offering the best services </h2>
             </div>
            <div>
                {
                    loading ? 
                    <div className='flex justify-center'><div className="radial-progress text-primary" style={{"--value":70}}>70%</div></div>
                    :
                    <div className='grid lg:grid-cols-4 gap-4 lg:gap-8'>
                    {
                        services.map(service => <div key={service.id} className='border border-[#a17859] bg-[#eee4dd] p-2 lg:p-4 text-center space-y-4'>
                            <img className='w-1/12 lg:w-3/12 inline-block' src={service.icon} alt="" />
                            <h4 className='text-2xl font-bold'>{service.title}</h4>
                            <p>{service.details.slice(0,150)}...</p>
                        </div>)
                    }
                 </div>
                }
            </div>
        </div>
        </section>
    );
};

export default Service;