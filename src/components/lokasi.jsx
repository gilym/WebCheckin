import React from "react";
import Box from "./box";
import { FaMoneyBillWave, FaUniversity, FaFileInvoiceDollar, FaRegFlag, FaInfoCircle, FaChargingStation } from "react-icons/fa"; // Assuming you're using react-icons

export default function Lokasi() {
    return (
        <div className="flex flex-col bg-gray-100 h-auto pb-10  pt-5">
            <div className="flex flex-col justify-center text-center mb-8">
                <h3 className="text-2xl">LOKASI INFO</h3>
                <h2 className="text-3xl font-bold">DI MANA MENEMUKANNYA</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-28 w-full max-w-5xl mx-auto">
                <Box icon={<FaMoneyBillWave />} name="Penukar Uang" />
                <Box icon={<FaUniversity />} name="ATM & Bank" />
                <Box icon={<FaFileInvoiceDollar />} name="Pengembalian Pajak" />
                <Box icon={<FaRegFlag />} name="Bebas Bea" />
                <Box icon={<FaInfoCircle />} name="Layanan Info" />
                <Box icon={<FaChargingStation />} name="Ruang Charging" />
            </div>
        </div>
    );
}
