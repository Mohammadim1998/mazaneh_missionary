"use client";
import Link from "next/link";
import OptionSelectActionTime from "./OptionSelectActionTime";
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
import OptionSelectMissionary from "./OptionSelectMissionary";
import OptionSelectMenPresence from "./OptionSelectMenPresence";
import ChipsMissionaryWay from "./ChipsMissionaryWay";
import ChipsFixProblems from "./ChipsFixProblems";
import ChipsSocialActions from "./ChipsSocialActions";
import OptionSelectWomenPresence from "./OptionSelectWomenPresence";
import OptionSelectKids from "./OptionSelectKids";


const RegisterReport = () => {
    const [startDateCooperation, setStartDateCooperation] = useState();
    const [endDateCooperation, setEndDateCooperation] = useState();

    const [chipsMissionaryWay, setChipsMissionaryWay] = useState([]);
    const [chipsFixProblems, setChipsFixProblems] = useState([]);
    const [chipsSocialActions, setChipsSocialActions] = useState([]);


    const sendToMissionaryWayState = (data) => {
        setChipsMissionaryWay([...data])
    }

    const sendToFixProblems = (data) => {
        setChipsFixProblems([...data])
    }

    const sendToSocialActions = (data) => {
        setChipsSocialActions([...data])
    }


    return (
        <div className="w-full h-full bg-[#F6F6F6]">
            <div className="w-full h-[46px] bg-[#5461CA] flex justify-between items-center px-4 py-[13px]">
                <div className="flex items-center gap-x-2">
                    <Link href={"/dashboardHome"} className="w-[14px] h-[14px]">
                        <img src="/images/svg/profile/rightArrowWhite.svg" alt="" className="" />
                    </Link>
                    <span className="text-white font-medium text-sm leading-5">ثبت گزارش تبلیغی</span>
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
                            <span className="text-[#5461CA] font-extrabold">اطلاعات زمان و جغرافیایی نقطه تبلیغی</span>
                        </div>
                    </div>

                    <div className="w-full bg-white mt-4 px-4">

                        <div className="grid grid-cols-2 justify-center items-center gap-x-4 mt-4">

                            <div className="w-full">
                                <span className="text-red-800 ml-1">*</span>
                                <label htmlFor="activetime">زمان فعالیت</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <OptionSelectActionTime />
                                </div>
                            </div>

                            <div className="w-full">
                                <span className="text-red-800 ml-1">*</span>
                                <label htmlFor="activetime">تعداد روز تبلیغ</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <input type="number" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                                </div>
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

                        <div className="z-50 w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">استان</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectProvince />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">شهرستان</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectCity />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">شهر/روستا</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectTwon />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">نوع نقطه</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectPoint />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">نام نقطه</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <input type="number" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">آدرس محل تبلیغ</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <input type="number" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="w-full mt-4 ">
                <div className="w-full bg-white pt-8 flex-col pb-8">
                    <div className="w-full px-4 pb-6 ">
                        <div className="w-full flex justify-center items-center border-b-[#E1E2E6] border-b-[2px] pb-4">
                            <span className="text-[#5461CA] font-extrabold">اطلاعات فعالیت های تبلیغی</span>
                        </div>
                    </div>

                    <div className="w-full bg-white mt-4 px-4">
                        <div className="w-full">
                            <div className="w-full">
                                <span className="text-red-800 ml-1">*</span>
                                <label htmlFor="activetime">تعداد روز تبلیغ</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <OptionSelectMissionary />

                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <span className="text-red-800 ml-1">*</span>
                                <label htmlFor="activetime">موضوع</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <input type="text" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="activetime">توضیحات موضوع تبلیغ</label>
                                <div className="w-full h-40 rounded-md mt-2">
                                    <textarea id="activetime" placeholder="حداکثر در 100 کلمه موضوع تبلیغ خود را توضیح دهید" className="w-full h-full outline-none px-4 py-2 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex-col justify-center items-center mt-8">
                            <span className="text-[#000000] font-extrabold">روش تبلیغ را انتخاب کنید</span>
                            <ChipsMissionaryWay sendToMissionaryWayState={sendToMissionaryWayState} />
                        </div>


                        <div className="w-full flex-col justify-center items-center mt-8">
                            <span className="text-[#000000] font-extrabold">در سخنرانی‌هایتان به حل کردن کدام مسئله کمک کرده‌اید</span>
                            <ChipsFixProblems sendToFixProblems={sendToFixProblems} />
                        </div>


                        <div className="w-full flex-col justify-center items-center mt-8">
                            <span className="text-[#000000] font-extrabold">فعالیت های اجتماعی شما</span>
                            <ChipsSocialActions sendToSocialActions={sendToSocialActions} />
                        </div>

                        <div className="w-full">
                            <span className="text-[#000000] font-extrabold">
                                در صورت موفقیت به تشکیل و راه اندازی گروه های مردمی( کنشگران اجتماعی)
                                معرفی نمایید
                            </span>

                            <div className="w-full mt-4">
                                <label htmlFor="activetime">نام گروه</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <input type="text" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="activetime">تعداد اعضاء</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <input type="text" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="activetime">نام رابط گروه</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <input type="text" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label htmlFor="activetime">شماره تماس رابط</label>
                                <div className="w-full h-10 rounded-md mt-2">
                                    <input type="text" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full mt-4">
                <div className="w-full bg-white pt-8 flex-col pb-8">
                    <div className="w-full px-4 pb-6 ">
                        <div className="w-full flex justify-center items-center border-b-[#E1E2E6] border-b-[2px] pb-4">
                            <span className="text-[#000000] font-extrabold">اطلاعات مخاطبان تبلیغ</span>
                        </div>
                    </div>

                    <div className="w-full bg-white mt-4 px-4">

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">تعداد مخاطبین جلسه  (نفر)</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <input type="number" id="activetime" className="w-full h-full outline-none px-4 border-[#E1E2E6] border-[1px] rounded-md placeholder:text-[#AAAAAE] font-normal text-xs leading-5" />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <span className="text-red-800 ml-1">*</span>
                            <label htmlFor="activetime">
                                درصد حضور (براساس جنسیت)
                                <br />
                                آقایان
                            </label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectMenPresence />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <label htmlFor="activetime">بانوان</label>
                            <div className="w-full h-10 rounded-md mt-2">
                                <OptionSelectWomenPresence />
                            </div>
                        </div>

                        <Link href={"/dashboardHome"}>
                            <button className="w-full h-10 bg-[#5461CA] text-white mt-12 rounded-lg">ثبت و ادامه</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default RegisterReport;