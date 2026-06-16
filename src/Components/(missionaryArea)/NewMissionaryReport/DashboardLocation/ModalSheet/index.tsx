"use client";
import Link from "next/link";

const ModalSheet = ({ dataMap, openModalSheet, setOpenModalSheet }) => {

    return (
        <div className={`z-30 fixed w-full ${openModalSheet ? "bottom-0 h-auto transition-all duration-1000" : "bottom-[-475px] transition-all duration-1000"} w-full pt-[3px] transition-all duration-700`}>
            <div className="w-full bg-white rounded-lg">
                <div className="w-full h-[84px] flex justify-start items-center gap-x-[3px] child:shrink-0 overflow-x-scroll sliderContainer1 px-[3px] pt-[3px]">
                    {dataMap?.images?.map((img, index) => (
                        <div key={index} className="w-[98px] h-full"><img src={img.img} alt="" className="w-full h-full" /></div>
                    ))}
                </div>

                <div className="py-4 px-[13px]">
                    <div className="w-full flex flex-col border-b-[#0000001A] border-b-[1px] pb-4">
                        <span className="text-[#3A3A3A] font-bold text-[13px] leading-5 mb-2">{dataMap?.title}</span>
                        <span className="text-[#818181] font-semibold text-[11px] leading-4 mb-[14px]">{dataMap?.address}</span>

                        <div className="w-[103px] h-[27px] bg-[#F0F0F0] rounded-3xl flex items-center justify-center gap-x-2">
                            <Link href={`/capacityPage/${dataMap?.id}`}>
                                <span className="text-[#2B39A1] font-semibold text-[11px] leading-5 cursor-pointer">اطلاعات بیشتر</span>
                            </Link>
                            <div className="w-3 h-3"><img src="/images/svg/map/arrrowDown.svg" alt="" className="w-full h-full" /></div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center py-3 px-[11px] border-b-[#0000001A] border-b-[1px]">

                        <div className="flex flex-col justify-center items-center gap-y-[7px]">
                            <span className="text-[#3A3A3AB2] font-normal text-[11px] leading-5">امتیاز نقطه</span>
                            <div className="flex items-center gap-x-[3px]">
                                <span className="text-[#000000] font-bold text-xs leading-5">{dataMap?.score}</span>
                                <div className="w-[14px] h-[14px]"><img src="/images/svg/map/star.svg" alt="" className="w-full h-full" /></div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-[7px]">
                            <span className="text-[#3A3A3AB2] font-normal text-[11px] leading-5">سابقه جلسات</span>
                            <span className="text-[#000000] font-bold text-xs leading-5">{dataMap?.meets} مورد</span>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-[7px]">
                            <span className="text-[#3A3A3AB2] font-normal text-[11px] leading-5">اسکان</span>
                            <span className="text-[#000000] font-bold text-xs leading-5">{dataMap?.accupy}</span>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-[7px]">
                            <span className="text-[#3A3A3AB2] font-normal text-[11px] leading-5">حق القدم</span>
                            <span className="text-[#000000] font-bold text-xs leading-5">{dataMap?.step}</span>
                        </div>

                    </div>
                </div>

                <div className="w-full px-4 flex items-center pt-4 overflow-x-scroll sliderContainer1 pb-6">
                    <Link href={"/newMissionaryDate"} className="w-full h-[42px] bg-[#5461CA] cursor-pointer flex justify-center items-center gap-x-2 rounded-lg">
                        <span className="text-white font-medium text-sm leading-5">انتخاب و ادامه</span>
                    </Link>
                </div>
            </div>
            <div
                onClick={() => setOpenModalSheet(false)}
                className="absolute -top-8 right-[10px] w-[26px] h-[26px] flex justify-center items-center bg-white rounded-full shadow-[0px_2px_4px_1px_#0000001A] transition-all duration-1000">
                <div className="w-[11px] h-[11px]">
                    <img src="/images/svg/map/close.svg" alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export default ModalSheet;