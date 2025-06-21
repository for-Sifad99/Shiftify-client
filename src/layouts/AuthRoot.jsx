import React from 'react';
import ShiftifyLogo from '../pages/shared/ShiftifyLogo/ShiftifyLogo';
import authImage from '../assets/authImage.png'
import { Outlet } from 'react-router';


const AuthRoot = () => {
    return (
        <section className="min-h-screen">
            <div className='py-10 w-fit'>
                <ShiftifyLogo />
            </div>

            <div className='hero'>
                <div className="flex-1 hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={authImage}
                    />
                    <div className='flex-1'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthRoot;