import React from 'react';
import logo from '../../../assets/logo.png';

const ShiftifyLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2 sm:w-fit w-[30px]' src={logo} alt="Shiftify website logo" />
            <h1 className='sm:text-3xl text-2xl font-extrabold -ml-3'>Shifȶi<span className='text-green-700 -ml-[3px]'>ƒ<span className='-ml-[2px]'>y</span></span></h1>
        </div>
    );
};

export default ShiftifyLogo;