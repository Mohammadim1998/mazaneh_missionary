import { DoneStepper } from "@/Components/Services";
import ProgressBarMUI_Invite from "@/Components/module/ProgressBarMUI-Invite";
import { useState } from "react";

const Box = ({ force, read, stepPage }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-full p-4 bg-white">
            <div className="relative w-full flex justify-start items-center gap-x-[14px] mb-4">
                <div className="shrink-0 w-11 h-11 bg-[#5461CA14] rounded-full flex justify-center items-center"><img src="/images/svg/invite/letterPhone.svg" alt="" className="" /></div>

                <div className="w-full text-[#4F4F4F] flex flex-col gap-y-[6px]">
                    <span className="font-semibold text-xs leading-5 line-clamp-1">مسجد حجت بن الحسن علی علیه السلام</span>
                    <span className="font-normal text-xs leading-5 line-clamp-1">آذربایجان غربی، مهاباد، قوپی باباعلی</span>
                </div>

                {force === 1 ? (<></>) : (
                    <div className="shrink-0 absolute left-0 top-0 w-[86px] h-[23px] bg-[#33995514] text-[#339955] rounded font-normal text-xs leading-5 flex justify-center items-center">بسته شده</div>
                )}
            </div>

            <div className={`w-full h-[60px] ${active ? "h-auto " : "h-[60px] overflow-y-hidden"} flex flex-col gap-y-3 p-3 bg-[#5462CA08] rounded`}>
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

            {read === 0
                ? (
                    <>
                        <div className="my-4 w-full"><ProgressBarMUI_Invite stepPage={stepPage} steps={DoneStepper} /></div>
                        <button className="w-full h-[35px] bg-[#5462CA14] rounded flex justify-center items-center text-[#5462CA] font-bold text-xs leading-5">شرکت در نظرسنجی</button>
                    </>
                )
                : (
                    <span className="text-[#3A3A3A] font-normal text-xs leading-4">مراسم با موفقیت به اتمام رسید</span>
                )
            }
        </div>
    );
}

export default Box;