import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from '../ClientLogos/ClientLogos';
import Benefits from '../Benefits/Benefits';

const Home = () => {
    return (
        <div >
            <Banner />
            <Services />
            <ClientLogos />
            <Benefits />
        </div>
    );
};

export default Home;