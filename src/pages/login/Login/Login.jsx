import React from 'react';
import { Form, Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-container grid lg:grid-cols-3 bg-[#b3c4ca] lg:pb-[200px]'>
            <h1>This is the login Page</h1>
            <div className=' justify-center '>
            <Form className='lg:mt-10 border rounded lg:p-6 bg-[#839da3]'>
                <div className='w-full'>
                    <label htmlFor="email" className='block mb-1 font-semibold'>Your Email</label>
                    <input type="email" name="email" id="email" placeholder='Your email Address' className='border border-slate-400 py-2 w-5/6 pl-2 rounded text-lg placeholder:text-black placeholder:font-semibold' />
                </div>
                <div className='w-full mt-6'>
                    <label htmlFor="password" className='block mb-1 font-semibold'>Your Password</label>
                    <input type="password" name="password" id="password" placeholder='Your Password' className='border border-slate-400 py-2 w-5/6 pl-2 rounded text-lg placeholder:text-black placeholder:font-semibold' />
                </div>
                <button type="submit" className='btn mt-4 capitalize text-lg font-semibold bg-[#4681f4] border-none hover:bg-[#1b62f0]'>Submit</button>

                <div className='mt-4'>
                    <p className='text-lg'>Don't have an account? <Link to='/register' className='underline text-blue-700'>Sign Up</Link></p>
                </div>
            </Form>
            </div>
            
        </div>
    );
};

export default Login;