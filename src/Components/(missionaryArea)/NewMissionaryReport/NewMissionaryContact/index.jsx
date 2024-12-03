"use client";
import Link from "next/link";
import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import RangeSlider from "./RangeSlider";
import OptionSelectNetworkName from "./OptionSelectNetworkName";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import ProgressBarMUI from "../../../module/ProgressBarMUI";
import { steps } from "@/Components/Services";


const NewMissionaryContact = () => {
    let networkState = {
        place: <div className="grid grid-cols-[1fr,2fr] justify-center items-center gap-x-4">
            <div className="h-10"><OptionSelectNetworkName /></div>

            <form className="relative">
                <div className="relative h-10">
                    <input
                        type="text"
                        placeholder="آیدی پیام رسان"
                        className="relative w-full h-full focus:placeholder:text-transparent border-[1px] border-[#E1E2E6] py-[14px] pr-5 pl-4 outline-none rounded-md text-[#252529] placeholder:text-[#AAAAAE]" />
                </div>
                <div className="absolute top-[50%] left-2 translate-y-[-50%] w-5 h-5"><RiDeleteBin6Line className="w-full h-full" /></div>
            </form>
        </div>
    }
    const [addNetworkName, setAddNetworkName] = useState([networkState.place]);

    const [stepPage, setStepPage] = useState(2);

    return (
        <div className="w-full">
            <HeaderInviteBox title={"انتخاب نوع مبلغ"} href={"newMissionaryDate"} />

            <div className="w-full py-2 border-b-[1px] border-b-gray-300">
                {/* <ProgressBar /> */}
                <ProgressBarMUI stepPage={stepPage} steps={steps} />
                {/* End ProgressBar */}
            </div>

            <div className="w-full bg-white mt-2 rounded-lg p-4">
                <div className="w-full h-[66px] mb-[110px]">
                    <span className="mb-[6px] text-[#4f4f4f] font-medium text-xs leading-5 flex justify-start">۱.اطلاعات مخاطبین خود را وارد کنید</span>
                    <div className="w-full bg-gray-50 rounded-lg py-3">
                        <RangeSlider />
                    </div>
                </div>

                <div className="">
                    {/* <form className="w-full"> */}
                    <div className="w-full flex flex-col gap-y-[6px]">
                        <div className="text-[#4f4f4f] font-medium text-xs leading-5">۲. تعداد مخاطبین جلسه به تفکیک سن</div>
                        <div className="w-full justify-center items-center flex flex-col gap-y-[5px]">
                            <div className="flex gap-x-1">
                                <div className=" flex flex-col gap-y-1">
                                    <label className="text-[#757579] text-center font-normal text-[10px] leading-4" htmlFor="">کودک</label>
                                    <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                </div>

                                <div className=" flex flex-col gap-y-1">
                                    <label className="text-[#757579] text-center font-normal text-[10px] leading-4" htmlFor="">نوجوان</label>
                                    <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                </div>

                                <div className="flex flex-col gap-y-1">
                                    <label className="text-[#757579] text-center  font-normal text-[10px] leading-4" htmlFor="">جوان</label>
                                    <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                </div>

                                <div className="flex flex-col gap-y-1">
                                    <label className="text-[#757579] text-center  font-normal text-[10px] leading-4" htmlFor="">بزرگسال</label>
                                    <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                </div>
                            </div>
                            {/****************************/}
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="grid grid-cols-[1fr,2fr] justify-center items-center gap-x-4">
                            <div className=" h-10"><OptionSelectNetworkName /></div>

                            <form className="relative">
                                <div className="relative h-10">
                                    <input
                                        type="text"
                                        placeholder="آیدی پیام رسان"
                                        className="relative w-full h-full focus:placeholder:text-transparent border-[1px] border-[#E1E2E6] py-[14px] pr-5 pl-8 outline-none rounded-md text-[#252529] placeholder:text-[#AAAAAE]" />
                                </div>
                                <div className="absolute top-[50%] left-2 translate-y-[-50%] w-5 h-5"><RiDeleteBin6Line className="w-full h-full" /></div>
                            </form>
                        </div>
                        {addNetworkName.map((item, index) => {
                            return (
                                <div key={index} className="mb-2">{item.place}</div>
                            )
                        })}
                    </div>

                    <div className="mt-8">
                        <div className="grid grid-cols-[1fr,2fr] justify-center items-center gap-x-4">
                            <div className=" h-10"><OptionSelectNetworkName /></div>

                            <form className="relative">
                                <div className="relative h-10">
                                    <input
                                        type="text"
                                        placeholder="آیدی پیام رسان"
                                        className="relative w-full h-full focus:placeholder:text-transparent border-[1px] border-[#E1E2E6] py-[14px] pr-5 pl-8 outline-none rounded-md text-[#252529] placeholder:text-[#AAAAAE]" />
                                </div>
                                <div className="absolute top-[50%] left-2 translate-y-[-50%] w-5 h-5"><RiDeleteBin6Line className="w-full h-full" /></div>
                            </form>
                        </div>
                        {addNetworkName.map((item, index) => {
                            return (
                                <div key={index} className="mb-2">{item.place}</div>
                            )
                        })}
                    </div>

                    {/* </form> */}
                </div>

            </div>


            <Link href={"/newMissionaryArea"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                <button onClick={() => setStepPage(3)} className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید مکان جلسه</button>
            </Link>
        </div>
    );
}

export default NewMissionaryContact;