const AboutUs = () => {
    return (
        <div className="w-full pb-[127px]">
            <div className="w-full bg-[#FBFBFB] border-b-[#E5E5E5] flex justify-evenly border-b-[1px] pt-[28px] pb-6">
                <div className="w-[50px] flex flex-col justify-center gap-y-[9px] ">
                    <div className="w-8 h-8 flex justify-center items-center mx-auto bg-[#EEEFF7] rounded-lg">
                        <img src="/images/svg/mosque/capacity.svg" alt="" className="w-[18px] h-[18px]" />
                    </div>
                    <div className="text-[#3A3A3A] font-normal text-[10px] text-center">ثبت ظرفیت تبلیغی</div>
                </div>

                <div className="w-[50px] flex flex-col justify-center gap-y-[9px] ">
                    <div className="w-8 h-8 flex justify-center items-center mx-auto bg-[#EEEFF7] rounded-lg">
                        <img src="/images/svg/mosque/action.svg" alt="" className="w-[18px] h-[18px]" />
                    </div>
                    <div className="text-[#3A3A3A] font-normal text-[10px] text-center">ثبت فعالیت تبلیغی</div>
                </div>

                <div className="w-[50px] flex flex-col justify-center gap-y-[9px] ">
                    <div className="w-8 h-8 flex justify-center items-center mx-auto bg-[#EEEFF7] rounded-lg">
                        <img src="/images/svg/mosque/missionary.svg" alt="" className="w-[18px] h-[18px]" />
                    </div>
                    <div className="text-[#3A3A3A] font-normal text-[10px] text-center">ثبت سوابق تبلیغی</div>
                </div>

                <div className="w-[50px] flex flex-col justify-center gap-y-[9px] ">
                    <div className="w-8 h-8 flex justify-center items-center mx-auto bg-[#EEEFF7] rounded-lg">
                        <img src="/images/svg/mosque/history.svg" alt="" className="w-[18px] h-[18px]" />
                    </div>
                    <div className="text-[#3A3A3A] font-normal text-[10px] text-center">تاریخچه فعالیت نقطه</div>
                </div>
            </div>

            <div className="w-full bg-white border-b-[#E5E5E5] border-b-[1px] py-[18px]">
                <div className="w-full flex justify-between items-center px-4 ">
                    <div className="flex items-center gap-x-[6px]">
                        <div className="w-4 h-4"><img src="/images/svg/mosque/location.svg" alt="" className="w-full h-full" /></div>
                        <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">آدرس دقیق</span>
                    </div>

                    <div className="flex items-center gap-x-[5px]">
                        <div className="w-4 h-4"><img src="/images/svg/mosque/copy.svg" alt="" className="w-full h-full" /></div>
                        <span className="text-[#3A3A3A] font-medium text-[10px] leading-4">رونوشت</span>
                    </div>
                </div>

                <div className="text-[#616161CC] font-normal text-[12px] leading-5 mt-4 pr-[38px]">قم، کهک، بلوار مهندس کبیری، کوچه ۱۱ پلاک ۲۲</div>
            </div>

            <div className="w-full px-4 bg-white border-b-[#E5E5E5] border-b-[1px] py-[18px]">
                <div className="flex gap-x-[6px] items-center mb-4">
                    <div className="w-4 h-4">
                        <img src="/images/svg/mosque/explain.svg" alt="" className="w-full h-full" />
                    </div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">توضیحات</span>
                </div>

                <p className="text-[#616161CC] font-normal text-xs leading-6 pr-[22px]">
                    این مسجد یکی از فعال‌ترین مساجد شهر است و فعالیت های آن در زمینه های متعدد فرهنگی اجتماعی ستودنی است؛ به عنوان مثال برگزاری زیارت عاشورا در وعده نماز صبح و ارائه پک صبحانه به افراد
                </p>
            </div>

            <div className="w-full px-4 bg-white pt-[18px]">
                <div className="flex items-center gap-x-[6px] mb-[20px]">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/camera.svg" alt="" className="w-full h-full" /></div>

                    <span className="text-[#4F4F4F] font-semibold text-[10px] leading-3">افزودن تصویر برای این مکان</span>
                </div>
               
                <div className="flex items-center gap-x-[6px] mb-[20px]">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/pen.svg" alt="" className="w-full h-full" /></div>

                    <span className="text-[#4F4F4F] font-semibold text-[10px] leading-3">افزودن تصویر برای این مکان</span>
                </div>
               
                <div className="flex items-center gap-x-[6px]">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/warning.svg" alt="" className="w-full h-full" /></div>

                    <span className="text-[#4F4F4F] font-semibold text-[10px] leading-3">افزودن تصویر برای این مکان</span>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;