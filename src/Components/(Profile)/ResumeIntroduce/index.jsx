"use client";
import Link from "next/link";
import ChipsLangsResume from "./ChipsLangsResume";
import { useState } from "react";

const ResumeIntroduceComp = () => {
    const [chipsLangsState, setChipsLangsState] = useState([]);

    const sendToState = (data) => {
        setChipsLangsState([...data]);
    }

    const handleDatas = () => {
        console.log("chipsLangsState ===>>>", chipsLangsState);
    }

    return (
        <div className="relative w-full h-full bg-[#F0F0F1] mb-[68px]">
            <div className="w-full h-12 bg-[#5461CA] flex justify-start items-center ">
                <div className="pr-[17px] flex justify-start items-center gap-x-2">
                    <Link
                        href={"/dashboardProfile"}
                        className="w-[14px] h-[14px]">
                        <img src="/images/resume/arrowRight.svg" alt="" className="w-[14px] h-[14px]" />
                    </Link>
                    <span className="text-white font-medium text-sm leading-5">رزومه دعوت</span>
                </div>
            </div>
{/* 
            <div className="w-full h-[51px] flex justify-center items-center mb-1 gap-x-[17px] bg-white px-4 pt-4 pb-[14px]">
                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#B0B0B0]"></div>
                    <span className="text-[#B0B0B0] font-light text-[10px] leading-4">پروفایل فردی </span>
                </div>

                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#B0B0B0]"></div>
                    <span className="text-[#B0B0B0] font-light text-[10px] leading-4">رزومه عمومی</span>
                </div>

                <div className="">
                    <div className="w-[98px] h-[2px] bg-[#5461CA]"></div>
                    <span className="text-[#5461CA] font-medium text-[10px] leading-4">رزومه دعوت</span>
                </div>
            </div> */}

            <div className="w-full bg-white px-4 py-[14px] mb-2">
                <span className="text-[#4F4F4F] font-medium text-sm leading-5">معرفی کوتاه - درباره من</span>

                <div className="w-full h-[89px] bg-white mt-3 rounded-lg">
                    <textarea className="w-full h-full p-3 border-[1px] border-[#0000001A] outline-none focus:placeholder:text-transparent rounded-lg text-[#252529] placeholder:text-[#AAAAAE] font-light text-xs leading-5" placeholder="خلاصه رزومه خود را یادداشت نمایید ..." name="" id="">

                    </textarea>
                </div>
            </div>

            <div className="w-full h-[134px] bg-white mb-2 px-4 py-[14px]">
                <span className="text-[#4F4F4F] font-medium text-sm leading-5">زبان های مسلط برای سخنرانی​</span>
                <div className="mt-[10px]">
                    <ChipsLangsResume sendToState={sendToState} />
                </div>
            </div>

            <div className="w-full h-full bg-white mb-2 px-4 py-[14px]">
                <span className="text-[#4F4F4F] font-medium text-sm leading-5">نمونه صوت و فیلم سخنرانی</span>

                <div className="w-full grid grid-cols-2 gap-x-4 mt-3 child:rounded-lg child:border-[1px] child:border-dashed child:border-[#00000026]">
                    <div className="h-[173px] bg-[#5461CA1A]">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <div className="w-6 h-6 mb-[10px]"><img src="/images/svg/resume/music.svg" alt="" className="w-6 h-6" /></div>

                            <span className="text-[#5461CA] font-normal text-xs leading-5">بارگذاری نمونه صوت</span>
                            <span className="text-[#5461CA] font-light text-xs leading-5 mt-1">حداکثر اندازه فایل ۲ مگابایت</span>
                        </div>
                    </div>

                    <div className="h-[173px] bg-[#5461CA1A]">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <div className="w-6 h-6 mb-[10px]"><img src="/images/svg/resume/video.svg" alt="" className="w-6 h-6" /></div>

                            <span className="text-[#5461CA] font-normal text-xs leading-5">بارگذاری نمونه فیلم</span>
                            <span className="text-[#5461CA] font-light text-xs leading-5 mt-1">حداکثر اندازه فایل ۵ مگابایت</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-50 fixed bottom-0 left-0 right-0 w-full h-[58px] bg-white py-[10px] px-4 shadow-[0px_-1px_4px_0px_#00000026]">
                <Link href={"/resumeDataSuccess"}>
                    <button
                        onClick={() => handleDatas()}
                        className="w-full h-full bg-[#5461CA] text-white font-medium text-sm leading-5 rounded cursor-pointer">ذخیره</button>
                </Link>
            </div>
        </div>
    );
}

export default ResumeIntroduceComp;