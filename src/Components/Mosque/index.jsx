"use client";
import { useEffect, useState } from "react";
import MenuBar from "./Menu";
import Graph from "./comp/Graph";
import Comment from "./comp/Comment";
import Feature from "./comp/Feature";
import Missionary from "./comp/Missionary";
import Capacity from "./comp/Capacity";
import AboutUs from "./comp/AboutUs";

import "./styles.css"
import Link from "next/link";


const Mosque = ({ location }) => {
    const [details, setDetails] = useState(<Graph />);
    const [content, setContent] = useState("aboutUs");

    useEffect(() => {
        if (content === "aboutUs") {
            setDetails(<AboutUs />)
        } else if (content === "graph") {
            setDetails(<Graph />)
        } else if (content === "comment") {
            setDetails(<Comment />)
        } else if (content === "featur") {
            setDetails(<Feature />)
        } else if (content === "missinary") {
            setDetails(<Missionary />)
        } else if (content === "capacity") {
            setDetails(<Capacity />)
        }
    }, [content]);

    return (
        <main className="relative w-full flex flex-col">
            <div className="relative child:shrink-0 child:cursor-pointer child:relative w-full flex gap-x-[3px] overflow-x-scroll">
                {location?.images.map((image, index) => (
                    <div key={index} className="w-[138px] h-[165px]">
                        <img src={image.img} alt="" className="w-full h-full" />
                        <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-[150px] bgcstm"></div>
                    </div>

                ))}
            </div>
            <div className="absolute top-4 right-0 flex justify-between items-center px-4 w-full">
                <Link href={"/dashboardHome"} className="flex items-center gap-x-2">
                    <div className="w-[14px] h-[14px]"><img src="/images/svg/mosque/arrowRight.svg" alt="" className="w-full h-full" /></div>
                    <span className="text-white font-semibold text-sm leading-5">بازگشت</span>
                </Link>

                <div className="flex flex-col gap-y-[3px]">
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                </div>
            </div>

            <div className="mt-5 px-4 mb-6">
                <span className="text-[#2B39A1] font-semibold text-sm leading-5 mb-4">{location.title}</span>

                <div className="flex justify-start items-center mt-4">
                    <span className="text-[#4F4F4F] font-medium text-[10px] leading-4">مسجدها</span>
                    <span className="w-[1.5px] h-[17px] bg-[#000000] opacity-[20%] mx-[14px]"></span>

                    <div className="flex justify-center items-center">
                        <span className="text-[#4F4F4F] font-normal text-[11px] leading-5">{location.score.toLocaleString("fa")}/۵</span>
                        <div className="flex justify-center items-center ml-[10px] mr-[6px]">
                            <div className="flex justify-center items-center">
                                {new Array(5 - location?.score).fill(0).map((item, index) => (
                                    <img key={index} src="/images/svg/mosque/emptyStar.svg" alt="" className="w-[14px] h-[14px]" />
                                ))}
                                {new Array(location?.score).fill(0).map((item, index) => (
                                    <img key={index} src="/images/svg/mosque/star.svg" alt="" className="w-[14px] h-[14px]" />
                                ))}
                            </div>
                        </div>
                        <div className="text-[#4F4F4F] font-normal text-[11px] leading-5">(از   ۲۱  رای)</div>
                    </div>
                </div>
            </div>

            <div className="z-20 w-full h-10 border-t-[1px] border-t-[#0000001A] border-b-[1px] border-b-[#0000001A]">
                <MenuBar setContent={setContent} />
            </div>

            <section className="w-full">{details}</section>
        </main >
    );
}

export default Mosque;