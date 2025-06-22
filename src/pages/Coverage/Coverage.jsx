import React from 'react';
import CoverageMap from './CoverageMap';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const districts = useLoaderData();
    return (
        <div className="bg-white sm:py-16 py-12 md:px-12 sm:px-6 px-4 lg:px-20 xl:px-26 rounded-2xl mt-6 mb-16">
            <h2 className="md:text-5xl sm:text-4xl text-2xl font-extrabold text-secondary">We are available in 64 districts</h2>
            {/* Search box will go here later */}
            <CoverageMap districts={districts} />
        </div>
    );
};

export default Coverage;
