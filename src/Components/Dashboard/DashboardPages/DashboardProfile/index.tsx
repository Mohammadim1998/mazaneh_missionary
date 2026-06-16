"use client";
import Link from "next/link";
import { useState } from "react";
import ListOfCities from "@/Components/module/ListOfCities";

const DashboardProfile = () => {
    const [openListOfCities, setOpenListOfCities] = useState(false);

    return (
        <main className={`w-full h-full`}>
            <div className="relative w-full h-[333px] flex justify-center items-center profileBg p-4">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-20 h-20 rounded-full border-[4px] border-[#00000026] bg-white mb-[20px]"><img src="/images/jpg/img-resume.png" alt="resume" className="w-full h-full rounded-full object-cover" /></div>
                    <div className="flex flex-col justify-center items-center gap-y-[6px] mb-[32px]">
                        <span className="text-white font-bold text-sm leading-5">احمد علی ‌آبادی اصل</span>
                        <span className="text-white font-medium text-xs leading-5">طلبه سطح  ۲</span>
                    </div>

                    <div className="w-full flex justify-center items-center gap-x-[6px]">
                        <div className="w-4 h-4"><img src="/images/svg/profile/locationWhite.svg" alt="" className="w-full h-full" /></div>

                        <span className="text-white font-normal text-sm leading-5">تهران، فیروزکوه</span>
                    </div>

                </div>
            </div>
            {/*********************** END PARTONE *************************/}
            <div className="relative w-full h-[860px] flex flex-col gap-y-6 bg-white pt-14 px-4">
                <div className="absolute top-[-40px] left-4 right-4 rounded-lg py-4  bg-white shadow-[0px_1px_3px_1px_#00000026]">
                    <div className="relative grid grid-cols-2 justify-center items-center">
                        <div className="flex justify-center items-center gap-x-[10px]">
                            <div className="w-6 h-6"><img src="/images/svg/profile/world.svg" alt="" className="w-full h-full" /></div>

                            <div className="flex flex-col justify-center items-start gap-y-0">
                                <span className="text-[#818181] font-normal text-sm leading-5">شبکه های تبلیغی</span>
                                <span className="text-[#2B39A1] font-semibold text-sm leading-5">۱۹  شبکه</span>
                            </div>
                        </div>

                        <div className="absolute top-0 left-[43%] translate-x-[-43%] w-[1px] h-[40px] bg-[#0000001A] mx-5"></div>

                        <div className="flex justify-center items-center gap-x-[10px]">
                            <div className="w-6 h-6"><img src="/images/svg/profile/letter.svg" alt="" className="w-full h-full" /></div>

                            <div className="flex flex-col justify-center items-start gap-y-0">
                                <span className="text-[#818181] font-normal text-sm leading-5">دعوت از شما</span>
                                <span className="text-[#2B39A1] font-semibold text-sm leading-5">۱۱۹  جلسه</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*********************** END NAV *************************/}

                <div className="w-full shadow-[0px_1px_3px_1px_#00000026] rounded-lg">
                    <div className="w-[90%] mx-auto text-[#2B39A1] border-b-[1px] border-b-[#0000001A] py-[12px] font-semibold text-sm leading-5">
                        تنظیمات شمع من
                    </div>

                    <div className="w-full flex flex-col gap-y-6 px-4 pt-[20px] pb-4">

                        <div className="w-full flex justify-between items-center">
                            <Link href={"/resumeMissionary"} className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/eye.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">مشاهده رزومه من</span>
                            </Link>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>

                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/world.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">شبکه‌های تبلیغی عضو شده</span>
                            </div>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>

                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/locationBlue.svg" alt="" className="w-full h-full" /></div>
                                <span onClick={() => setOpenListOfCities(true)} className="text-[#4F4F4F] font-medium text-xs leading-5">ویرایش موقعیت مکانی شما</span>
                            </div>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>

                    </div>

                </div>

                <div className="w-full shadow-[0px_1px_3px_1px_#00000026] rounded-lg">
                    <div className="w-[90%] mx-auto text-[#2B39A1] border-b-[1px] border-b-[#0000001A] py-[12px] font-semibold text-sm leading-5">
                        رزومه تبلیغی من
                    </div>

                    <div className="w-full flex flex-col gap-y-6 px-4 pt-[20px] pb-4">

                        <div className="w-full flex justify-between items-center">
                            <Link href={"/resume"} className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/individual.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">پروفایل فردی</span>
                            </Link>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <Link href={"/resumePublic"} className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/resume.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">رزومه عمومی</span>
                            </Link>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>

                        <div className="w-full flex justify-between items-center">
                            <Link href={"/resumeIntroduce"} className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/invite.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">رزومه دعوت</span>
                            </Link>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>

                        <div className="w-full flex justify-between items-center">
                            <Link href={"/expertResume"} className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/expert.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">رزومه تخصصی</span>
                            </Link>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>

                    </div>

                </div>

                <div className="w-full shadow-[0px_1px_3px_1px_#00000026] rounded-lg">
                    <div className="w-[90%] mx-auto text-[#2B39A1] border-b-[1px] border-b-[#0000001A] py-[12px] font-semibold text-sm leading-5">
                        تنظیمات عمومی
                    </div>

                    <div className="w-full flex flex-col gap-y-6 px-4 pt-[20px] pb-4">

                        <div className="w-full flex justify-between items-center">
                            <Link href={"/setPassword"} className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/lock.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">تغییر رمز عبور</span>
                            </Link>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>

                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-x-2 justify-start items-center">
                                <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/bel.svg" alt="" className="w-full h-full" /></div>
                                <span className="text-[#4F4F4F] font-medium text-xs leading-5">تنظیم اعلانات سامانه شمع</span>
                            </div>

                            <div className=""><img src="/images/svg/actions/arrowLeftBlack.svg" alt="" className="" /></div>
                        </div>
                    </div>

                </div>

                <div className="w-full py-[18px] flex justify-start items-center px-4 shadow-[0px_1px_3px_1px_#00000026] rounded-lg">
                    <div className="w-full flex justify-between items-center">
                        <Link href={"/"} className="flex gap-x-2 justify-start items-center cursor-pointer">
                            <div className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/profile/exit.svg" alt="" className="w-full h-full" /></div>
                            <span className="text-[#4F4F4F] font-medium text-xs leading-5">خروچ از  سامانه شمع</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`z-[100] w-full fixed bg-white ${openListOfCities ? "h-full bottom-0" : "h-0 bottom-[-100%]"} transition-all duration-700 overflow-y-scroll`}>
                <ListOfCities setOpenListOfCities={setOpenListOfCities} />
            </div>
        </main>
    );
}

export default DashboardProfile;