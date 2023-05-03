import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import GoogleReg from '../../../components/GoogleReg/GoogleReg';
import GithubReg from '../../../components/GithubReg/GithubReg';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState(null)

    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            return setError('Password must be 6 characters or more.')
        }
        createUser(email, password)
        .then(result =>{
            const signUpUser = result.user;
            form.reset('');
        })
        .catch(error =>{
            return setError("Please input the valid email or password")
        })
        
    };
    

    return (
        <div className='my-container flex justify-center bg-[#b3c4ca] lg:pb-[100px]'>
        
        <div className=' lg:w-2/6 lg:mt-10 border rounded lg:p-6 bg-[#839da3] '>
        <Form onSubmit={handleSignUp}>
            <div className='w-full'>
                <label htmlFor="name" className='form-label-style '>Your name</label>
                <input type="text" name="name" id="name" placeholder='Your name' className=' form-input-style'  />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="photo" className='form-label-style '>Your Photo URL</label>
                <input type="text" name="photo" id="photo" placeholder='Your Photo URL' className=' form-input-style'  />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="email" className='form-label-style fill-important'>Your Email</label>
                <input type="email" name="email" id="email" placeholder='Your email Address' className=' form-input-style' required />
            </div>
            <div className='w-full mt-4'>
                <label htmlFor="password" className='form-label-style fill-important'>Your Password</label>
                <input type="password" name="password" id="password" placeholder='Your Password' className=' form-input-style' required />
            </div>
            <button type="submit" className='btn mt-4 capitalize text-lg font-semibold bg-[#4681f4] border-none hover:bg-[#1b62f0]'>Submit</button>
            <p className='text-red-900 mt-2 underline underline-offset-4 pb-1'>{error}</p>
            
        </Form>
        <div className='mt-4 border-b border-slate-600 lg:pb-4'>
                <p className='text-lg'>Already have an account? <Link to='/login' className='underline text-blue-700'>Login</Link></p>
            </div>
            <div className='lg:mt-6 space-x-4'>
                <p className='text-lg font-bold pb-4'>Or SignUp With</p>
                
                <div className='flex gap-4'>
                <GoogleReg></GoogleReg>
                <GithubReg></GithubReg>
                </div>

        </div>
        </div>
        
    </div>
    );
};

export default Register;