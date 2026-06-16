"use client";
import ProgressBarMUI_Invite from "@/Components/module/ProgressBarMUI-Invite";
import { useState } from "react";
import { inviteStepper } from "@/Components/Services";
import Link from "next/link";

const Box = ({ read,stepPage }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-full p-4 bg-white">
            <div className="w-full flex justify-start items-center gap-x-[14px] mb-4">
                <div className="shrink-0 w-11 h-11 bg-[#5461CA14] rounded-full flex justify-center items-center"><img src="/images/svg/invite/microPhoneA.svg" alt="" className="" /></div>

                <div className="text-[#4F4F4F] flex flex-col gap-y-[6px]">
                    <span className="font-semibold text-xs leading-5 line-clamp-1">مسجد حجت بن الحسن علی علیه السلام</span>
                    <span className="font-normal text-xs leading-5 line-clamp-1">آذربایجان غربی، مهاباد، قوپی باباعلی</span>
                </div>
            </div>

            <div className={`w-full h-[60px] ${active ? "h-auto" : "h-[60px] overflow-y-hidden"} flex flex-col gap-y-3 p-3 bg-[#5462CA08] rounded`}>
                <div className="text-[#4F4F4F] flex">
                    <div className=""><img src="/images/svg/invite/calander.svg" alt="" /></div>
                    <span className="block font-medium text-[10px] leading-4 mr-[6px]">تاریخ: </span>
                    <div className="font-normal text-xs leading-4 mr-2">از  ۱۴۰۱/۰۵/۰۸  تا ۱۴۰۱/۰۶/۰۶</div>
                    <div className="mr-[10px] font-normal text-xs leading-4">( ۱۵  روز )</div>
                </div>

                <div className="text-[#4F4F4F] flex">
                    <div className=""><img src="/images/svg/invite/clock.svg" alt="" /></div>
                    <span className="block font-medium text-[10px] leading-4 mr-[6px]">ساعت: </span>
                    <div className="font-normal text-xs leading-4 mr-2">۱۵:۰۰  تا ۱۶:۰۰</div>
                </div>

                <div className="text-[#4F4F4F] flex">
                    <div className=""><img src="/images/svg/invite/event.svg" alt="" /></div>
                    <span className="block font-medium text-[10px] leading-4 mr-[6px]">مناسبت: </span>
                    <div className="font-normal text-xs leading-4 mr-2">موردی محرم  ۱۴۰۳</div>
                </div>

                <div className="text-[#4F4F4F] flex">
                    <div className=""><img src="/images/svg/invite/locationInvite.svg" alt="" /></div>
                    <span className="block font-medium text-[10px] leading-4 mr-[6px]">نوع مکان: </span>
                    <div className="font-normal text-xs leading-4 mr-2">روضه خونگی</div>
                </div>
            </div>
            <div onClick={() => setActive(true)} className={`text-center ${active ? "hidden" : "flex w-full py-1 bg-[#5462CA08]"} pb-[10px] justify-center items-center gap-x-[6px]`}>
                <div className=""><img src="/images/svg/invite/arrowDownBlue.svg" alt="" className="" /></div>
                <span className="text-[#5462CA] font-semibold text-xs">مشاهده بیشتر</span>
            </div>

            <div onClick={() => setActive(false)} className={`text-center ${active ? "flex w-full py-1 bg-[#5462CA08]" : "hidden"} pb-[10px] justify-center items-center gap-x-[6px]`}>
                <div className="rotate-180"><img src="/images/svg/invite/arrowDownBlue.svg" alt="" className="" /></div>
                <span className="text-[#5462CA] font-semibold text-xs">مشاهده کمتر</span>
            </div>

            <div className="mt-4"><ProgressBarMUI_Invite stepPage={stepPage} steps={inviteStepper}/></div>

            {read == 0
                ? (<div className="w-full mt-4">
                    <p className="text-[#3A3A3A] font-semibold text-xs leading-5 mb-4 px-2">در انتظار اعلام آمادگی شما برای سخنرانی...</p>
                    <div className="w-full h-[35px] grid grid-cols-[2fr,1fr] justify-center items-center gap-x-4">
                        <button className="h-full bg-[#5462CA] rounded flex justify-center items-center text-white font-bold text-xs leading-5">پذیرش سخنرانی</button>
                        <Link href={"/capacityPage/3"} className="h-full bg-[#5462CA1A] rounded flex justify-center items-center text-[#5462CA] font-bold text-xs leading-5">مشاهده جزئیات</Link>
                    </div>
                </div>)
                : (
                    <div className="w-full h-[35px] bg-[#E899080F] mt-4 rounded text-[#CB8709] font-normal text-xs leading-5 flex justify-center items-center">در انتظار تایید سخنرانی شما توسط میزبان...</div>
                )}
        </div>
    );
}

export default Box;