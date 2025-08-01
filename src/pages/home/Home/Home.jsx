import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowWorks/HowItWorks';
import Services from '../Services/Services';
import ClientLogos from '../ClientLogos/ClientLogos';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';
import Testimonials from '../Testimonial/Testimonials';
import FAQ from '../FAQ/FAQ.jsx';

const Home = () => {
    return (
        <div >
            <Banner />
            <HowItWorks />
            <Services />
            <ClientLogos />
            <Benefits />
            <BeMerchant />
            <Testimonials />
            <FAQ />
        </div>
    );
};

export default Home;