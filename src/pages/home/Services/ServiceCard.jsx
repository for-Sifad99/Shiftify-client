import React from 'react';

const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service;
    return (
        <div className="group bg-white hover:bg-[#caeb66] transition-colors duration-300 shadow-md p-8 rounded-lg text-center flex flex-col items-center justify-center h-full">
            <div className='bg-gradient-to-b from-[#f3f2fd] group-hover:to-[#caeb66] to-white p-5 rounded-full mb-4'>
                <Icon className="text-3xl group-hover:text-[#03373D] text-[#9bdb06]" />
            </div>
            <h3 className="text-xl font-bold text-[#03373D] mb-2">{title}</h3>
            <p className="text-[#606060] text-xs">{description}</p>
        </div>
    );
};

export default ServiceCard;
