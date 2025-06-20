import React from "react";
import works from "./worksData";

const HowItWorks = () => {
    return (
        <section className="pt-20 pb-10 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-left text-secondary mb-8">How it Works</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {works.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white hover:bg-primary transition duration-300 shadow-md rounded-lg p-6 flex flex-col items-baseline justify-start"
                        >
                            <item.icon className="text-4xl text-secondary mb-3" />
                            <h3 className="text-base font-bold text-secondary mb-1">{item.title}</h3>
                            <p className="text-xs text-base-200">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
