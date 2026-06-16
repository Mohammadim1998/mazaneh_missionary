import Link from "next/link";

const CompleteRegister = () => {
    return (
        <div className="relative w-full h-dvh bg-[#F6F6F6]">
            <div className="absolute top-0 left-0 bg-[#318FA8] w-full py-8 flex flex-col gap-y-4 justify-center items-center box-shadow-[0px_4px_12px_1px_#0000000D]">
                <div className="w-16 h-16">
                    <img src="/images/svg/invite/success.svg" className="w-16 h-16" alt="" />
                </div>

                <span className="font-semibold text-sm text-white">درخواست شما با موفقیت در سامانه ثبت شد</span>
            </div>

            <div className="w-full h-full bg-white flex flex-col justify-between p-4">
                <div className="w-full h-[323px] mt-[184px] pt-[10px] pb-4 px-4  rounded-lg">
                    <div className="font-medium text-sm text-[#4f4f4f] leading-5 mb-4 text-center">اطلاعات جلسه شما</div>

                    <address className="flex flex-col items-start gap-y-3">
                        <div className="flex flex-col gap-y-1">
                            <span className="text-[#A7A7A7] font-normal text-xs leading-5">نام مکان:</span>
                            <span className="text-[#4F4F4F] font-normal text-xs leading-5">مسجد امام حسین علیه السلام</span>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-[#A7A7A7] font-normal text-xs leading-5">آدرس:</span>
                            <span className="text-[#4F4F4F] font-normal text-xs leading-5">قم، نیروگاه، شهید رئیس کرمی (زاد)، توحید 11 قبل از دوم،</span>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-[#A7A7A7] font-normal text-xs leading-5">نوع مکان:</span>
                            <span className="text-[#4F4F4F] font-normal text-xs leading-5">مسجد</span>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <span className="text-[#A7A7A7] font-normal text-xs leading-5">تاریخ جلسه:</span>
                            <span className="text-[#4F4F4F] font-normal text-xs leading-5">۱۴۰۲/۰۲/۰۹</span>
                        </div>

                        <div className="flex justify-between items-center gap-x-[93px]">
                            <div className="flex flex-col gap-y-1">
                                <span className="text-[#A7A7A7] font-normal text-xs leading-5">ساعت شروع جلسه</span>
                                <span className="text-[#4F4F4F] font-normal text-xs leading-5">۹:۴۵ صبح</span>
                            </div>

                            <div className="flex flex-col gap-y-1">
                                <span className="text-[#A7A7A7] font-normal text-xs leading-5">ساعت پایان جلسه</span>
                                <span className="text-[#4F4F4F] font-normal text-xs leading-5">۱۰:۴۵ صبح</span>
                            </div>
                        </div>
                    </address>
                </div>

                <div className="flex gap-x-[6px] justify-center items-center">
                    <div className="w-[14px] h-[14px]">
                        <img src="/images/svg/invite/infinity.svg" alt="" className="w-[14px] h-[14px]" />
                    </div>

                    <span className="font-light text-[10px] leading-4 text-[#616161]">سامانه در حال یافتن بهترین مبلغ برای جلسه شما می‌باشد.</span>
                </div>

                <Link href={"/dashboardHome"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                    <button className="w-full h-10 bg-[#5461CA] text-white rounded">برو به مدیریت دعوت</button>
                </Link>
            </div>
        </div>
    );
}

export default CompleteRegister;