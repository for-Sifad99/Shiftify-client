import React from 'react';
import location from '../../../assets/location-merchant.png';

const BeMerchant = () => {
    return (
        <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-secondary max-w-5xl lg:mx-auto md:px-10 md:py-16 sm:px-6 sm:py-10 p-4 rounded-4xl my-14 mx-4">
            <div className="hero-content flex-col sm:flex-row-reverse">
                <img
                    src={location}
                    className="rounded-lg sm:max-w-[40%] w-[300px] sm:mb-0 mb-4"
                />
                <div className='sm:max-w-[60%]'>
                    <h1 className="text-white sm:text-xl text-lg md:text-3xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="pb-6 pt-4 md:text-xs sm:text-[10px] text-[8px] text-base-100">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                   <div className='flex flex-col md:flex-row items-start gap-2'>
                        <button className="btn btn-primary lg:btn-md sm:btn-sm btn-xs text-black rounded-full">Become a Merchant</button>
                        <button className="btn btn-primary lg:btn-md sm:btn-sm btn-xs btn-outline hover:text-black rounded-full">Earn with Profast Courier</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;