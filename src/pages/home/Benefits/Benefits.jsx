import React from "react";
import benefits from "./benefitsData";

const Benefits = () => {
    return (
        <section className="sm:py-12 py-8 border-t-2 border-b-2 border-dashed border-[#03373D] max-w-5xl mx-auto sm:px-6 px-4">
            <div className="flex flex-col gap-6 text-secondary">
                {benefits.map((item, index) => (
                    <div
                        data-aos="flip-left"
                        key={index}
                        className="card sm:card-side items-center border border-gray-200  bg-[#f7f8f8]"
                    >
                        <figure className="p-6">
                            <img src={item.image} alt={item.title} className="object-cover max-h-[100px] w-full" />
                        </figure>

                        <div className="hidden sm:block border-r-2 border-dashed border-secondary ml-4 mr-8 my-8"></div>
                        <div className="sm:hidden w-[80%] border-b-2 border-dashed border-secondary"></div>

                        <div className="card-body sm:w-2/3 p-6 flex justify-center">
                            <div>
                                <h3 className="card-title font-bold md:text-2xl text:xl mb-1">{item.title}</h3>
                                <p className="md:text-sm text-xs text-base-200">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
