"use client";
import HeaderInviteBox from "@/Components/(InvitePerson)/Boxes/HeaderInviteBox";
import ProgressBar from "@/Components/(InvitePerson)/Boxes/ProgressBar";
import Link from "next/link";

import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import OptionSelectPrecence from "./OptionSelectPrecence";
import OptionSelectEvent from "./OptionSelectEvent";

import "react-multi-date-picker/styles/layouts/mobile.css"

import TimePicker from "react-multi-date-picker/plugins/time_picker";
import ProgressBarMUI from "@/Components/(InvitePerson)/Boxes/ProgressBarMUI";
import { steps } from "@/Components/Services";

const DateMissionary = () => {
    const [valueStart, setValueStart] = useState();
    const [valueEnd, setValueEnd] = useState();

    const [timeStart, setTimeStart] = useState();
    const [timeEnd, setTimeEnd] = useState();

    const [stepPage,setStepPage] = useState(1);

    return (
        <div className="relative w-full h-screen bg-[#E5E5E5] pt-[52px] pb-4">
            <div className="absolute w-full top-0 left-0 right-0">
                <HeaderInviteBox title={"فرم درخواست مبلغ"} href={"selectAddress"} />
            </div>
            <section className="relative w-full flex flex-col justify-between h-full">
                <div className="absolute top-0 left-0 right-0 py-2 w-full bg-white">
                    {/* <ProgressBar /> */}
                    <ProgressBarMUI stepPage={stepPage} steps={steps} />
                    {/* End ProgressBar */}
                </div>

                <div className="w-full h-full bg-white mt-[80px] p-4">
                    <form className="w-full">
                        <div className="z-30 w-full flex flex-col gap-y-[6px] mb-4">
                            <label htmlFor="presence" className="text-[#4f4f4f] font-medium text-xs leading-5">۱. نوع حضور مبلغ را تعیین بفرمایید. </label>
                            <OptionSelectPrecence />
                        </div>

                        <div className="z-10 w-full flex flex-col gap-y-[6px] mb-4">
                            <label htmlFor="ceremony" className="text-[#4f4f4f] font-medium text-xs leading-5">۲. مناسبت مدنظر خودتان را انتخاب کنید.</label>
                            <OptionSelectEvent />
                        </div>

                        <div className="w-full flex flex-col gap-y-[6px] mb-4">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۳. تاریخ برگزاری مراسم</span>
                            <div className="w-full grid grid-cols-2 gap-x-4">
                                <DatePicker
                                    value={valueStart}
                                    onChange={setValueStart}
                                    className="rmdp-mobile"
                                    inputClass="custom-input-startHour w-full outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    placeholder="تاریخ شروع"
                                    animations={[
                                        opacity(),
                                        transition({
                                            from: 40,
                                            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                        }),
                                    ]}
                                />
                                <DatePicker
                                    value={valueEnd}
                                    onChange={setValueEnd}
                                    className="rmdp-mobile"
                                    inputClass="custom-input-startHour w-full outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                    placeholder="تاریخ پایان"
                                    animations={[
                                        opacity(),
                                        transition({
                                            from: 40,
                                            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                        }),
                                    ]}
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-y-[6px] mb-4">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۴. ساعت برگزاری مراسم</span>
                            <div className="grid grid-cols-2 gap-x-4">

                                <DatePicker
                                    value={timeStart}
                                    onChange={setTimeStart}
                                    disableDayPicker
                                    format="HH:mm"
                                    placeholder="ساعت شروع"
                                    inputClass="custom-input-startHour w-full outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                    plugins={[
                                        <TimePicker hideSeconds />
                                    ]}
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                />

                                <DatePicker
                                    value={timeEnd}
                                    onChange={setTimeEnd}
                                    disableDayPicker
                                    format="HH:mm"
                                    placeholder="ساعت پایان"
                                    inputClass="custom-input-startHour w-full outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                    plugins={[
                                        <TimePicker hideSeconds />
                                    ]}
                                    calendar={persian}
                                    locale={persian_fa}
                                    calendarPosition="bottom-right"
                                />

                            </div>
                        </div>
                    </form>
                </div>

                <Link href={"/contact"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                    <button onClick={() => setStepPage(2)} className="w-full h-10 bg-[#5461CA] text-white rounded">ادامه</button>
                </Link>
            </section>
        </div>
    );
}

export default DateMissionary;