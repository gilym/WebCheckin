import React from "react";
import Cendrawasih from '/src/assets/cendrawasih.png';

export default function Info2(){
    return(
        <div className="flex flex-col md:flex-row h-auto pb-16 md:pb-14   bg-white justify-center pt-16">

            <div className="text-left mb-4 text-blue-800 mx-auto md:mx-0">
                <h3 className="text-md md:text-lg">Nikmati Waktu Anda di</h3>
                <h2 className="text-2xl md:text-3xl font-bold">Frans Kaisiepo Papua</h2>
                <hr className="my-2"/>
                <p className="text-black">
                Apakah Anda sedang berangkat atau tiba, selalu ada <br /> sesuatu yang besar yang terjadi di Bandara Frans <br /> Kaisiepo Papua.
                </p>
            </div>

            <div className="mx-0 md:mx-10">
                <ul class="">
                    <li class="before:content-['>'] before:pr-2"><a class="text-blue-500 hover:text-blue-700">Status penerbangan</a></li>
                    <li class="before:content-['>'] before:pr-2"><a class="text-blue-500 hover:text-blue-700">Panduan Penerbangan</a></li>
                    <li class="before:content-['>'] before:pr-2"><a class="text-blue-500 hover:text-blue-700">Berbelanja & Makan malam</a></li>
                    <li class="before:content-['>'] before:pr-2"><a class="text-blue-500 hover:text-blue-700">Peta & arah</a></li>
                </ul>
            </div>

            <div>
                <img src={Cendrawasih}  alt=" Burung Cendrawasih" className="hidden md:flex w-80 h-52" />
            </div>

        </div>
    )
}