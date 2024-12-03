import Link from "next/link";

const Box = () => {
    return (
        <Link href={"/contentMissionary/1"}>
        <div className="w-full h-[203px] bg-white">
            <div className="">
                <div className="flex gap-x-[14px] border-b-[1px] border-b-[#EAEAEA] items-center justify-center p-4">
                    <div className="flex flex-col gap-y-[6px]">
                        <span className="text-[#4F4F4F] font-semibold text-sm leading-7">خورشید مقدس سرزمین طوس آقا امام رضا علیه السلام</span>
                        <p className="text-[#616161] font-light text-sm leading-6">متن سخرانی ویژه ولادت امام‌رضا علیه‌السلام در پاسخ به اهانت به مقام نورانی امام مهربانی</p>
                    </div>
                    <div className="shrink-0 w-[133px] h-[134px]">
                        <div className="w-full h-[106px] rounded-t-lg"><img src="/images/content/image1.jpg" alt="" className="w-full h-full rounded-t-lg" /></div>
                        <div className="w-full h-[27px] bg-[#1D266C] border-t-[1.5px] border-t-white flex justify-center items-center text-white font-extrabold text-xs leading-5">محرم  ۱۴۰۱</div>
                    </div>
                </div>

                {/* botton section */}
                <div className="w-full px-4 py-[9px]  flex justify-between items-center">
                    <div className="text-[#AAAAAA] font-normal text-xs leading-5 flex gap-x-2">
                        <span className="">تاریخ انتشار:</span>
                        <span className="">۱۴۰۱/۰۳/۲۰</span>
                    </div>

                    <div className="flex justify-center items-center gap-x-[9px]">
                        <div className="flex gap-x-[2px]">
                            {new Array(5 - 3).fill(0).map((item, index) => (
                                <div key={index} className="w-4 h-4"><img src="/images/svg/content/starEmpty.svg" alt="" className="" /></div>
                            ))}
                            {new Array(3).fill(0).map((item, index) => (
                                <div key={index} className="w-4 h-4"><img src="/images/svg/content/starFull.svg" alt="" className="" /></div>
                            ))}
                        </div>
                        <div className="text-[#AAAAAA] font-normal text-xs leading-5">(۲  از  ۵)</div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default Box;