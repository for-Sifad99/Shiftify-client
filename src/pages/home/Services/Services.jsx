import React from 'react';
import ServiceCard from './ServiceCard';
import services from './servicesData';

const Services = () => {
    return (
        <section className="md:my-14 sm:my-10 my-6 sm:mx-6 mx-4 md:py-16 sm:py-12 py-8 px-4 sm:px-10 md:px-12 lg:px-24 bg-secondary rounded-2xl">
            <div className="text-center md:mb-10 sm:mb-8 mb-6 max-w-3xl mx-auto">
                <h2 className="sm:text-4xl text-3xl font-bold text-white md:mb-4 mb-2">Our Services</h2>
                <p className="text-base-100 sm:text-sm text-xs">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="grid md:gap-6 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
