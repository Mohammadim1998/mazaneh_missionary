import BoxComment2 from "./BoxComment2";

const Missionary = () => {
    return (
        <div className="w-full mb-[119px]">
            <div className="w-full bg-white pt-6 px-4 mb-8">
                <div className="flex justify-start items-center gap-x-[6px] mb-4">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/prof.svg" alt="" className="" /></div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">نظرات درباره این نقطه</span>
                </div>

                <BoxComment2 title={"میثم ابراهیم‌آبادی"} img={"/images/person2.jpg"} />

            </div>

            <div className="w-full bg-white pt-6 px-4 pb-4">
                <div className="flex justify-start items-center gap-x-[6px] mb-4">
                    <div className="w-4 h-4"><img src="/images/svg/mosque/personDBL.svg" alt="" className="" /></div>
                    <span className="text-[#3A3A3A] font-bold text-[10px] leading-4">حبیب الرحمن احمدبیگی</span>
                </div>

                <BoxComment2 title={"میثم ابراهیم‌آبادی"} img={"/images/person1.jpg"} />
                <BoxComment2 title={"میثم ابراهیم‌آبادی"} img={"/images/person1.jpg"} />

            </div>
        </div>
    );
}

export default Missionary;