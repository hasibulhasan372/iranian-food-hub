import React from 'react';
import { Form, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='my-container grid lg:grid-cols-3 bg-[#b3c4ca] lg:pb-[100px]'>
        <h1>This is the Sign up Page</h1>
        <div className=' justify-center lg:mt-10 border rounded lg:p-6 bg-[#839da3] '>
        <Form>
            <div className='w-full'>
                <label htmlFor="name" className='form-label-style '>Your name</label>
                <input type="text" name="name" id="name" placeholder='Your name' className=' form-input-style' required />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="photo" className='form-label-style '>Your Photo URL</label>
                <input type="text" name="photo" id="photo" placeholder='Your Photo URL' className=' form-input-style' required />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="email" className='form-label-style '>Your Email</label>
                <input type="email" name="email" id="email" placeholder='Your email Address' className=' form-input-style' required />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="password" className='form-label-style '>Your Password</label>
                <input type="password" name="password" id="password" placeholder='Your Password' className=' form-input-style' required />
            </div>
            <button type="submit" className='btn mt-4 capitalize text-lg font-semibold bg-[#4681f4] border-none hover:bg-[#1b62f0]'>Submit</button>
            
        </Form>
        <div className='mt-4 border-b border-slate-600 lg:pb-4'>
                <p className='text-lg'>Already have an account? <Link to='/login' className='underline text-blue-700'>Login</Link></p>
            </div>
            <div className='lg:mt-6 space-x-4'>
                <p className='text-lg font-bold pb-4'>Or SignUp</p>
            <button className='border border-yellow-400 text-white font-semibold rounded px-4 py-2'>Google</button>
            <button className='border border-slate-500 text-white  font-semibold rounded px-4 py-2'>Github  </button>
        </div>
        </div>
        
    </div>
    );
};

export default Register;