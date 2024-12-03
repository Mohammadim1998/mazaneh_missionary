"use client";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Box = ({data}) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-full">
            <div onClick={() => setActive(prev => !prev)} className={`w-full ${active ? "bg-blue-300" : "bg-white"} flex justify-between items-center gap-x-4 border-b-[1px] border-b-[#eae5e59b] p-4 text-justify`}>
                <div className="font-medium text-sm leading-5 text-black">{data.question}</div>
                <div className={`shrink-0 w-6 h-6 ${active ? "rotate-90" : "-rotate-90"} transition-all duration-500`}><MdKeyboardArrowLeft className="w-full h-full" /></div>
            </div>

            <div className={`w-full ${active ? "h-full" : "h-0 overflow-y-hidden"} border-b-[1px] border-b-[#eae5e59b]`}>
                <p className="p-4 text-[#777] text-right">{data.answer}</p>
            </div>
        </div>
    );
}

export default Box;
