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
      <section className='bg-[#1b4352]'>
          <div className='my-container m-auto pt-4 lg:pt-6  pb-10 lg:pb-16'>
            <div className='lg:mb-10 text-center'>
            <h2 className=' text-[#cc3333] text-xl font-bold font-serif'>Our Chefs</h2>
            <h4 className='capitalize text-[#1ecb71] text-xl lg:text-4xl font-bold my-4'>The Best <span className=' font-serif'>Iranian Chefs</span> in Town</h4>
            </div>
            <div>
            {
                loading ? 
                <div className='flex justify-center'><div className="radial-progress text-primary" style={{"--value":70}}>70%</div></div> : 

                <div className='grid lg:grid-cols-3 gap-y-4 justify-center lg:gap-y-6'>
                {
                    chefs.map(chef => <ChefDetails
                        chef={chef}
                        key={chef.id}
                    ></ChefDetails>)
                }
            </div>
            }
            </div>
        </div>
      </section>
    );
};

export default Chef;