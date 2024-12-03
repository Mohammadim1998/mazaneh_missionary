"use client";
import HeaderInviteBox from "@/Components/(InvitePerson)/Boxes/HeaderInviteBox";
import ProgressBar from "@/Components/(InvitePerson)/Boxes/ProgressBar";
import Link from "next/link";
import RangeSlider from "./RangeSlider";
import ProgressBarMUI from "@/Components/(InvitePerson)/Boxes/ProgressBarMUI";
import { useState } from "react";
import { steps } from "@/Components/Services";

const Contact = () => {
    const [stepPage, setStepPage] = useState(2);

    return (
        <div className="relative w-full h-screen bg-[#E5E5E5] pt-[52px] pb-4">
            <div className="absolute w-full top-0 left-0 right-0">
                <HeaderInviteBox title={"فرم درخواست مبلغ"} href={"dateMissionary"} />
            </div>
            <section className="relative w-full flex flex-col justify-between h-full">
                <div className="absolute top-0 left-0 right-0 py-2 w-full bg-white">
                    {/* ProgressBar */}
                    {/* <ProgressBar /> */}
                    <ProgressBarMUI stepPage={stepPage} steps={steps} />
                    {/* End ProgressBar */}
                </div>


                <div className="w-full h-full bg-white mt-[80px] p-4">
                    <div className="w-full h-[66px] mb-[80px]">
                        <span className="mb-[6px] text-[#4f4f4f] font-medium text-xs leading-5">۱. جنسیت مخاطبان جلسه (برطبق درصد) </span>
                        <div className="w-full">
                            <RangeSlider />
                        </div>
                    </div>
                    <form className="w-full">
                        <div className="w-full flex flex-col gap-y-[6px]">

                            <div className="text-[#4f4f4f] font-medium text-xs leading-5">۲. تعداد مخاطبین جلسه به تفکیک سن</div>
                            <div className="w-full justify-center items-center flex flex-col gap-y-[5px]">
                                <div className="flex gap-x-4">
                                    <div className=" flex flex-col gap-y-1">
                                        <label className="text-[#757579] font-normal text-[10px] leading-4" htmlFor="">کودک (۳ الی ۱۲ سال)</label>
                                        <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                    </div>

                                    <div className=" flex flex-col gap-y-1">
                                        <label className="text-[#757579] font-normal text-[10px] leading-4" htmlFor="">نوجوان ( ۱۲ الی ۲۰ سال) </label>
                                        <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                    </div>
                                </div>
                                {/****************************/}
                                <div className="flex gap-x-4">
                                    <div className="flex gap-x-4">
                                        <div className="flex flex-col gap-y-1">
                                            <label className="text-[#757579] font-normal text-[10px] leading-4" htmlFor="">جوان (۲۰ الی ۳۵ سال)</label>
                                            <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                        </div>

                                        <div className="flex flex-col gap-y-1">
                                            <label className="text-[#757579] font-normal text-[10px] leading-4" htmlFor="">بزرگسال (۳۵ به بالا)</label>
                                            <input type="number" className="w-full outline-none focus:placeholder:text-transparent border-[#E1E2E6] border-[1px] rounded-lg h-10 text-left px-4" placeholder="نفر" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </section>
            <Link href={"/meetingInfos"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                <button onClick={() => setStepPage(3)} className="w-full h-10 bg-[#5461CA] text-white rounded">ادامه</button>
            </Link>
        </div>
    );
}

export default Contact;