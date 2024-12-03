"use client";
import { useEffect, useState } from "react";
import "./rangeSlider.css";

const RangeSlider = () => {
    const [dataRange, setDataRange] = useState(50);

    const [man, setMan] = useState(0);
    const [woman, setWoman] = useState(0);

    useEffect(() => {
        if (dataRange == 0) {
            setMan(100);
            setWoman(0);
        }
        if (dataRange == 25) {
            setMan(75);
            setWoman(25);
        }
        if (dataRange == 50) {
            setMan(50);
            setWoman(50);
        }
        if (dataRange == 75) {
            setMan(25);
            setWoman(75);
        }
        if (dataRange == 100) {
            setMan(0);
            setWoman(100);
        }
    }, [dataRange])

    return (
        <div className="mt-4">

            <div className="w-[310px] mx-auto flex flex-col justify-center items-center mt-[6px]">
                <div className="relative">
                    <input
                        className="z-20 absolute" dir="ltr"
                        type="range" min={0} max={100} step={25} value={dataRange} id="rangeInput"
                        onChange={(e) => setDataRange(e.target.value)}
                    />

                    <div className="z-10 absolute -left-5 -top-2 text-[4f4f4f] font-medium text-[9px] leading-4">برادران</div>
                    <div className="z-10 absolute -right-5 -top-2 text-[4f4f4f] font-medium text-[9px] leading-4">خواهران</div>


                    <div className="z-10 absolute left-[25%] translate-x-[-25%] bottom-[4px] w-[2px] h-[4px] bg-[#C7C9DA] rounded-b-lg"></div>
                    <div className="z-10 absolute right-[25%] translate-x-[-25%] bottom-[4px] w-[2px] h-[4px] bg-[#C7C9DA] rounded-b-lg"></div>
                    <div className="z-10 absolute right-[50%] translate-x-[-50%] bottom-[4px] w-[2px] h-[4px] bg-[#C7C9DA] rounded-b-lg"></div>

                    {/* <div className="z-10 absolute right-[-9px] top-[82%] translate-y-[-82%] rotate-45 w-[8.5px] h-[8.5px] bg-[#C7C9DA]"></div>
                    <div className="z-10 absolute left-[-9px] top-[82%] translate-y-[-82%] rotate-45 w-[8.5px] h-[8.5px] bg-[#C7C9DA]"></div> */}

                    <div className="z-10 absolute right-[0px] top-[82%] translate-y-[-82%] rounded-full w-3 h-3 bg-[#C7C9DA]"></div>
                    <div className="z-10 absolute left-[0px] top-[82%] translate-y-[-82%] rounded-full w-3 h-3 bg-[#C7C9DA]"></div>
                </div>
                {/* <div className="font-black text-2xl">{dataRange}</div> */}

                <div className="w-[330px] shrink-0 h-full flex justify-between items-center mt-2">
                    <div className="text-[4f4f4f] font-normal text-[11px] leading-3">%۱۰۰ خانم</div>
                    {/* <div className="text-[4f4f4f] font-normal text-[11px] leading-3"><span className="">%۷۵ خانم</span> - <span className="">۲۵% آقا</span></div> */}
                    <div className="text-[4f4f4f] font-normal text-[11px] leading-3 -mr-6"><span className="">%۷۵ خانم</span></div>
                    <div className="text-[4f4f4f] font-normal text-[11px] leading-3 -mr-4">۵۰-۵۰</div>
                    {/* <div className="text-[4f4f4f] font-normal text-[11px] leading-3"><span className="">%۷۵ آقا </span> - <span className="">۲۵% خانم</span></div> */}
                    <div className="text-[4f4f4f] font-normal text-[11px] leading-3 -ml-4"><span className="">%۷۵ آقا </span></div>
                    <div className="text-[4f4f4f] font-normal text-[11px] leading-3">%۱۰۰ آقا</div>
                </div>
            </div>

            <div className="mt-6">
                <div className="w-[200px] mx-auto flex justify-center items-center gap-x-8 py-2 rounded-full bg-gray-200">
                    <div className="flex flex-row-reverse items-center gap-x-2 text-[4f4f4f] font-medium text-[13px] leading-4">{man}%<span className="">آقا</span></div>
                    <div className="w-[1px] h-4 bg-black"></div>
                    <div className="flex flex-row-reverse items-center gap-x-2 text-[4f4f4f] font-medium text-[13px] leading-4">{woman}%<span className="">خانم</span></div>
                </div>
            </div>
        </div>
    );
}

export default RangeSlider;