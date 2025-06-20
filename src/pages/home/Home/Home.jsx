import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowWorks/HowItWorks';
import Services from '../Services/Services';
import ClientLogos from '../ClientLogos/ClientLogos';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <div >
            <Banner />
            <HowItWorks />
            <Services />
            <ClientLogos />
            <Benefits />
            <BeMerchant />
        </div>
    );
};

export default Home;