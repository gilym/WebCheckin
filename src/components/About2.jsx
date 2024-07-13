import React from "react";
import Angkasa2 from '/src/assets/Angkasa2.png';
import { IoMdCall } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";

export default function About2() {
    return (
        <div className="flex flex-col md:flex-row justify-center space-y-6 h-auto pb-10 md:h-52 bg-blue-900">

            <div className="flex flex-row justify-center space-y-6 items-center">
                <img src={Angkasa2} className=" w-52 h-12 md:w-64 md:h-20" alt="" />
                <ul className="text-white ml-4">
                    <li><strong>Biak, Papua</strong></li>
                    <li>Indonesia</li>
                    <li>+62 981 22555</li>
                    <li>humas.bik@ap1.co.id</li>
                </ul>
            </div>
            
            {/* Divider */}
            <div className=" flex-row hidden md:flex justify-center items-center">
            <div className="border-l border-white h-40 mx-8"></div>
            </div>
            
            <div className="flex  flex-row justify-center items-center space-y-6 space-x-8 text-white">
                <div className="flex flex-row justify-center">
                    <div className="text-5xl">
                        <IoMdCall />
                    </div>
                    <div className="ml-2">
                        <h6>HOTLINE <b>KAMI</b> <br />
                            <span>172</span></h6>
                    </div>
                </div>
                <div className="flex flex-row justify-center space-x-3">
                    <div className="text-4xl">
                        <TfiWrite />
                    </div>
                    <div className="ml-2">
                        <h6>Tulis <b>Masukan</b> <br />
                            <span>cc172@ap1.co.id</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
