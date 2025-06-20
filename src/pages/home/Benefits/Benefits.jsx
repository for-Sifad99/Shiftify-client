// src/components/Benefits.jsx
import React from "react";
import benefits from "./benefitsData";

const Benefits = () => {
    return (
        <section className="pb-12 pt-10 max-w-5xl mx-auto md:px-0 px-4">
            <div className="border-t-2 border-dashed border-[#03373D] pb-16"></div>
            <div className="flex flex-col gap-6 text-[#03373D]">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        className="card sm:card-side items-center border border-gray-200  bg-[#f7f8f8]"
                    >
                        <figure className="p-6">
                            <img src={item.image} alt={item.title} className="object-cover h-full w-full" />
                        </figure>

                        <div className="hidden sm:block border-r-2 border-dashed border-[#03373D] ml-4 mr-8 my-8"></div>
                        <div className="sm:hidden w-[80%] border-b-2 border-dashed border-[#03373D]"></div> 

                        <div className="card-body sm:w-2/3 p-6 flex justify-center">
                        <div>
                                <h3 className="card-title font-bold md:text-2xl text:xl mb-1">{item.title}</h3>
                                <p className="md:text-sm text-xs text-[#606060]">{item.description}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
