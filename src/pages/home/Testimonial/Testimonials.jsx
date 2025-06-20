import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonials from "./testimonial"; 
import customerImg from '../../../assets/customer-top.png'

const Testimonials = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const cardWidth = 350;
    const totalCards = testimonials.length;

    // Scroll to specific card
    const scrollToIndex = useCallback((index) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: index * cardWidth,
                behavior: "smooth",
            });
            setActiveIndex(index);
        }
    }, [cardWidth]);

    // Next & Prev
    const handleNext = useCallback(() => {
        const next = (activeIndex + 1) % totalCards;
        scrollToIndex(next);
    }, [activeIndex, totalCards, scrollToIndex]);

    const handlePrev = useCallback(() => {
        const prev = (activeIndex - 1 + totalCards) % totalCards;
        scrollToIndex(prev);
    }, [activeIndex, totalCards, scrollToIndex]);

    // Auto Scroll
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <img src={customerImg} alt="" className="mx-auto h-16 mb-4" />
                <h2 className="md:text-3xl sm:text-2xl text-xl sm:leading-10 leading-6 font-extrabold text-secondary">What our customers are saying</h2>
                <p className="text-base-200 md:text-sm text-xs mt-2 md:mb-10 mb-6 max-w-3xl mx-auto">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>

                {/* Scroll Container */}
                <div>
                    {/* Cards Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-hidden scroll-smooth snap-x snap-mandatory p-4"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {testimonials.map((t, index) => {
                            const isActive = index === activeIndex;
                            const isSideCard =
                                index === (activeIndex + 1) % totalCards ||
                                index === (activeIndex - 1 + totalCards) % totalCards;

                            return (
                                <div
                                    key={index}
                                    className={`snap-center shrink-0 sm:max-w-[300px] max-w-[240px] mx-2 p-8 rounded-2xl shadow-md transition-all duration-500
                    ${isActive
                                            ? "bg-white opacity-100 -translate-y-3 z-10 shadow-xl"
                                            : isSideCard
                                            ? "bg-white lg:opacity-50 lg:translate-y-1 lg:z-0 opacity-100 -translate-y-3 shadow-xl z-10"
                                            : "bg-white lg:opacity-20 opacity-100 -translate-y-3 shadow-xl z-10"
                                        }`}
                                >
                                    <FaQuoteLeft className="text-teal-500 text-3xl mb-4 mt-1" />
                                    <p className="text-base-200 text-start text-sm mb-3">{t.message}</p>
                                    <div className="flex items-center border-t border-dashed border-secondary pt-3">
                                        <span
                                            className="w-10 h-10 bg-secondary  rounded-full"
                                        ></span>
                                        <div className="text-left ml-3">
                                            <h4 className="font-bold text-base text-secondary">{t.name}</h4>
                                            <p className="text-base-200 font-medium text-xs">{t.title}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="sm:mt-6 mt-2 flex items-center justify-center sm:gap-8 gap-4">
                    {/* Prev Button */}
                    <button
                        onClick={handlePrev}
                        className="bg-white text-secondary p-3 rounded-full shadow-md hover:bg-slate-100"
                    >
                        <FaChevronLeft/>
                    </button>
                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className={`h-2 w-2 rounded-full transition ${i === activeIndex ? "bg-secondary" : "bg-[#94c6cb]"
                                    }`}
                            ></button>
                        ))}
                    </div>
                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className=" bg-primary text-secondary p-3 rounded-full shadow-md hover:bg-[#b8eb66]"
                    >
                        <FaChevronRight />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
