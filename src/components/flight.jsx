import React from "react";
import { FaPlane, FaSearch } from 'react-icons/fa';

export default function Flight() {
    return (
        <div className="h-64 bg-blue-700 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl"> {/* Increased max-width */}
                <div className="mb-4 flex flex-col md:flex-row justify-between w-full md:w-64">
                    <button className="flex items-center px-4 py-2 mb-2 md:mb-0 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                        <FaPlane className="mr-2" /> Arrival
                    </button>
                    <button className="flex items-center px-4 py-2 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                        <FaPlane className="mr-2" /> Departure
                    </button>
                </div>
                <div className="mb-2">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                        <div className="relative flex-grow w-full">
                            <input
                                type="text"
                                id="flight-input"
                                className="block w-full pl-5 pr-14 py-4 text-lg text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter flight number"
                            />
                            <FaPlane className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-3xl" />
                        </div>
                        <div className="hidden md:block w-0.5 h-24 mx-2 border-l border-gray-300 border-dashed"></div> {/* Dashed Divider */}
                        <button className="flex items-center px-6 py-4 text-lg bg-white text-blue-700 font-bold rounded-r-lg hover:bg-blue-500 hover:text-white transition-colors">
                            Search <FaSearch className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
