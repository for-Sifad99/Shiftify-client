import React from 'react';
import logo from '../../../assets/logo.png';

const ShiftifyLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-1' src={logo} alt="Shiftify website logo" />
            <h1 className='text-3xl -ml-[6px]'>Shiftify</h1>
        </div>
    );
};

export default ShiftifyLogo;