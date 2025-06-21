import React from 'react';
import { useLocation } from 'react-router';

const LayoutWrapper = ({ children }) => {
    const location = useLocation();

    // Check if route includes "auth" (adjust if needed)
    const isAuthLayout = location.pathname.startsWith('/auth');

    const bgClass = isAuthLayout ? 'bg-white' : 'bg-base-100';

    return (
        <div className={`min-h-screen ${bgClass}`}>
            <div className="max-w-7xl mx-auto font-urbanist">
                {children}
            </div>
        </div>
    );
};

export default LayoutWrapper;
