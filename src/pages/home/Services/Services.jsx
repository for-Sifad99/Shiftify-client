import React from 'react';
import ServiceCard from './ServiceCard';
import services from './servicesData';

const Services = () => {
    return (
        <section className="md:my-20 my-10 py-16 px-4 md:px-12 lg:px-24 bg-[#03373d] rounded-2xl">
            <div className="text-center mb-10 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
                <p className="text-[#DADADA] text-sm">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
