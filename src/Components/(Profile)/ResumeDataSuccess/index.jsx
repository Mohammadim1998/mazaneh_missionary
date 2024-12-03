import Link from "next/link";

const ResumeDataSuccessComp = () => {
    return (
        <div className="w-full h-dvh flex flex-col bg-[#F0F0F1]">
            <div className="w-full h-full flex justify-center items-center px-8">
                <div className="w-[244px] h-[252px]">
                    <img src="/images/svg/resume/success.png" alt="" className="w-full h-full" />
                </div>
            </div>

            <div className="w-full h-[382px] flex flex-col justify-between bg-white px-4 py-12 pb-4 rounded-t-3xl">
                <div className="flex flex-col justify-center items-center gap-y-6">
                    <span className="text-[#4F4F4F] font-bold text-sm leading-5">اطلاعات رزومه شما با موفقیت ثبت شد</span>
                    <p className="text-[#616161] font-normal text-center text-sm leading-5">
                        نتیجه رزومه خود را میتوانید پس از بررسی کارشناسان ما در قسمت پروفایل مشاهده نمایید .
                    </p>
                </div>

                <Link href={"/dashboardProfile"}>
                    <button className="w-full h-[38px] bg-[#5461CA] text-white font-medium text-sm leading-5 rounded cursor-pointer">بازگشت به خانه</button>
                </Link>
            </div>
        </div>
    );
}

export default ResumeDataSuccessComp;