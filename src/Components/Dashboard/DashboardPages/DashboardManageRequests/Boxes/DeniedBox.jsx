import { useState } from "react";

const DeniedBox = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-full pt-6 pb-2 px-4 bg-white">

            <div className="w-full flex justify-center items-center gap-x-[14px] mb-4">
                <div className="shrink-0 w-11 h-11 bg-[#5461CA14] rounded-full flex justify-center items-center">
                    <div className="w-[22px] h-[22px] flex justify-center items-center"><img src="/images/svg/certification/mosque.svg" alt="" className="" /></div>
                </div>

                <div className="w-full flex flex-col gap-y-[6px]">
                    <div className="text-[#3A3A3A] font-semibold text-xs leading-5">مسجد جلال‌الدین احمدآبادی</div>
                    <div className="text-[#4F4F4F] font-normal text-xs leading-5">آذربایجان غربی، مهاباد، قوپی باباعلی</div>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-x-2 mb-2">
                <div className="bg-[#FAFAFA] text-[#4F4F4F] font-normal text-xs leading-5 py-2 flex justify-center items-center rounded-md">شروع از   ۱۴۰۳/۰۴/۰۱</div>
                <div className="bg-[#FAFAFA] text-[#4F4F4F] font-normal text-xs leading-5 py-2 flex justify-center items-center rounded-md">پایان تا   ۱۴۰۳/۰۵/۰۱</div>
            </div>

            <div className="w-full h-[71px] flex justify-between items-center p-4 mb-[10px] rounded-lg bg-[#FAFAFA]">
                <div className="flex flex-col">
                    <span className="mb-1 text-[#828282CC] font-medium text-[10px] leading-4">مناسبت</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">موردی محرم  ۱۴۰۳</span>
                </div>

                <div className="flex flex-col">
                    <span className="mb-1 text-[#828282CC] font-medium text-[10px] leading-4">نوع مکان</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">روضه خونگی</span>
                </div>

                <div className="flex flex-col">
                    <span className="mb-1 text-[#828282CC] font-medium text-[10px] leading-4">شناسه</span>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">#۴۴۱۵۲۳۵۱</span>
                </div>
            </div>

            <div className="">
                <div onClick={() => { setActive(prev => !prev) }} className="w-full h-[29px] bg-[#C20D0D14] mb-4 rounded text-[#C20D0D] font-normal text-xs leading-5 flex justify-center items-center gap-x-1">
                    <span>رد شده</span>
                    {active
                        ? (<div className="w-[11px] h-[11px] flex justify-center items-center transition-all duration-500 rotate-180"><img src="/images/svg/certification/downRedArrow.svg" alt="" className="" /></div>)
                        : (<div className="w-[11px] h-[11px] flex justify-center items-center transition-all duration-500"><img src="/images/svg/certification/downRedArrow.svg" alt="" className="" /></div>)
                    }
                </div>

                <div className={`${active ? "h-full" : "h-0 overflow-y-hidden"}`}>
                    <p className="text-[#616161] font-extralight text-xs leading-5 text-justify"><span className="font-bold ">علت رد:</span> ارجاع گزارش: سلام علیکم ضمن عرض خداقوت تاریخ درخواستی با تاریخ ثبت فعالیت تبلیغی حضرت عالی تطابق ندارد لذا با تاریخ فعالیت های فرهنگی ثبت شده خود درخواست نمایید </p>
                </div>
            </div>

        </div>
    );
}

export default DeniedBox;