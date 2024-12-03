"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MainPage = () => {
    let router = useRouter();

    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 2), 50);
        }
    }, [filled, isRunning])

    useEffect(() => {
        setTimeout(() => {
            setIsRunning(true);
        }, 1000);
        setTimeout(() => {
            router.push("/sliderPage")
        }, 5000);
    }, [])

    return (
        <div className="relative startBG flex-col max-sm:w-full justify-center items-center min-h-dvh max-sm:flex hidden font-bold">

            <div className="absolute top-[36%] translate-y-[-36%] flex flex-col justify-center items-center gap-y-5">
                <img src="/images/svg/Start/shamLogo.svg" alt="" />

                <div className="w-1 h-12 rounded-t-lg bg-[#BE9966]"></div>
            </div>

            <div className="absolute bottom-56 left-[50%] translate-x-[-50%] flex flex-col items-center -mt-80">
                {/* <img src="/images/svg/godlogo2.svg" className="w-[48px] h-[66px] mb-5" alt="godlogo2" /> */}
                <img src="/images/svg/Start/networkLogo.svg" className=" mb-5" />


                <div className="progressbar mt-[26px]">
                    <div style={{
                        height: "100%",
                        width: `${filled}%`,
                        backgroundColor: "#ffffff",
                        transition: "width 0.5s"
                    }} className=""></div>
                </div>

                <span className="font-medium text-[10px] leading-4 mt-[18px] text-white">در حال بارگزاری ...</span>
            </div>
        </div>
    );
}

export default MainPage;
// <div className="relative bg-[#26328D] max-sm:w-full justify-center items-center h-dvh max-sm:flex hidden font-bold">
//     <div className="flex flex-col items-center">

//         <img src="/images/svg/godlogo2.svg" className="w-[48px] h-[66px] mb-5" alt="godlogo2" />

//         <h1 className="text-white text-base leading-6 mt-5 mb-[8px]">سامانه شمع</h1>
//         <h2 className="text-white text-xs leading-4">شبکه مبلغان و عملیات‌های تبلیغی</h2>

//         <div className="progressbar mt-[56px]">
//             <div style={{
//                 height: "100%",
//                 width: `${filled}%`,
//                 backgroundColor: "#ffffff",
//                 transition: "width 0.5s"
//             }} className=""></div>
//         </div>

//         <span className="font-medium text-[10px] leading-4 mt-[18px] text-white">در حال بارگزاری ...</span>
//     </div>
// </div>