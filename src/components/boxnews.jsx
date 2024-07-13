import React from "react";

export default function BoxNews({ img, subtitle, title }) {
    return (
        <div className="w-full md:w-80 pb-14 flex flex-col items-center text-center">
            <img className="w-64 h-64 object-cover mb-4" src={img} alt={title} />
            <h2 className="text-lg font-semibold text-neutral mb-2">{subtitle}</h2>
            <h1 className="text-2xl text-neutral font-bold mb-2">{title}</h1>
            <a className="text-blue-500 hover:underline before:content-['>'] before:pr-2">Lihat Detil</a>
        </div>
    );
}
