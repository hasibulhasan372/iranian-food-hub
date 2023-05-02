import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='my-container lg:m-auto'>
            <div className="navbar bg-slate-200 ">
                <div className="">
                    <Link to='/' className="btn btn-ghost normal-case lg:text-3xl">Iranian Food Hub</Link>
                </div>
                <div className="flex-none lg:pl-[450px] lg:gap-32 gap-6 text-right">
                    <div className='space-x-10 text-lg font-semibold'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink>Blog</NavLink>
                    </div>
                    <div className="dropdown dropdown-end">
                            {
                                user ?
                                 <div className='flex gap-2 items-center'>
                                <p className='lowercase'>{user.email}</p>
                                <button className='bg-purple-600 rounded text-white p-2 text-sm' onClick={handleLogOut}>Logout</button>
                                </div> : 
                            <Link to='/login'><FaUserCircle className='text-3xl'></FaUserCircle></Link>

                            }
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;