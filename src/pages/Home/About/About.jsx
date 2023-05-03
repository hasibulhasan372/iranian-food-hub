import React from 'react';
import {FaUtensils, FaGlassCheers} from 'react-icons/fa'

const About = () => {
    return (
        <div className='my-container lg:pb-16'>
            <div className='grid lg:gap-10 lg:grid-cols-2 lg:items-center'>
                <div className='grid lg:gap-2 lg:grid-cols-2'>
                    <img className='about-img' src="https://i.ibb.co/phfGrQ8/8061856-jujeh-kabob-persian-chicken-kabobs-france-c-4702673bca714596acdd982c2ac0e091.webp" alt="" />
                    <img className='about-img' src="https://i.ibb.co/8DKdM2w/Kabab-Koobideh-Recipe-1.jpg" alt="" />
                    <img className='about-img' src="https://i.ibb.co/5FGnXts/Javaher-Polow.jpg" alt="" />
                    <img className='about-img' src="https://i.ibb.co/HG3N4vY/Persian-Tamarind-fish-11.webp" alt="" />
                </div>
                <div className=''>
                    <h4 className='text-[#cc3333] text-xl'>About Us</h4>
                    <h2 className='capitalize text-[#292929] text-4xl font-bold my-4'>Why we are the best</h2>
                    <p className='font-medium'>Iranian cuisine are the culinary traditions of Iran. Due to the historically common usage of the term "Persia" to refer to Iran in the Western world, it is alternatively known as Persian cuisine, despite Persians being only one of a multitude of Iranian ethnic groups who have contributed to Iran's culinary traditions.</p>
                    <div className='mt-4 flex gap-2 items-center'>
                        <a href="#" className=' p-4 border rounded-full bg-[#eedbcc]'><FaUtensils className='text-2xl'></FaUtensils></a>
                        <div>
                            <h5 className='text-2xl font-bold'>Buffet Service</h5>
                            <p className=''>Sample the entire menu at Old Hall Restaurant with a Persian inspired buffet-style culinary selection, including appetisers served at your table, for just £16.95 per person. </p>
                        </div>
                    </div>
                    <div className='mt-4 flex gap-2 items-center'>
                        <a href="#" className=' p-4 border rounded-full bg-[#eedbcc]'><FaGlassCheers className='text-2xl'></FaGlassCheers></a>
                        <div>
                            <h5 className='text-2xl font-bold'>Regular Service</h5>
                            <p className=''>Menu card server at Old Hall Restaurant with a Persian inspired regular culinary selection, including appetisers served at your table </p>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default About;