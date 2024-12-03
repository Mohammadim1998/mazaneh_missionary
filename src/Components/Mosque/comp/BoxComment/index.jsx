const BoxComment = () => {
    return (
        <div className="w-full bg-[#F6F6F6] flex flex-col gap-y-2 py-[11px] px-3 rounded-lg mb-3">
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-start items-center gap-x-[10px]">
                    <div className="shrink-0 w-8 h-8 rounded-full"><img src="/images/person2.jpg" alt="" className="w-full h-full rounded-full" /></div>
                    <div className="flex flex-col gap-y-1">
                        <span className="text-[#4F4F4F] font-medium text-[10px] leading-4">میثم ابراهیم‌آبادی</span>

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
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-x-[15px]">
                    <div className="text-[#616161] font-normal text-[11px] ">
                        <span className="leading-5">۱۴۰۲/۰۱/۲۱</span>
                        <span className="mx-1">-</span>
                        <span className="leading-5">۱۸:۵۲</span>
                    </div>

                    <div className="flex flex-col items-center gap-y-[3px] ">
                        <div className="bg-[#3A3A3A] w-[3px] h-[3px] rounded-full"></div>
                        <div className="bg-[#3A3A3A] w-[3px] h-[3px] rounded-full"></div>
                        <div className="bg-[#3A3A3A] w-[3px] h-[3px] rounded-full"></div>
                    </div>
                </div>
            </div>

            <p className="text-[#616161CC] font-normal text-[11px] leading-5 pl-5">
                بهتر است در این مکان مباحث منبر خود را به روش سلسله جلساتی ارائه دهید و از ارائه تک جلسه‌ای اجتناب نمایید.
            </p>
        </div>
    );
}

export default BoxComment;