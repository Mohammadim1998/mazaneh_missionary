import Link from "next/link";

const RegisterSelectPointComp = () => {
    return (
        <div className="w-full h-dvh bg-[#FFFFFF] pb-[58px] overflow-y-hidden">
            <div className="w-full h-12 flex items-center bg-[#5461CA] px-4 py-[13px]">
                <div className="flex justify-start items-center gap-x-2">
                    <Link href={"/selectDestination"} className="w-[14px] h-[14px]"><img src="/images/svg/certification/arrowRight.svg" alt="" className="w-full h-full" /></Link>
                    <span className="text-white font-medium text-sm leading-5">درخواست گواهی شما با موفقیت ثبت شد</span>
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center  px-10">
                <div className="flex flex-col items-center">
                    <div className="w-[83px] h-[83px] mb-12"><img src="/images/svg/certification/success.png" alt="" className="w-full h-full" /></div>
                    <span className="text-[#4F4F4F] font-semibold text-base mb-4">نقطه انتخاب شده برای شما ثبت شد</span>
                    <p className="text-[#616161] font-light text-sm leading-8 text-center">
                        درخواست شما توسط کارشناسان مرکز بررسی خواهد شد؛ برای اطلاع از وضعیت آن می توانید به قسمت «گواهی تبلیغی» مراجعه نمایید.                    </p>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 w-full h-[58px] bg-white px-4 py-[10px] shadow-[0px_-1px_4px_0px_#00000026]">
                <Link href={"/dashboardHome"}>
                    <button className="w-full h-full text-white font-medium text-sm leading-5 bg-[#5461CA] rounded-md">بازگشت به پیشخوان</button>
                </Link>
            </div>
        </div>
    );
}

export default RegisterSelectPointComp;