"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationDetail = ({ locId }) => {
    

    return (
          <></>
    );
}

export default LocationDetail;
{/*
 <div className="absolute bottom-[60px] w-full  bg-white rounded-t-[28px] pt-6 pb-6 px-6">
            <div className=" font-bold flex flex-col gap-y-[6px]">
                <h1 className=" text-[13px] leading-5 text-right text-[#3A3A3A]">مسجد امیر المومنین علی ابن ابی طالب علیه السلام</h1>
                <h3 className=" text-[11px] leading-4 text-right text-[#818181]">قم، قم، خیابان جمهوی</h3>
            </div>
            <div className="flex justify-start items-center gap-x-[5px] mt-4">
                <div className="w-4 h-4 flex justify-center items-center mr-[1px]">
                    <img src="/images/svg/leftArrowSharpBlue.svg" className="w-[11px] h-[10px]" />
                </div>
                <Link href={"#"} className="text-[#1D266C]  font-bold text-xs leading-5 text-right">اطلاعات بیشتر</Link>
            </div>
            <div className="w-full border-[1px] bg-[#0000001A] mt-2 mb-[10px]"></div>

            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">امتیاز نقطه</span>
                    <div className="flex justify-center items-center gap-x-1">
                        <span className="text-[#000000] font-bold leading-5 ">2.4</span>
                        <span className="flex justify-center items-center w-[14px] h-[14px]"><img src="/images/svg/star.svg" className="w-3 h-3" /></span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">سابقه جلسات</span>
                    <div className="flex justify-center items-center gap-x-1 text-[#000000] font-bold leading-5">
                        <span className="">24</span>
                        <span className="">مورد</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">اسکان</span>
                    <div className="flex justify-center items-center gap-x-1">
                        <span className="text-[#000000] font-bold leading-5">خانوادگی</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">حق القدم</span>
                    <div className="flex justify-center items-center gap-x-1">
                        <span className="text-[#000000] font-bold leading-5">توافقی</span>
                    </div>
                </div>
            </div>

            <div className="w-full mt-4 grid max-md:grid-cols-3 gap-x-[17px] justify-center items-center child:rounded-[8px] child:flex child:justify-around child:items-center">
                <div className=""><img src="/images/svg/actions/action3.jpg" alt="" className="rounded-[8px]" /></div>
                <div className=""><img src="/images/svg/actions/action1.jpg" alt="" className="rounded-[8px]" /></div>
                <div className=""><img src="/images/svg/actions/action2.jpg" alt="" className="rounded-[8px]" /></div>
            </div>

            <div className="w-full border-[1px] bg-[#0000001A] mt-[10px] mb-[14px]"></div>

            <div className="flex justify-center items-center gap-x-[10px] ">
                <button className="flex justify-center items-center gap-x-[7px] bg-[#1D266C14] p-[6px_16px_6px_16px] rounded-[6px]">
                    <div className="w-[10px] h-[10px]">
                        <img src="/images/svg/plus.svg" alt="" className="w-[10px] h-[10px]" />
                    </div>
                    <span className="text-[#1D266C] font-bold text-xs leading-4">ثبت فعالیت تبلیغی</span>
                </button>
                <button className="flex justify-center items-center gap-x-[7px] bg-[#1D266C14] p-[6px_16px_6px_16px] rounded-[6px]">
                    <div className="w-[10px] h-[10px]">
                        <img src="/images/svg/plus.svg" alt="" className="w-[10px] h-[10px]" />
                    </div>
                    <span className="text-[#1D266C] font-bold text-xs leading-4">ثبت سوابق تبلیغی</span>
                </button>
            </div>
        </div>
*/}

{/*
  <div className="absolute bottom-[60px] w-full  bg-white rounded-t-[28px] pt-6 pb-6 px-6">
            <div className=" font-bold flex flex-col gap-y-[6px]">
                <h1 className=" text-[13px] leading-5 text-right text-[#3A3A3A]">{locId.title}</h1>
                <h3 className=" text-[11px] leading-4 text-right text-[#818181]">{locId.subTitle}</h3>
            </div>
            <div className="flex justify-start items-center gap-x-[5px] mt-4">
                <div className="w-4 h-4 flex justify-center items-center mr-[1px]">
                    <img src="/images/svg/leftArrowSharpBlue.svg" className="w-[11px] h-[10px]" />
                </div>
                <Link href={"#"} className="text-[#1D266C]  font-bold text-xs leading-5 text-right">اطلاعات بیشتر</Link>
            </div>
            <div className="w-full border-[1px] bg-[#0000001A] mt-2 mb-[10px]"></div>

            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">امتیاز نقطه</span>
                    <div className="flex justify-center items-center gap-x-1">
                        <span className="text-[#000000] font-bold leading-5 ">{locId.star}</span>
                        <span className="flex justify-center items-center w-[14px] h-[14px]"><img src="/images/svg/star.svg" className="w-3 h-3" /></span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">سابقه جلسات</span>
                    <div className="flex justify-center items-center gap-x-1 text-[#000000] font-bold leading-5">
                        <span className="">{loca.historyOfCase}</span>
                        <span className="">مورد</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">اسکان</span>
                    <div className="flex justify-center items-center gap-x-1">
                        <span className="text-[#000000] font-bold leading-5">{locId.kindOfOccupy}</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-[14px] ">
                    <span className="text-[#3A3A3AB2] font-bold text-[11px] leading-4">حق القدم</span>
                    <div className="flex justify-center items-center gap-x-1">
                        <span className="text-[#000000] font-bold leading-5">{locId.kindOfPreference}</span>
                    </div>
                </div>
            </div>

            <div className="w-full mt-4 grid max-md:grid-cols-3 gap-x-[17px] justify-center items-center child:rounded-[8px] child:flex child:justify-around child:items-center">
                <div className=""><img src={locId.img1} alt="img1" className="rounded-[8px]" /></div>
                <div className=""><img src={locId.img2} alt="img2" className="rounded-[8px]" /></div>
                <div className=""><img src={locId.img3} alt="img3" className="rounded-[8px]" /></div>
            </div>

            <div className="w-full border-[1px] bg-[#0000001A] mt-[10px] mb-[14px]"></div>

            <div className="flex justify-center items-center gap-x-[10px] ">
                <button className="flex justify-center items-center gap-x-[7px] bg-[#1D266C14] p-[6px_16px_6px_16px] rounded-[6px]">
                    <div className="w-[10px] h-[10px]">
                        <img src="/images/svg/plus.svg" alt="" className="w-[10px] h-[10px]" />
                    </div>
                    <span className="text-[#1D266C] font-bold text-xs leading-4">ثبت فعالیت تبلیغی</span>
                </button>
                <button className="flex justify-center items-center gap-x-[7px] bg-[#1D266C14] p-[6px_16px_6px_16px] rounded-[6px]">
                    <div className="w-[10px] h-[10px]">
                        <img src="/images/svg/plus.svg" alt="" className="w-[10px] h-[10px]" />
                    </div>
                    <span className="text-[#1D266C] font-bold text-xs leading-4">ثبت سوابق تبلیغی</span>
                </button>
            </div>
        </div>
*/}