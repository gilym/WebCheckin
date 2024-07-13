import React from "react";
import { RiFlightTakeoffLine } from "react-icons/ri";
import garudaLogo from '/src/assets/Airline/garuda.png';
import lionAirLogo from '/src/assets/Airline/lionair.png';
import batikAirLogo from '/src/assets/Airline/batikair.png';
import citilinkLogo from '/src/assets/Airline/citilink.png';
import sriwijayaLogo from '/src/assets/Airline/sriwijaya.png';

export default function Penerbangan() {
    const jadwal = [
        {
            maskapai: garudaLogo,
            penerbangan: "GA-610",
            dari: "Makassar",
            jam: "03.00",
            status: "Landed"
        },
        {
            maskapai: lionAirLogo,
            penerbangan: "JT-712",
            dari: "Jayapura",
            jam: "07.00",
            status: "Landed"
        },
        {
            maskapai: sriwijayaLogo,
            penerbangan: "SJ-720",
            dari: "Makassar",
            jam: "04.00",
            status: "Canceled"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center px-4 py-10">
            <div className="relative w-full max-w-md rounded-2xl">
                <input
                    type="text"
                    id="flight-input"
                    className="block w-full pl-5 pr-14 py-4 text-lg text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nomor Penerbangan"
                />
                <RiFlightTakeoffLine className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-4xl" />
            </div>

            <div className="relative w-full md:w-[1000px] overflow-x-auto shadow-md rounded-xl sm:rounded-lg">
                <table className="w-full md:w-[1000px]  text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Our schedule
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Browse a list of our schedules designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.
                        </p>
                    </caption>
                    <thead className="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-2 py-3">Maskapai</th>
                            <th scope="col" className="px-2 py-3">Penerbangan</th>
                            <th scope="col" className="px-2 py-3">Dari</th>
                            <th scope="col" className="px-2 py-3">Jam</th>
                            <th scope="col" className="px-2 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {jadwal.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-2 py-4">
                                    <img src={item.maskapai} alt="Logo Maskapai" className=" h-10"/>
                                </td>
                                <td className="px-2 py-4">{item.penerbangan}</td>
                                <td className="px-2 py-4">{item.dari}</td>
                                <td className="px-2 py-4">{item.jam}</td>
                                <td className="px-2 py-4">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
