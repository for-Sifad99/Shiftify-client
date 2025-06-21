import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            delay: 100,
            offset: 100,
        });

        AOS.refresh();
    }, []);

    return null;
};

export default AOSInitializer;

