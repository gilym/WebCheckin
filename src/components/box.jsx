import React from "react";

export default function Box({ icon, name }) {
    return (
        <div className="w-44 h-44 bg-gray-200 hover:text-white hover:bg-blue-500 rounded-xl flex flex-col justify-center items-center">
            <div className=" mb-2  text-6xl">
                {icon}
            </div>
            <div className="text-center hover:text-white   text-neutral font-bold">
                {name}
            </div>
        </div>
    );
}
