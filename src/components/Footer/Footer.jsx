import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='bg-[#212529]'>
            <div className='my-container  py-[50px] lg:px-10'>
            <div className='grid lg:grid-cols-4 lg:gap-10'>
                <div className='text-[#fffc]'>
                    <h3 className='text-3xl'>Iranian Food Hub</h3>
                    <div className='mt-4 flex items-center gap-4'>
                        <a className='border p-3 bg-white rounded-full'><FaPhone className='text-lg text-[#212529]'></FaPhone></a>
                        <div>
                            <p>(98) 21 33 90 3895</p>
                            <p>(98) 3851 2536</p>
                        </div>
                    </div>
                    <div className='mt-4 flex items-center gap-4'>
                        <a className='border p-3 bg-white rounded-full'><FaMapMarkerAlt className='text-lg text-[#212529]'></FaMapMarkerAlt></a>
                        <div>
                            <p>Emam Khomaini Square
                               <br />
                                Building No. 3 <br />
                                Tehran</p>
                        </div>
                    </div>
                </div>
                <div className='text-[#fffc]'>
                    <h3 className='text-2xl '>Our Links </h3>
                    <ul className='mt-4 list-none space-y-2'>
                        <li ><Link to='/' >Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/Login'>Login</Link></li>
                    </ul>
                </div>
                <div className='text-[#fffc]'>
                    <h3 className='text-2xl '>Our Services </h3>
                    <ul className='mt-4 list-none space-y-2'>
                        <li ><Link to='/' >Fresh Healthy Food</Link></li>
                        <li><Link to='/'>24/7 Service</Link></li>
                        <li><Link to='/'>Quick Service</Link></li>
                        <li><Link to='/'>Traditional Cuisine</Link></li>
                    </ul>
                </div>
                <div className='text-[#fffc]'>
                    <h3 className='text-2xl '>Follow Us On  </h3>
                   <div className='mt-4 flex gap-4'>
                   <a href="#"><FaFacebook className='text-2xl'></FaFacebook></a>
                   <a href="#"><FaTwitter className='text-2xl'></FaTwitter></a>
                   <a href="#"><FaInstagram className='text-2xl'></FaInstagram></a>

                   </div>
                   
                </div>

            </div>

        </div>
        </section>
    );
};

export default Footer;