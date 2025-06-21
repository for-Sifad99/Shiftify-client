import React from 'react';

const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service;
    return (
        <div className="group bg-white hover:bg-primary transition-colors duration-300 shadow-md p-8 rounded-lg text-center flex flex-col items-center justify-center h-full">
            <div className='bg-gradient-to-b from-base-300 group-hover:to-primary to-white p-5 rounded-full mb-4'>
                <Icon className="text-3xl group-hover:text-secondary text-[#9bdb06]" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
            <p className="text-base-200 text-xs">{description}</p>
        </div>
    );
};

export default ServiceCard;
