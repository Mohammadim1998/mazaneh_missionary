import Link from "next/link";

const ModalItems = ({ openModalItems }) => {
    return (
        <div className="z-30 flex flex-col justify-center items-center gap-y-[14px] w-full">

            <Link href={"/newMissionaryReport"} className={`${openModalItems ? "mb-0 transition-all duration-1000 delay-500" : "-mb-14 transition-all duration-500 delay-200"} w-[266px] p-2 h-[60px] flex gap-x-2 justify-start items-center bg-white rounded-[32px] shadow-[0px_4px_4px_0px_#00000040]`}>
                <div className="w-10 h-10 flex justify-center items-center bg-[#F0F0F0] rounded-full"><img src="/images/svg/menu/missionaryReport.svg" alt="" className="w-5 h-5" /></div>
                <div className="flex flex-col">
                    <span className="text-[rgb(43,57,161)] font-semibold text-[11px] leading-5">ثبت گزارش تبلیغی</span>
                    <span className="text-[#616161] font-medium text-[10px] leading-4">فعالیت های موردی، مناسبتی، استقرار و...</span>
                </div>
            </Link>

            <Link href={"/pastReport"} className={`${openModalItems ? "mb-0 transition-all duration-1000 delay-300" : "-mb-14 transition-all duration-500 delay-300"} w-[266px] p-2 h-[60px] flex gap-x-2 justify-start items-center bg-white rounded-[32px] shadow-[0px_4px_4px_0px_#00000040]`}>
                <div className="w-10 h-10 flex justify-center items-center bg-[#F0F0F0] rounded-full"><img src="/images/svg/menu/missionaryHistory.svg" alt="" className="w-5 h-5" /></div>
                <div className="flex flex-col">
                    <span className="text-[#2B39A1] font-semibold text-[11px] leading-5">ثبت سوابق تبلیغی</span>
                    <span className="text-[#616161] font-medium text-[10px] leading-4">گزارش فعالیت های تبلیغی سال های گذشته</span>
                </div>
            </Link>

            <Link href={"/invitePerson"} className="relative w-[266px] p-2 h-[60px] flex gap-x-2 justify-start items-center bg-white rounded-[32px] shadow-[0px_4px_4px_0px_#00000040]">
                <div className="w-10 h-10 flex justify-center items-center bg-[#F0F0F0] rounded-full"><img src="/images/svg/menu/missionaryStar.svg" alt="" className="w-5 h-5" /></div>
                <div className="flex flex-col">
                    <span className="text-[#2B39A1] font-semibold text-[11px] leading-5">ثبت ظرفیت تبلیغی</span>
                    <span className="text-[#616161] font-medium text-[10px] leading-4">ایجاد یک جلسه یا فرصت تبلیغی جدید</span>
                </div>
                <div className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] rotate-45 w-5 h-5 bg-white shadow-[4px_4px_4px_0px_#00000040]"></div>
            </Link>
        </div>
    );
}

export default ModalItems;