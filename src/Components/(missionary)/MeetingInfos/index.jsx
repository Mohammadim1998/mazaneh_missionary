"use client";
import HeaderInviteBox from "@/Components/(InvitePerson)/Boxes/HeaderInviteBox";
import ProgressBar from "@/Components/(InvitePerson)/Boxes/ProgressBar";
import ProgressBarMUI from "@/Components/(InvitePerson)/Boxes/ProgressBarMUI";
import Link from "next/link";
import { useState } from "react";
import { steps } from "@/Components/Services";

const MeetingInfos = () => {
    const [stepPage, setStepPage] = useState(3);
    return (
        <div className="relative w-full h-dvh bg-[#E5E5E5] pt-[52px]">
            <div className="absolute w-full top-0 left-0 right-0">
                <HeaderInviteBox title={"فرم درخواست مبلغ"} href={"contact"} />
            </div>

            <section className="relative w-full flex flex-col justify-between h-full">
                <div className="absolute top-0 left-0 right-0 py-2 w-full bg-white">
                    {/* ProgressBar */}
                    <ProgressBarMUI stepPage={stepPage} steps={steps} />
                    {/* End ProgressBar */}
                </div>

                <div className="w-full h-full bg-white p-4 mt-[80px]">
                    <form className="w-full">
                        <div className="w-full flex flex-col gap-y-[6px] mb-4">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۱. موضوع جلسه</span>
                            <input type="text" className="outline-none border-[#E1E2E6] border-[1px] rounded-md py-[10px] text-[#4f4f4f] focus:placeholder:text-transparent placeholder:text-[#AAAAAACC] font-normal text-xs leading-5 px-4" placeholder="موضوع پیشنهادی خود را برای جلسه بیان فرمایید." />
                        </div>

                        <div className="w-full mb-4">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۲. وضعیت اسکان</span>
                            <div className="pr-3 mt-[10px] flex flex-col gap-y-[6px]">
                                <div className="flex justify-start items-center gap-x-[10px]">
                                    <input type="radio" id="location-missionary-one" name="location-missionary" className="w-[14px] h-[14px]" />
                                    <label htmlFor="location-missionary-one" className="text-[#757579] font-medium text-xs leading-5">اسکان گروهی</label>
                                </div>
                                <div className="flex justify-start items-center gap-x-[10px]">
                                    <input type="radio" id="location-missionary-two" name="location-missionary" className="w-[14px] h-[14px]" />
                                    <label htmlFor="location-missionary-two" className="text-[#757579] font-medium text-xs leading-5">اسکان مجردی</label>
                                </div>
                                <div className="flex justify-start items-center gap-x-[10px]">
                                    <input type="radio" id="location-missionary-three" name="location-missionary" className="w-[14px] h-[14px]" />
                                    <label htmlFor="location-missionary-three" className="text-[#757579] font-medium text-xs leading-5">اسکان خانوادگی</label>
                                </div>
                                <div className="flex justify-start items-center gap-x-[10px]">
                                    <input type="radio" id="location-missionary-four" name="location-missionary" className="w-[14px] h-[14px]" />
                                    <label htmlFor="location-missionary-four" className="text-[#757579] font-medium text-xs leading-5">اسکان ندارد</label>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <span className="text-[#4f4f4f] font-medium text-xs leading-5">۳. آیا مایل به پرداخت هدیه تبلیغی هستید؟</span>
                            <div className="pr-3 mt-[10px] flex flex-col gap-y-[6px]">
                                <div className="flex justify-start items-center gap-x-[10px]">
                                    <input type="radio" id="gift-missionary-one" name="gift-missionary" className="w-[14px] h-[14px]" />
                                    <label htmlFor="gift-missionary-one" className="text-[#757579] font-medium text-xs leading-5">هدیه تبلیغی می‌دهم</label>
                                </div>
                                <div className="flex justify-start items-center gap-x-[10px]">
                                    <input type="radio" id="gift-missionary-two" name="gift-missionary" className="w-[14px] h-[14px]" />
                                    <label htmlFor="gift-missionary-two" className="text-[#757579] font-medium text-xs leading-5">توانایی پرداخت هدیه تبلیغی را ندارم</label>
                                </div>
                                <div className="flex justify-start items-center gap-x-[10px]">
                                    <input type="radio" id="gift-missionary-three" name="gift-missionary" className="w-[14px] h-[14px]" />
                                    <label htmlFor="gift-missionary-three" className="text-[#757579] font-medium text-xs leading-5">نمی‌خواهم هدیه تبلیغی بپردازم</label>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="w-full h-[1px] bg-[#0000001A] mt-3 mb-2"></div>

                    <div className="flex justify-center items-start gap-x-[6px] px-2">
                        <div className="shrink-0 w-[17px] h-4 flex justify-center items-center"><img src="/images/svg/invite/warningYellow.svg" alt="" className="w-full h-full" /></div>
                        <p className="text-[#E0AD70] pl-6 font-normal text-sm leading-5 text-justify">
                            میزبان گرامی سامانه شمع هیچ گونه پرداختی به مبلغین ندارد؛ لطفاً در صورت توان جهت  ادامه این امر و گسترش آن  گزینه «هدیه تبلیغی می‌دهم» را انتخاب نمایید.
                        </p>
                    </div>
                </div>

            </section>
            
            <Link href={"/missionaryAction"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                <button onClick={() => setStepPage(4)} className="w-full h-10 bg-[#5461CA] text-white rounded">ادامه</button>
            </Link>
        </div>
    );
}

export default MeetingInfos;