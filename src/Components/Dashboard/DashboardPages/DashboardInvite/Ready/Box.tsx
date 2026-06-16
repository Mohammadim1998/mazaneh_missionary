import Link from "next/link";
import { useState } from "react";

const Box = ({ force }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-full p-4 bg-white">
            <div className="relative w-full flex justify-start items-center gap-x-[14px] mb-4">
                <div className="shrink-0 w-11 h-11 bg-[#5461CA14] rounded-full flex justify-center items-center"><img src="/images/svg/invite/letterPhone.svg" alt="" className="" /></div>

                <div className="w-full text-[#4F4F4F] flex flex-col gap-y-[6px]">
                    <span className="font-semibold text-xs leading-5 line-clamp-1">مسجد حجت بن الحسن علی علیه السلام</span>
                    <span className="font-normal text-xs leading-5 line-clamp-1">آذربایجان غربی، مهاباد، قوپی باباعلی</span>
                </div>

                {force === 1 ? (
                    <div className="shrink-0 absolute left-0 top-0 w-[86px] h-[23px] bg-[#CB87090F] rounded text-[#CB8709] font-normal text-xs leading-5 flex justify-center items-center">درخواست فوری</div>
                ) : null}
            </div>

            <div className="w-full h-[136px] flex flex-col gap-y-3 bg-[#5462CA08] rounded p-3 mb-4">
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

            {active
                ? (
                    <button className="w-full h-[35px] bg-[#E899080F] rounded flex justify-center items-center text-[#CB8709] font-normal text-xs leading-5">در انتظار تایید میزبان...</button>
                )
                : (
                    <div className="w-full h-[35px] grid grid-cols-[2fr,1fr] justify-center items-center gap-x-4">
                        <button onClick={() => setActive(true)} className="h-full bg-[#5462CA] rounded flex justify-center items-center text-white font-bold text-xs leading-5">پذیرش سخنرانی</button>
                        <Link href={"/capacityPage/3"} className="h-full bg-[#5462CA1A] rounded flex justify-center items-center text-[#5462CA] font-bold text-xs leading-5">مشاهده جزئیات</Link>
                    </div>
                )}
        </div>
    );
}

export default Box;