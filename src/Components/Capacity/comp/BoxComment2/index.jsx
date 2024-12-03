const BoxComment2 = ({title,img}) => {
    return (
        <div className="w-full bg-[#F6F6F6] flex flex-col gap-y-2 py-[11px] px-3 rounded-lg mb-3">
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-start items-center gap-x-[10px]">
                    <div className="shrink-0 w-8 h-8 rounded-full"><img src={img} alt="" className="w-full h-full rounded-full" /></div>
                    <div className="flex flex-col gap-y-1">
                        <span className="text-[#4F4F4F] font-medium text-[10px] leading-4">{title}</span>

                        <div className="flex justify-center items-center  gap-x-[3px]">
                            <div className="flex justify-center items-center  gap-x-[3px]">
                                <div className="w-[14px] h-[14px]"><img src="/images/svg/mosque/emptyStar.svg" alt="" className="w-full h-full" /></div>
                                <div className="w-[14px] h-[14px]"><img src="/images/svg/mosque/emptyStar.svg" alt="" className="w-full h-full" /></div>
                            </div>
                            <div className="flex justify-center items-center gap-x-[3px]">
                                <div className="w-[14px] h-[14px]"><img src="/images/svg/mosque/star.svg" alt="" className="w-full h-full" /></div>
                                <div className="w-[14px] h-[14px]"><img src="/images/svg/mosque/star.svg" alt="" className="w-full h-full" /></div>
                                <div className="w-[14px] h-[14px]"><img src="/images/svg/mosque/star.svg" alt="" className="w-full h-full" /></div>
                            </div>
                            <span className="text-[#4F4F4F] font-normal text-[11px] leading-4 mr-2">۳/۵</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full border-r-[#EBEBEB] border-b-[1px] my-2"></div>

            <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-x-[6px]">
                    <div className="w-6 h-6 bg-[#E6E7EF] flex justify-center items-center rounded-full"><img src="/images/svg/mosque/prof.svg" alt="" className="w-3 h-3" /></div>
                    <span className="text-[#3A3A3A] font-medium text-[10px] leading-4">پروفایل</span>
                </div>

                <div className="flex items-center gap-x-[6px]">
                    <div className="w-6 h-6 bg-[#E6E7EF] flex justify-center items-center rounded-full"><img src="/images/svg/mosque/calander.svg" alt="" className="w-3 h-3" /></div>
                    <span className="text-[#3A3A3A] font-medium text-[10px] leading-4">تاریخچه فعالیت مبلغ</span>
                </div>

                <div className="flex items-center gap-x-[6px]">
                    <div className="flex flex-col justify-center items-center gap-y-[1px] w-6 h-6 bg-[#E6E7EF] rounded-full">
                        <div className="bg-[#2B39A1] w-[3px] h-[3px] rounded-full"></div>
                        <div className="bg-[#2B39A1] w-[3px] h-[3px] rounded-full"></div>
                        <div className="bg-[#2B39A1] w-[3px] h-[3px] rounded-full"></div>
                    </div>
                    <span className="text-[#3A3A3A] font-medium text-[10px] leading-4">جزئیات فعالیت</span>
                </div>
            </div>
        </div>

    );
}

export default BoxComment2;