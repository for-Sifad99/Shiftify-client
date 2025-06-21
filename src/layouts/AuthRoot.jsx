import React from 'react';
import ShiftifyLogo from '../pages/shared/ShiftifyLogo/ShiftifyLogo';
import authImage from '../assets/authImage.png'
import { Outlet } from 'react-router';


const AuthRoot = () => {
    return (
        <section className="min-h-screen">
            <div className='xl:px-0 sm:px-12 px-5 py-6 w-fit'>
                <ShiftifyLogo />
            </div>

            <div className='hero'>
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img
                        src={authImage}
                        className='flex-1 w-full max-w-[400px] sm:max-w-[500px] sm:w-[440px] md:w-[380px] lg:w-[40%] xl:w-[500px] '
                    />
                    <div className="w-full sm:w-[100%] md:w-[420px] lg:w-[46%] xl:w-[400px] max-w-[330px]">
                        <Outlet />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AuthRoot;