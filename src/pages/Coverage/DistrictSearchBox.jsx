import React from 'react';
import { FaSearch } from 'react-icons/fa';

const DistrictSearchBox = ({ value, onChange, onSearch, onKeyDown }) => {
    return (
        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8 w-full flex">
            <div className="flex flex-col sm:flex-row justify-between w-full max-w-lg bg-[#f0f3f6] rounded-xl sm:rounded-full overflow-hidden">

                {/* 🔍 Icon + Input Field */}
                <div className="flex items-center bg-[#f0f3f6] p-4 sm:py-0">
                    <FaSearch className="text-lg text-gray-600 mr-2" />
                    <input
                        type="text"
                        placeholder="Search district name..."
                        className="w-full text-sm bg-[#f0f3f6] outline-none"
                        value={value}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                    />
                </div>

                {/* ✅ Button adjusts size depending on layout */}
                <button
                    className="bg-lime-400 text-black text-sm font-semibold px-6 py-4 sm:px-10 hover:bg-lime-500 transition-all rounded-t-none sm:rounded-full"
                    onClick={onSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default DistrictSearchBox;
