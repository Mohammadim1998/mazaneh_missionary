const AllHistory = () => {
    return (
        <div className="w-full h-full flex flex-col gap-y-4">
            <div className="relative w-full h-[60px] bg-[#F6F6F6] rounded-md">
                <div className="absolute top-2 right-[6px] w-4 h-4">
                    <img src="/images/svg/certification/notice.svg" alt="" className="w-full h-full" />
                </div>

                <p className="w-full text-justify text-[#4F4F4F] font-normal text-xs leading-6 pr-7 pl-[32px] py-2">
                    همه سوابق شما در سامانه شمع به شرح زیر است و درخواست گواهی تبلیغی شما <span className="font-semibold text-xs leading-5">مطابق تاریخ زیر</span> ارسال خواهد شد.
                </p>
            </div>

            <div className="w-full h-[188px] bg-[#FCFCFA] flex flex-col shadow-[0px_1px_2px_0px_#00000033] p-2 mb-2">
                <div className="w-full h-[94px] grid grid-cols-2 grid-rows-1">

                    <div className="flex flex-col justify-center items-center gap-y-2 border-l-[#0000001A] border-l-[1px]">
                        <div className="flex items-center gap-x-[6px]">
                            <div className="w-[18px] h-[18px]"><img src="/images/svg/certification/startCertification.svg" alt="" className="w-full h-full" /></div>
                            <span className="text-[#1D256DCC] font-light text-xs leading-5">شروع گواهی از</span>
                        </div>
                        <div className="text-[#1D256D] font-bold text-xs leading-5">۱۴۰۰/۱۲/۲۱</div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <div className="flex items-center gap-x-[6px]">
                            <div className="w-[18px] h-[18px]"><img src="/images/svg/certification/startCertification.svg" alt="" className="w-full h-full" /></div>
                            <span className="text-[#1D256DCC] font-light text-xs leading-5">پایان گواهی تا</span>
                        </div>
                        <div className="text-[#1D256D] font-bold text-xs leading-5">۱۴۰۰/۱۲/۲۱</div>
                    </div>

                </div>

                <div className="w-full h-[94px] grid grid-cols-2 grid-rows-1 border-t-[#0000001A] border-t-[1px]">

                    <div className="flex flex-col justify-center items-center gap-y-2 border-l-[#0000001A] border-l-[1px]">
                        <div className="flex items-center gap-x-[6px]">
                            <div className="w-[18px] h-[18px]"><img src="/images/svg/certification/numberOfHistory.svg" alt="" className="w-full h-full" /></div>
                            <span className="text-[#1D256DCC] font-light text-xs leading-5">تعداد سوابق شما</span>
                        </div>
                        <div className="text-[#1D256D] font-bold text-xs leading-5">۲۱ مورد</div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <div className="flex items-center gap-x-[6px]">
                            <div className="w-[18px] h-[18px]"><img src="/images/svg/certification/sumeOfHistory.svg" alt="" className="w-full h-full" /></div>
                            <span className="text-[#1D256DCC] font-light text-xs leading-5">جمع روز تبلیغ</span>
                        </div>
                        <div className="text-[#1D256D] font-bold text-xs leading-5">۴۴ روز</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AllHistory;