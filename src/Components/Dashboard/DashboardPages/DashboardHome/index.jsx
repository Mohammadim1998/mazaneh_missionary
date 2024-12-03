"use client"
import Link from "next/link";
import BannerContentDashboard from "../../../BannerContentDashboard";
import CircleBoxDashboard from "../../../CircleBoxDashboard";
import SectionHeader from "../../../SectionHeader";
import SquareBookDashboard from "../../../SquareBookDashboard";
import SquareBoxDashboard from "../../Boxes/SquareBoxDashboard";
import CapacityDashboard from "./CapacityDashboard";
import { useState } from "react";

const DashboardHome = () => {
    const [openMunu, setOpenMenu] = useState(false);

    // useEffect(() => {
    //     openMunu
    //         ? document.body.style.overflow = "hidden"
    //         : document.body.style.overflow = "auto";
    // }, [openMunu]);

    return (
        <main className="relative w-full bg-[#F6F6F6]">
            <div className="bgDashboard-mobile w-full h-[223px] mb-4">

                <div className="container flex flex-col gap-y-6 px-4 pt-[18px] pb-[51px]">
                    <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center gap-x-[6px]">
                            <div
                                onClick={() => setOpenMenu(true)}
                                className="flex justify-center items-center gap-x-[10px]">
                                <img src="/images/svg/hamburger.svg" className="w-5 h-6 cursor-pointer" />
                            </div>
                            <img src="/images/svg/shamLogo.svg" className="w-[22px] h-8" />
                            <span className=" text-[#FFFFFF] font-medium text-sm leading-5 text-right">پیشخوان</span>
                        </div>

                        <div className="flex justify-center items-center gap-x-[10px]">
                            <Link href={"/messages"} className="w-8 h-8 bg-[#FFFFFF1F] flex justify-center items-center rounded-[6px]">
                                <img src="/images/svg/home/message.svg" className="w-4 h-4" />
                            </Link>
                            <Link href={"/notification"} className="w-8 h-8 bg-[#FFFFFF1F] flex justify-center items-center rounded-[6px]">
                                <img src="/images/svg/bell.svg" className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center px-[9px]">
                        <CircleBoxDashboard img={"/images/svg/daicon-1.svg"} title={"تعداد گزارش‌ها"} subTitle={325} />
                        <CircleBoxDashboard img={"/images/svg/daicon-2.svg"} title={"تعداد سوابق"} subTitle={325} />
                        <CircleBoxDashboard img={"/images/svg/daicon-3.svg"} title={"تعداد دعوت‌ها"} subTitle={325} />
                        <CircleBoxDashboard img={"/images/svg/daicon-4.svg"} title={"امتیاز تبلیغی"} subTitle={325} />
                    </div>
                </div>

            </div>
            <div className="w-full h-full bg-[#F6F6F6] pb-28">
                <SectionHeader title={"خدمات شمع"} btnTitle={"مشاهده همه"} link={"/allFeatures"} />

                <div className="w-full grid grid-cols-4 gap-x-4 justify-between items-center mt-[14px] px-4">
                    <Link href={"/selectDestination"}>
                        <SquareBoxDashboard img={"/images/svg/squareIcon-1.svg"} title={"گواهی تبلیغی"} />
                    </Link>

                    <Link href={"/expertResume"}>
                        <SquareBoxDashboard img={"/images/svg/personIcon.svg"} title={"شبکه های تبلیغی"} />
                    </Link>

                    <Link href={"/contentMissionary"}>
                        <SquareBoxDashboard img={"/images/svg/bookIcon.svg"} title={"محتوای تبلیغی"} />
                    </Link>

                    <Link href={"/notification"}>
                        <SquareBoxDashboard img={"/images/svg/pageIcon.svg"} title={"اطلاعیه‌ها"} />
                    </Link>
                </div>

                <div className="w-full mt-[26px] px-4 mb-[26px]">
                    <BannerContentDashboard
                        title={"فرصت‌های تبلیغی در انتظار شماست"}
                        subTitle={"همین حالا مناسب‌ترین موقعیت را انتخاب کنید"}
                    />
                </div>
                <SectionHeader title={"محتوای تبلیغی"} btnTitle={"بیشتر"} link={"/bookMissionary"} />

                <div className="w-full flex justify-between items-center gap-x-4 overflow-x-scroll mt-[14px] py-1 px-4 mb-6 sliderContainer1">
                    <SquareBookDashboard
                        img={"/images/home/contentMissionary1.jpg"}
                        title={"خورشید مقدس ویژه ایام ولادت"}
                        subTitle={"کتاب - محرم ۱۴۰۳"}
                        score={4.5}
                    />

                    <SquareBookDashboard
                        img={"/images/home/contentMissionary2.jpg"}
                        title={"خورشید مقدس ویژه ایام ولادت"}
                        subTitle={"کتاب - محرم ۱۴۰۳"}
                        score={4.5}
                    />
                    <SquareBookDashboard
                        img={"/images/home/contentMissionary1.jpg"}
                        title={"خورشید مقدس ویژه ایام ولادت"}
                        subTitle={"کتاب - محرم ۱۴۰۳"}
                        score={4.5}
                    />

                    <SquareBookDashboard
                        img={"/images/home/contentMissionary2.jpg"}
                        title={"خورشید مقدس ویژه ایام ولادت"}
                        subTitle={"کتاب - محرم ۱۴۰۳"}
                        score={4.5}
                    />
                </div>

                <SectionHeader title={"ظرفیت‌های تبلیغی"} btnTitle={"بیشتر"} link={"/capacityMissionary"} />

                <div className="w-full flex justify-between items-center gap-x-4 overflow-x-scroll mt-[14px] py-1 px-4 sliderContainer1">
                    <CapacityDashboard
                        img={"/images/home/contentMissionary1.jpg"}
                        title={"مسجد حجت بن الحسن علیه السلام"}
                        subTitle={"تهران، فیروزکوه"}
                        calendar={"موردی محرم ۱۴۰۳"}
                        days={5}
                    />
                    <CapacityDashboard
                        img={"/images/home/contentMissionary1.jpg"}
                        title={"مسجد امام رضا علیه السلام"}
                        subTitle={"قم ، قنوات"}
                        calendar={"موردی رمضان ۱۴۰۳"}
                        days={2}
                    />
                    <CapacityDashboard
                        img={"/images/home/contentMissionary1.jpg"}
                        title={"مسجد امام حسین علیه السلام"}
                        subTitle={"تهران، کرج"}
                        calendar={"موردی عتبات ۱۴۰۳"}
                        days={4}
                    />
                    <CapacityDashboard
                        img={"/images/home/contentMissionary1.jpg"}
                        title={"مسجد جواد علیه السلام"}
                        subTitle={"اصفهان، نقش جهان"}
                        calendar={"موردی عید غدیر ۱۴۰۳"}
                        days={14}
                    />

                </div>

            </div>

            {/* HAMBURGER MENU */}
            <div onClick={(e) => e.stopPropagation()} className={`z-[60] fixed top-0 bottom-0 ${openMunu ? "right-0" : "right-[-100%]"} w-[66%] transition-all duration-500 h-full bg-white px-4 py-4 shadow-[-4px_0px_8px_0px_#00000040]`}>
                <div className="w-full">
                    <div onClick={() => setOpenMenu(false)} className="mr-auto w-6 h-6 flex justify-center items-center cursor-pointer border-[#00000033]  border-[1px] rounded-[4px] bg-inherit">
                        <img src="/images/svg/hamburger/close.svg" alt="" className="w-4 h-4" />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-x-3 mb-5 mt-[5px]">
                    <span className="shrink-0 text-[#2B39A1] font-medium text-sm leading-5">خدمات پرکاربرد</span>
                    <div className="h-[1px] w-full bg-[#0000001A]"></div>
                </div>

                <div className="mb-8">
                    <ul className="flex flex-col items-start gap-y-4">
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/selectDestination"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/certification.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">گواهی تبلیغی</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={""} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/capacity.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">ظرفیت های تبلیغی</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/dashboardLocation"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/atlas.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">اطلس تبلیغی</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/contentMissionary"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/content.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">محتوای تبلیغی</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-center items-center gap-x-3 mb-5">
                    <span className="shrink-0 text-[#2B39A1] font-medium text-sm leading-5">سایر خدمات</span>
                    <div className="h-[1px] w-full bg-[#0000001A]"></div>
                </div>

                <div className="mb-8">
                    <ul className="flex flex-col items-start gap-y-4">
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/news"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/news.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">اخبار تبلیغ</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/faq"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/questions.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">سوالات متداول</span>
                            </Link>
                        </li>
                        <li className="text-[#3A3A3A font-normal text-xs leading-4]">
                            <Link href={"/about"} className="flex items-center gap-x-2">
                                <span className="w-[18px] h-[18px]"><img src="/images/svg/hamburger/aboutus.svg" alt="" className="w-[18px] h-[18px]" /></span>
                                <span className="">درباره ما</span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            {/* END HAMBURGER MENU */}

            <div onClick={() => setOpenMenu(false)} className={`z-[55] overlay fixed top-0 bottom-0 ${openMunu ? "right-0" : "right-[-100%]"} w-full bg-black/70`}>
            </div>

        </main>
    );
}

export default DashboardHome;