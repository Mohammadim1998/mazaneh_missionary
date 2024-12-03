
const WaitingInvite = () => {

    return (
        <div className="w-full bg-white rounded-lg p-3 shadow-[0px_0px_1px_1px_#00000026]">

            <div className="w-full flex">
                <div className="shrink-0 w-11 h-11 bg-[#F2F2F2] rounded-md flex justify-center items-center"><img src="/images/svg/home/soundLetter.svg" alt="" className="" /></div>

                <div className="w-full mr-3 ml-2">
                    <p className="text-[#4F4F4F] ml-3 font-medium text-xs leading-5 line-clamp-2">مسجد حضرت حجت بن الحسن العکسری علیهما السلام...</p>
                </div>

                <div className="shrink-0 w-[82px] h-[33px] p-[2px] border-[1px] border-dashed border-[#F2F2F2]">
                    <div className="shrink-0 w-full h-full flex justify-center items-center bg-[#F2F2F2] rounded text-[#787878] font-normal text-xs leading-5">
                        ۱۴۰۳۰۴۲۱۵۸ #
                    </div>
                </div>

            </div>

            <div className="w-full flex justify-center items-center gap-x-2 mt-3 px-4 pb-4">

                <div className="text-[#4F4F4F] font-semibold text-[10px] leading-4">از<span className="mr-1">۱۴۰۳/۰۵/۲۲</span></div>

                <div className="relative w-full flex justify-center items-center">
                    <div className="absolute w-full h-[1px] bg-[#00000026] rounded-[1px]"></div>
                    <div className="absolute w-[50px] h-6 rounded-[32px] bg-[#F4F5FF] text-[#5462CA] font-semibold text-[10px] leading-4 flex justify-center items-center">۲۲  روز</div>
                </div>

                <div className="text-[#4F4F4F] font-semibold text-[10px] leading-4">تا<span className="mr-1">۱۴۰۳/۰۵/۲۲</span></div>
            </div>

            <div className="w-full pt-3 pb-[5px] flex justify-between items-center">
                <div className="flex justify-center items-center gap-x-1">
                    <div className="w-[14px] h-[14px] flex justify-center items-center"><img src="/images/svg/home/location.svg" alt="" className="" /></div>
                    <address className="text-[#787878] font-semibold text-[10px] leading-4">تهران، فیروزکوه</address>
                </div>

                <div className="w-[76px] h-[27px] bg-[#5462CA] rounded flex justify-center items-center gap-x-1">
                    <span className="text-white font-bold text-[10px] leading-4">جزئیات</span>
                    <div className="w-[6px] h-[9px]"><img src="/images/svg/home/leftArrowLittle.svg" alt="" className="" /></div>
                </div>
            </div>
        </div>
    );
}

export default WaitingInvite;