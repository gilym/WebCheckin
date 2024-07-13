import React from "react";
import garudaLogo from '/src/assets/Airline/garuda.png';
import lionAirLogo from '/src/assets/Airline/lionair.png';
import batikAirLogo from '/src/assets/Airline/batikair.png';
import citilinkLogo from '/src/assets/Airline/citilink.png';
import sriwijayaLogo from '/src/assets/Airline/sriwijaya.png';

export default function Airline() {
    const logoClass = "h-16 w-auto sm:h-24 mx-2 object-contain"; // Anda dapat menyesuaikan ukuran sesuai kebutuhan

    return (
        <div className="flex flex-wrap items-center justify-center space-x-4 mt-10">
            <img src={garudaLogo} alt="Garuda Indonesia" className={logoClass} />
            <img src={lionAirLogo} alt="Lion Air" className={logoClass} />
            <img src={batikAirLogo} alt="Batik Air" className={logoClass} />
            <img src={citilinkLogo} alt="Citilink" className={logoClass} />
            <img src={sriwijayaLogo} alt="Sriwijaya Air" className={logoClass} />
        </div>
    );
}
