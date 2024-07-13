import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaSuitcaseRolling } from 'react-icons/fa';

export default function Info1() {
    const handleClick = (section) => {
        console.log(`You clicked ${section}`);
    }

    return (
        <div className="h-48 flex flex-col justify-center items-center text-white text-sm md:text-2xl p-8" style={{ backgroundColor: '#66B82E' }}>
            <div className="text-center mb-4">
                <h3 className="text-lg">Mencari Informasi Berguna</h3>
                <h2 className="font-bold">Untuk Perjalananmu</h2>
            </div>
            <div className="flex items-center space-x-5 md:space-x-16">
                <div className="flex items-center cursor-pointer" onClick={() => handleClick('Departure')}>
                    <FaPlaneDeparture className="text-xl md:text-4xl" />
                    <div className="ml-2 text-center flex flex-row">
                        <h3 className="font-bold">Berangkat</h3>
                        <div className="ml-2 mt-1 md:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4 md:w-7 md:h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-l-2 border-white h-12 md:h-20"></div>

                <div className="flex items-center cursor-pointer" onClick={() => handleClick('Arrival')}>
                    <FaPlaneArrival className="text-xl md:text-4xl" />
                    <div className="ml-2 text-center flex flex-row">
                        <h3 className="font-bold">Tiba</h3>
                        <div className="ml-2 mt-1 md:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4 md:w-7 md:h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-l-2 border-white h-12 md:h-20"></div>

                <div className="flex items-center cursor-pointer" onClick={() => handleClick('Transit')}>
                    <FaSuitcaseRolling className="text-xl md:text-4xl" />
                    <div className="ml-2 text-center flex flex-row">
                        <h3 className="font-bold">Transit</h3>
                        <div className="ml-2 mt-1 md:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4 md:w-7 md:h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
