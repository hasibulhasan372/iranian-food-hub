import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { confirmPasswordReset } from 'firebase/auth';
import GoogleReg from '../../../components/GoogleReg/GoogleReg';
import GithubReg from '../../../components/GithubReg/GithubReg';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state ?.from ?.pathname || '/';

    const {logIn} = useContext(AuthContext)
    const handleLogIn = (e) =>{
        e.preventDefault();
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            form.reset('');
            navigate(from, {replace : true})
        })
        .catch(error =>{
            return setError('Wrong email or password ')
        })
    }

    return (
        <div className='my-container flex justify-center bg-[#b3c4ca] lg:pb-[200px]'>
            <div className=' lg:mt-10 border rounded lg:p-6 bg-[#839da3] '>
            <p className='text-lg font-bold mb-2'>Please Login</p>

            <Form onSubmit={handleLogIn}>
                <div className='w-full'>
                    <label htmlFor="email" className='form-label-style fill-important'>Your Email</label>
                    <input type="email" name="email" id="email" placeholder='Your email Address' className='form-input-style  ' required />
                </div>
                <div className='w-full mt-6'>
                    <label htmlFor="password" className='form-label-style fill-important'>Your Password</label>
                    <input type="password" name="password" id="password" placeholder='Your Password' className='form-input-style  ' required />
                </div>
                <button type="submit" className='btn mt-4 capitalize text-lg font-semibold bg-[#4681f4] border-none hover:bg-[#1b62f0]'>Submit</button>
                <p className='text-red-900 mt-2 underline underline-offset-4 pb-1'>{error}</p>
            </Form>
           
            <div className='mt-4  border-b border-slate-600 lg:pb-4'>
                    <p className='text-lg'>Don't have an account? <Link to='/register' className='underline text-blue-700'>Sign Up</Link></p>
                </div>
                <div className='lg:mt-4 space-x-4'>
                <p className='text-lg font-bold pb-4'>Or SignUp</p>
                
                <div className='flex gap-4'>
                <GoogleReg></GoogleReg>
                <GithubReg></GithubReg>
                </div>

        </div>
            
            </div>
            
        </div>
    );
};

export default Login;