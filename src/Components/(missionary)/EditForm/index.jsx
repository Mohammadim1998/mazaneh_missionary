"use client";
import HeaderInviteBox from "@/Components/(InvitePerson)/Boxes/HeaderInviteBox";
import Link from "next/link";

import DatePicker, { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import { useState } from "react";
import "react-multi-date-picker/styles/layouts/mobile.css"
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const EditForm = () => {
    const [valueStart, setValueStart] = useState();
    const [valueEnd, setValueEnd] = useState();

    const [timeStart, setTimeStart] = useState();
    const [timeEnd, setTimeEnd] = useState();

    return (
        <section className="w-full h-dvh">
            <div className="absolute w-full top-0 left-0 right-0">
                <HeaderInviteBox title={"فرم اصلاحیه"} href={"missionaryAction"} />
            </div>

            <div className="flex flex-col justify-between w-full h-full bg-[#F6F6F6] mt-12 pt-5 px-4">
                <div className="w-full bg-white rounded-lg p-4">
                    <form className="w-full">
                        <div className="w-full">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۱. تاریخ برگزاری مراسم</span>

                            <div className="w-full grid grid-cols-2 items-center gap-x-4 mt-[10px]">
                                <div className="relative">
                                    <span className="absolute right-4 top-[-40%] translate-y-[40%] px-2 bg-white text-[#757579] font-normal text-[10px] leading-4">تاریخ شروع</span>
                                    <DatePicker
                                        value={valueStart}
                                        onChange={setValueStart}
                                        className="rmdp-mobile"
                                        inputClass="custom-input-startHour w-full h-10 outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                        animations={[
                                            opacity(),
                                            transition({
                                                from: 40,
                                                transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                            }),
                                        ]}
                                    />
                                </div>

                                <div className="relative">
                                    <span className="absolute right-4 top-[-40%] translate-y-[40%] px-2 bg-white text-[#757579] font-normal text-[10px] leading-4">تاریخ پایان</span>
                                    <DatePicker
                                        value={valueEnd}
                                        onChange={setValueEnd}
                                        className="rmdp-mobile"
                                        inputClass="custom-input-startHour w-full h-10 outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
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

                        <div className="mt-4">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۲. ساعت برگزاری مراسم</span>

                            <div className="w-full grid grid-cols-2 gap-x-4 mt-[10px]">
                                <div className="relative">
                                    <span className="absolute right-4 top-[-40%] translate-y-[40%] px-2 bg-white text-[#757579] font-normal text-[10px] leading-4">ساعت شروع</span>
                                    <DatePicker
                                        value={timeStart}
                                        onChange={setTimeStart}
                                        disableDayPicker
                                        format="HH:mm"
                                        inputClass="custom-input-startHour w-full h-10 p-[10px_16px_10px_16px] outline-none font-normal text-xs leading-5 text-[#4f4f4f] placeholder:text-[#AAAAAACC] border-[1px] border-[#E1E2E6] rounded-lg"
                                        plugins={[
                                            <TimePicker hideSeconds />
                                        ]}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                    />

                                </div>

                                <div className="relative">
                                    <span className="absolute right-4 top-[-40%] translate-y-[40%] px-2 bg-white text-[#757579] font-normal text-[10px] leading-4">ساعت پایان</span>
                                    <DatePicker
                                        value={timeEnd}
                                        onChange={setTimeEnd}
                                        disableDayPicker
                                        format="HH:mm"
                                        inputClass="custom-input-startHour w-full h-10 outline-none py-[10px] font-normal text-xs leading-5 px-4 border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] placeholder:text-[#AAAAAE] rounded-lg"
                                        plugins={[
                                            <TimePicker hideSeconds />
                                        ]}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="bottom-right"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="mt-4">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۳. آیا مایل به پرداخت هدیه تبلیغی هستید؟</span>

                            <div className="mt-2 flex flex-col items-start gap-y-2">
                                <div className="flex justify-center items-center gap-x-2">
                                    <input type="radio" id="editForm-one" name="editForm" className="" />
                                    <label htmlFor="editForm-one" className="font-medium text-[#757579] text-xs leading-5">هدیه تبلیغی می‌دهم</label>
                                </div>
                                <div className="flex justify-center items-center gap-x-2">
                                    <input type="radio" id="editForm-two" name="editForm" className="" />
                                    <label htmlFor="editForm-two" className="font-medium text-[#757579] text-xs leading-5">توانایی پرداخت هدیه تبلیغی را ندارم</label>
                                </div>
                                <div className="flex justify-center items-center gap-x-2">
                                    <input type="radio" id="editForm-three" name="editForm" className="" />
                                    <label htmlFor="editForm-three" className="font-medium text-[#757579] text-xs leading-5">نمی‌خواهم هدیه تبلیغی بپردازم</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <Link href={"/registerComplete"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                    <button className="w-full h-10 bg-[#5461CA] text-white rounded">ثبت</button>
                </Link>
            </div>
        </section>
    );
}

export default EditForm;