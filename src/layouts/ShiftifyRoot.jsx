import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Header/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;