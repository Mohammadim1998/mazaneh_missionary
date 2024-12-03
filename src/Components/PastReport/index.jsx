"use client";
import Link from "next/link";
import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"

import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style.css"
import OptionSelectProvince from "./OptionSelectProvince";
import OptionSelectCity from "./OptionSelectCity";
import OptionSelectTwon from "./OptionSelectTwon";
import OptionSelectPoint from "./OptionSelectPoint";

const PastReport = () => {
    const [startDateCooperation, setStartDateCooperation] = useState();
    const [endDateCooperation, setEndDateCooperation] = useState();

    return (
        <div className="w-full h-full bg-[#F6F6F6]">
            <div className="w-full h-[46px] bg-[#5461CA] flex justify-between items-center px-4 py-[13px]">
                <div className="flex items-center gap-x-2">
                    <Link href={"/dashboardHome"} className="w-[14px] h-[14px]">
                        <img src="/images/svg/profile/rightArrowWhite.svg" alt="" className="" />
                    </Link>
                    <span className="text-white font-medium text-sm leading-5">ثبت سوابق</span>
                </div>

                <div className="flex flex-col gap-y-[3px] child:w-[3px] child:h-[3px] child:rounded-full child:bg-white">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>

            <div className="w-full">
                <div className="w-full bg-white pt-8 flex-col pb-8">
                    <div className="w-full px-4 pb-6 ">
                        <div className="w-full flex justify-center items-center border-b-[#E1E2E6] border-b-[2px] pb-4">
                            <span className="text-[#5461CA] font-extrabold">۱- اطلاعات فعالیت</span>
                        </div>
                    </div>

                    <div className="w-full bg-white mt-4 px-4">

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label>نهاد صادر کننده</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectPoint />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label>استان</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectProvince />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label>شهرستان</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectCity />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label>شهر/روستا</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectTwon />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label>تعداد روز تبلیغ</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <input type="number" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-x-4 mt-4">

                            <div className="w-full">
                                <span className="text-red-800 ml-1">*</span>
                                <label htmlFor="activetime">تاریخ شروع</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <div>
                                        <DatePicker
                                            value={startDateCooperation}
                                            onChange={setStartDateCooperation}
                                            className="rmdp-mobile"
                                            inputClass="w-full outline-none py-[10px] font-normal leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
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

                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <span className="text-red-800 ml-1">*</span>
                                <label htmlFor="activetime">تاریخ پایان</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <div>
                                        <DatePicker
                                            value={endDateCooperation}
                                            onChange={setEndDateCooperation}
                                            className="rmdp-mobile"
                                            inputClass="custom-input-startHour w-full outline-none py-[10px] font-normal leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
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
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full mt-4">
                <div className="w-full bg-white pt-8 flex-col pb-6">
                    <div className="w-full px-4 pb-6 ">
                        <div className="w-full flex justify-center items-center border-b-[#E1E2E6] border-b-[2px] pb-4">
                            <span className="text-[#5461CA] font-extrabold">۲- بارگذاری مستندات</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center bg-white mt-4 px-4">
                        <div className="w-[222px] h-[200px] flex justify-center items-center border-[1px] border-gray-300 rounded-lg">
                            <div className="w-full h-full flex flex-col justify-center items-center">

                                <input type="file" id="cst" className="opacity-0 h-0" />

                                <label htmlFor="cst" className="w-full h-full flex flex-col justify-center items-center">
                                    <div className="w-[86px] h-[77px]">
                                        <img src="/images/upload-cloud-icon.svg" alt="" className="" />
                                    </div>
                                    <span className="">بارگزاری تصویر مستندات</span>
                                </label>

                            </div>
                        </div>

                    </div>


                    <div className="w-full flex justify-center items-center px-4 child:cursor-pointer gap-x-4 h-10 mt-12">
                        <button className="w-full h-10 bg-[#5461CA] rounded-md text-white font-normal text-sm">ذخیره و ارسال</button>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default PastReport;