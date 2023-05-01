import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container lg:m-auto'>
            <div className="navbar bg-slate-200 ">
                <div className="">
                    <a className="btn btn-ghost normal-case lg:text-3xl">Iranian Food Hub</a>
                </div>
                <div className="flex-none lg:pl-[750px] lg:gap-32 gap-6 text-right">
                    <div className='space-x-10'>
                        <NavLink>Home</NavLink>
                        <NavLink>Blog</NavLink>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
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