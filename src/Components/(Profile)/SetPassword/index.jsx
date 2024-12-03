import Link from "next/link";

const SetPassword = () => {
    return (
        <div className="w-full h-dvh bg-[#F0F0F0]">
            <div className="w-full h-[46px] bg-[#5461CA] flex justify-between items-center px-4 py-[13px]">

                <div className="flex items-center gap-x-2">
                    <Link href={"/dashboardProfile"} className="w-[14px] h-[14px]"><img src="/images/svg/profile/rightArrowWhite.svg" alt="" className="" /></Link>
                    <span className="text-white font-medium text-sm leading-5">تغییر رمز عبور</span>
                </div>

                <div className="flex flex-col gap-y-[3px] child:w-[3px] child:h-[3px] child:rounded-full child:bg-white">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>

            </div>

            <div className="w-full px-4 py-[14px] mt-52">
                <form className="w-full flex flex-col gap-y-6">
                    <div className="w-full h-10">
                        <input type="text" placeholder="رمز عبور فعلی" className="w-full h-full border-[1px] placeholder:text-[#AAAAAE] outline-none font-normal text-xs px-5 border-[#E1E2E6] rounded-md" />
                    </div>
                    
                    <div className="w-full h-10">
                        <input type="text" placeholder="رمز عبور جدید" className="w-full h-full border-[1px] placeholder:text-[#AAAAAE] outline-none font-normal text-xs px-5 border-[#E1E2E6] rounded-md" />
                    </div>
                    <div className="w-full h-10">
                        <input type="text" placeholder="تکرار رمز عبور" className="w-full h-full border-[1px] placeholder:text-[#AAAAAE] outline-none font-normal text-xs px-5 border-[#E1E2E6] rounded-md" />
                    </div>
                </form>

                <button className="w-full h-[38px] bg-[#5461CA] rounded text-white font-medium text-sm mt-8 cursor-pointer">ثبت نام</button>
            </div>
        </div>
    );
}

export default SetPassword;