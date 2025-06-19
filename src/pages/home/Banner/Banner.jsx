import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';

const Banner = () => {
    return (
        
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            <div >
                <img src={bannerImg1} alt='Banner first image'/>
            </div>
            <div>
                <img src={bannerImg2} alt='Banner second image' />
            </div>
            <div>
                <img src={bannerImg3} alt='Banner third image' />
            </div>
        </Carousel>
    );
};

export default Banner;