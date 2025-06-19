import React from "react";
import companyLogo1 from '../../../assets/brands/amazon.png';
import companyLogo2 from '../../../assets/brands/amazon_vector.png';
import companyLogo3 from '../../../assets/brands/casio.png';
import companyLogo4 from '../../../assets/brands/moonstar.png';
import companyLogo5 from '../../../assets/brands/randstad.png';
import companyLogo6 from '../../../assets/brands/start-people 1.png';
import companyLogo7 from '../../../assets/brands/start.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo6,
    companyLogo7,
];

const ClientLogos = () => {
    return (
        <section className="pb-12 max-w-5xl mx-auto md:px-0 px-4">
            <h2 className="text-lg sm:text-2xl font-bold text-center text-[#03373D] sm:mb-10 mb-6">We've helped thousands of sales teams</h2>

            <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={3000}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                breakpoints={{
                    240: { slidesPerView: 3, spaceBetween: 20 },
                    720: { slidesPerView: 4, spaceBetween: 15 },
                    1024: { slidesPerView: 5 , spaceBetween: 10 },
                }}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img
                            src={logo}
                            alt={`Company ${index + 1}`}
                            className="h-3 sm:h-5 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ClientLogos;
