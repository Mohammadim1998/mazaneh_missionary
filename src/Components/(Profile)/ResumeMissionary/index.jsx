"use client";
import { useEffect, useState } from "react";
import Description from "./Description";
import History from "./History";
import Speech from "./Speech";
import { useRouter } from "next/navigation";

const ResumeMissionary = () => {
    const [content, setContent] = useState("Description");
    const [details, setDetails] = useState();
    const router = useRouter()

    useEffect(() => {
        if (content === "Description") {
            setDetails(<Description />)
        } else if (content === "History") {
            setDetails(<History />)
        } else if (content === "Speech") {
            setDetails(<Speech />)
        }
    }, [content]);

    return (
        <div className="w-full h-dvh bg-[#F0F0F1]">
            <div className="relative w-full h-[234px] bg-[#2B39A1] p-4">
                <div onClick={() => router.back()} className="w-full flex justify-start items-center gap-x-4">
                    <div className="w-[14px] h-[14px]"><img src="/images/svg/profile/rightArrowWhite.svg" alt="" className="" /></div>
                    <span className="text-white font-medium text-sm leading-5">رزومه من</span>
                </div>
                {/******************** BOX **********************/}
                <div className="absolute -bottom-24 left-4 right-4 pt-16 h-[229px] bg-white rounded">
                    <div className="w-[88px] h-[88px] absolute left-[50%] top-[-50px] translate-x-[-50%] rounded-full bg-white"><img src="/images/jpg/profile/img-1.jfif" alt="" className="rounded-full" /></div>

                    <div className="w-full text-[#4F4F4F] flex flex-col justify-center items-center mb-4">
                        <span className="font-semibold text-sm leading-5 mb-[10px]">حجت الاسلام مصطفی طالبی رحمت آبادی</span>
                        <div className="font-normal text-xs child:leading-5 mb-[6px] flex justify-center items-center">
                            <span className="">سخنرانی</span>
                            <div className="w-[1px] h-[12px] bg-[#B7B7B799] mx-[6px]"></div>
                            <span className="">حلقه‌داری</span>
                            <div className="w-[1px] h-[12px] bg-[#B7B7B799] mx-[6px]"></div>
                            <span className="">کلاس‌داری</span>
                        </div>

                        <div className="flex justify-center items-center gap-x-[6px]">
                            <div className="w-4 h-4"><img src="/images/svg/profile/location.svg" alt="" className="" /></div>
                            <span className="font-light text-xs leading-5">قم ، کهک</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center gap-x-4">
                        <div className="w-[88px] h-[49px] flex flex-col justify-center items-center bg-[#318FA81A] rounded">
                            <span className="text-[#616161] font-light text-[10px] leading-4">تعداد مجالس</span>
                            <div className="text-[#000000] font-semibold text-xs leading-5">۲۴  مورد</div>
                        </div>

                        <div className="w-[88px] h-[49px] flex flex-col justify-center items-center bg-[#318FA81A] rounded">
                            <span className="text-[#616161] font-light text-[10px] leading-4">دعوت موفق</span>
                            <div className="text-[#000000] font-semibold text-xs leading-5">۲۴  مورد</div>
                        </div>

                        <div className="w-[88px] h-[49px] flex flex-col justify-center items-center bg-[#318FA81A] rounded">
                            <span className="text-[#616161] font-light text-[10px] leading-4">سابقه تبلیغی</span>
                            <div className="text-[#000000] font-semibold text-xs leading-5">۱۴ سال</div>
                        </div>

                    </div>

                </div>
                {/******************** END BOX **********************/}
            </div>

            {/********************  BODY **********************/}
            <div className="w-full bg-[#F0F0F1] pb-4 mt-28 px-4">

                <div className="w-full h-10 grid grid-cols-3 justify-center items-center border-b-[1px] border-b-[#E1E2E6] bg-white rounded-lg">
                    <div onClick={() => setContent("Description")} className={`${content === "Description" ? "border-b-[2px] border-b-[#5462CA]" : ""} h-full flex justify-center items-center gap-x-1`}>
                        <div className="w-4 h-4"><img src={content === "Description" ? "/images/svg/profile/personA.svg" : "/images/svg/profile/person.svg"} alt="" className="" /></div>
                        <span className={`${content === "Description" ? "text-[#5462CA] text-xs" : "text-[#AAAAAE] text-[10px]"} font-normal leading-5`}>معرفی کوتاه</span>
                    </div>

                    <div onClick={() => setContent("History")} className={`${content === "History" ? "border-b-[2px] border-b-[#5462CA]" : ""} h-full flex justify-center items-center gap-x-1`}>
                        <div className="w-4 h-4"><img src={content === "History" ? "/images/svg/profile/historyA.svg" : "/images/svg/profile/history.svg"} alt="" className="" /></div>
                        <span className={`${content === "History" ? "text-[#5462CA] text-xs" : "text-[#AAAAAE] text-[10px]"} font-normal leading-5`}>سوابق مبلغ</span>
                    </div>

                    <div onClick={() => setContent("Speech")} className={`${content === "Speech" ? "border-b-[2px] border-b-[#5462CA]" : ""} h-full flex justify-center items-center gap-x-1`}>
                        <div className="w-4 h-4"><img src={content === "Speech" ? "/images/svg/profile/speechA.svg" : "/images/svg/profile/speech.svg"} alt="" className="" /></div>
                        <span className={`${content === "Speech" ? "text-[#5462CA] text-xs" : "text-[#AAAAAE] text-[10px]"} font-normal leading-5`}>نمونه سخنرانی</span>
                    </div>

                </div>

                <div className="w-full h-full">
                    {details}
                </div>
            </div>
            {/********************  END BODY **********************/}
        </div>
    );
}

export default ResumeMissionary;