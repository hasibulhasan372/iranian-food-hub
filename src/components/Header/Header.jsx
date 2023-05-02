import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
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
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                            <Link to='/login'><FaUserCircle className='text-3xl'></FaUserCircle></Link>

                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile

                                </a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;