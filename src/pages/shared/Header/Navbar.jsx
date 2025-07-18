import React from 'react';
import { NavLink } from 'react-router';
import ShiftifyLogo from '../ShiftifyLogo/ShiftifyLogo';

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-[#FFFFFF] my-4 rounded-2xl sm:pl-6 sm:pr-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden font-bold mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a href='/'>
                    <ShiftifyLogo />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end -mr-2">
                <button className="btn btn-primary text-black rounded-xl">Button</button>
            </div>
        </div>
    );
};

export default Navbar;