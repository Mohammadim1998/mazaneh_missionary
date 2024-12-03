
const Box = ({ active, title, subTitle, sort, time, date }) => {
    return (
        <div className="w-full bg-[#F8F8F8] shadow-[0px_1px_2px_0px_#00000033] px-[10px] pt-[14px] pb-[12px] rounded-lg mb-4">
            <div className="flex gap-x-2 ">
                <div className="w-10 h-10 rounded-full shrink-0">
                    {active
                        ? (<img src="/images/svg/notif/bellBlue.svg" alt="" className="" />)
                        : (<img src="/images/svg/notif/bell.svg" alt="" className="" />)
                    }
                </div>
                <div className="flex flex-col gap-y-1">
                    <span className="text-[#2B39A1] font-medium font-AnjomanSemiBold text-xs leading-5">{title}</span>
                    <p className="text-[#3A3A3A] font-normal text-[10px] leading-4">
                        {subTitle}
                    </p>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#0000000D] my-3"></div>
            {/* Bottom*/}
            <div className="flex justify-between items-center">
                <div className="flex gap-x-1 items-center">
                    <div className="w-3 h-3"><img src="/images/svg/notif/people.svg" alt="" className="" /></div>
                    <span className="text-[#4F4F4F] font-normal text-[10px] leading-4">واحد: </span>
                    <span className="text-[#4F4F4F] font-normal font-AnjomanSemiBold text-[10px] leading-4">{sort}</span>
                </div>

                <div className="flex gap-x-1 items-center">
                    <div className="w-3 h-3"><img src="/images/svg/notif/clock.svg" alt="" className="" /></div>
                    <span className="text-[#4F4F4F] font-normal text-[10px] leading-4">زمان: </span>
                    <div className="flex items-center gap-x-2 text-[#4F4F4F] font-normal text-[10px] leading-4">
                        <span>{time}</span>
                        <div className="w-[6px] h-[1px] bg-[#4F4F4F]"></div>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;