import Link from "next/link";
import SquareBook from "./SquareBook";

const MissionaryCapacity = () => {
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

            <section className="w-full h-full mt-4 grid grid-cols-1 gap-x-4 gap-y-4 child:shrink-0 px-4">
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
                <SquareBook
                    img={"/images/home/contentMissionary1.jpg"}
                    title={"مسجد حجت بن الحسن علیه السلام"}
                    subTitle={"تهران، فیروزکوه"}
                    calendar={"موردی محرم ۱۴۰۳"}
                    days={5}
                />
            </section>
        </div>
    );
}

export default MissionaryCapacity;