import Link from "next/link";
import SquareBox from "./SquareBox";

const AllFeatures = () => {
    return (
        <div className="w-full min-h-dvh bg-[#F6F6F6] pb-8">
            <div className="w-full h-[46px] bg-[#5461CA] flex justify-between items-center px-4 py-[13px]">
                <div className="flex items-center gap-x-2">
                    <Link href={"/dashboardHome"} className="w-[14px] h-[14px]">
                        <img src="/images/svg/profile/rightArrowWhite.svg" alt="" className="" />
                    </Link>
                    <span className="text-white font-medium text-sm leading-5">خدمات سامانه شمع</span>
                </div>

                <div className="flex flex-col gap-y-[3px] child:w-[3px] child:h-[3px] child:rounded-full child:bg-white">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>

            <section className="w-full h-full mt-4 grid grid-cols-3 gap-x-4 gap-y-4 child:shrink-0 px-4">
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"مدیریت دعوت"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"عضویت در شبکه های تبلیغی"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"ظرفیت های تبلیغی"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"ثبت فعالیت تبلیغی"} />
                <SquareBox img={"/images/svg/squareIcon-1.svg"} title={"گواهی تبلیغی"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"دعوت مستقیم از سخنران"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"سوابق تبلیغی"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"نمایش اطلس تبلیغی"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"ارتباط با مسئولین"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"رزومه"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"پروفایل"} />
                <SquareBox img={"/images/svg/pageIcon.svg"} title={"اعلام مشارکت"} />
                <SquareBox img={"/images/svg/bookIcon.svg"} title={"محتوای تبلیغی"} />
                <SquareBox img={"/images/svg/personIcon.svg"} title={"اطلاعیه"} />


            </section>
        </div>
    );
}

export default AllFeatures;