const Capacity = () => {
    return (
        <div>
            <div className="w-full pr-4 pl-10 border-r-[#EBEBEB] border-b-[1px] pb-10 mt-4">
                <div className="flex justify-start items-center gap-x-[6px] mb-4">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/capacity2.svg" alt="" className="w-full h-full" /></div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">ظرفیت های این نقطه</span>
                </div>

                <div className="pr-2 flex flex-col gap-y-3">
                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            پایگاه بسیج شامل بیست و پنج عضو  فعال
                        </p>
                    </div>

                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            پایگاه بسیج شامل بیست و پنج عضو  فعال
                        </p>
                    </div>
                    <div className="border-r-[#EBEBEB] border-r-[2px] flex flex-col gap-y-1 pr-[10px]">
                        <p className="text-[#616161CC] font-normal text-[11px] leading-5">
                            خیریه و هیئت امنای فعال مسجد برای مشارکت در امور خیر
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-start items-center gap-x-[6px] pt-5 px-4">
                <div className="w-4 h-4"><img src="/images/svg/mosque/pen.svg" alt="" className="w-full h-full" /></div>
                <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">ویرایش یا اضافه کردن ظرفیت برای این نقطه</span>
            </div>
        </div>
    );
}

export default Capacity;