import Link from "next/link";

const SquareBook = ({ img, title, subTitle, days, calendar }) => {
    return (
        <div className="shrink-0 w-full bg-[#FFFFFF] h-24 rounded-lg shadow-[0px_2px_2px_0px_#00000026] flex justify-between items-center gap-x-4 px-3">
            <div className="shrink-0 bg-[#F2F2F2] w-[50px] h-[70px] flex flex-col justify-center items-center gap-y-3 rounded-md">
                <div className="w-7 h-7 flex justify-center items-center"><img src="/images/svg/home/soundLetter.svg" alt="" className="" /></div>

                <div className="flex justify-center items-center gap-x-1 text-[#787878] font-semibold text-[10px]">
                    <span>{days.toLocaleString("fa-IR")}</span>
                    <span>روز</span>
                </div>
            </div>

            <div className="flex flex-col items-start">
                <span className="text-[#4F4F4F] font-medium text-xs leading-5 mb-[10px] line-clamp-1">{title}</span>

                <div className="flex flex-col justify-start items-start gap-y-[10px]">
                    <div className="flex justify-center items-center gap-x-1">
                        <div className="w-[14px] h-[14px]"><img src="/images/svg/home/location.svg" alt="" /></div>
                        <span className="text-[#787878] font-semibold text-[10px] leading-4">{subTitle}</span>
                    </div>

                    <div className="flex justify-center items-center gap-x-1">
                        <div className="w-[14px] h-[14px]"><img src="/images/svg/home/calendar.svg" alt="" /></div>
                        <span className="text-[#787878] font-semibold text-[10px] leading-4">{calendar}</span>
                    </div>
                </div>
            </div>

            <Link href={"/capacityMissionary/1"}>
                <div className="shrink-0 pr-6 pl-4 py-2 flex justify-center items-center  bg-[#5462CA] rounded-md">
                    <span className="text-white font-bold text-sm">بیشتر</span>

                    <div className="w-5 h-5 flex justify-center items-center"><img src="/images/svg/arrowLeft.svg" alt="" className="" /></div>
                </div>
            </Link>
        </div>
    );
}

export default SquareBook;