import React from 'react';
import CoverageMap from './CoverageMap';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const districts = useLoaderData();
    return (
        <div className="bg-white py-16 px-26 rounded-2xl">
            <h2 className="text-4xl font-extrabold mb-10 text-secondary">We are available in 64 districts</h2>
            {/* Search box will go here later */}
            <CoverageMap districts={districts} />
        </div>
    );
};

export default Coverage;
