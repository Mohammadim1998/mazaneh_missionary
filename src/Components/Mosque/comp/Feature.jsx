const Feature = () => {
    return (
        <div className="w-full bg-white mb-[246px]">
            <div className="w-full pr-4 pl-10 border-r-[#EBEBEB] border-b-[1px] pb-10 mt-4">
                <div className="flex justify-start items-center gap-x-[6px] mb-4">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/activeFeature.svg" alt="" className="w-full h-full" /></div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">امکانات فعال نقطه</span>
                </div>

                <div className="pr-2 flex flex-col gap-y-3">
                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            ظروف پذیرایی شامل دیس غذا و قاشق و چنگال به تعداد ۵۰۰ دست
                        </p>
                    </div>

                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            پرژکتوربرای  ارائه به همراه تجهیزات صوتی برای مجالس و مراسمات
                        </p>
                    </div>

                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            دو سوئیت با امکانات اسکان برای خادم و روحانی شهر
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full pr-4 pl-10 border-r-[#EBEBEB] border-b-[1px] pb-10 mt-4">
                <div className="flex justify-start items-center gap-x-[6px] mb-4">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/cube.svg" alt="" className="w-full h-full" /></div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">امکانات بالقوه نقطه</span>
                </div>

                <div className="pr-2 flex flex-col gap-y-3">
                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            سالن زیر زمین مسجد قابلیت تبدیل به مجموعه ورزشی را دارد
                        </p>
                    </div>

                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            مغازه کنار مسجد قابلیت بازسازی و اجاره دادن را دارد
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-start items-center gap-x-[6px] pt-5 px-4">
                <div className="w-4 h-4"><img src="/images/svg/mosque/pen.svg" alt="" className="w-full h-full" /></div>
                <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">ویرایش یا اضافه کردن امکانات برای این نقطه</span>
            </div>
        </div>
    );
}

export default Feature;