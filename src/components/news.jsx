import React from "react";
import BoxNews from "./boxnews";
import Bakso from '/src/assets/News/bakso.jpg';
import Garuda from '/src/assets/News/Garuda.jpg';
import souvenir from '/src/assets/News/souvenir.jpg';
import support from '/src/assets/News/support.jpg';

export default function News() {
    return (
        <div className="py-10 md:py-0 h-auto md:h-[550px] bg-gray-50 flex flex-col md:flex-row justify-center items-center">
            <BoxNews img={Bakso} subtitle={"Food & Beverage"} title={"BAKSO SOLO"} />
            <BoxNews img={Garuda} subtitle={"Retail"} title={"SERBA PRIMA SOUVENIR"} />
            <BoxNews img={souvenir} subtitle={"Lounge"} title={"GARUDA INDONESIA EXECUTIVE LOUNGE"} />
            <BoxNews img={support} subtitle={"Service"} title={"ANGKASA PURA SUPPORT"} />
        </div>
    );
}
