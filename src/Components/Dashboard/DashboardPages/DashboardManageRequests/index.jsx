"use client";
import BoxSearchHeader from "../../BoxSearchHeader";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Accepts from "./Accepts";
import RecieveReports from "./RecieveReports";
import History from "./History";


const DashboardManageRequests = () => {
    const [content, setContent] = useState("Accepts");
    const [details, setDetails] = useState();

    useEffect(() => {
        if (content === "Accepts") {
            setDetails(<Accepts />)
        } else if (content === "RecieveReports") {
            setDetails(<RecieveReports />)
        } else if (content === "History") {
            setDetails(<History />)
        }
    }, [content]);

    return (
        <main className="w-full bg-white">
            <div className="h-dvh bg-[#F0F0F1]">
                <div className="w-full bg-[#5462CA] p-4">
                    <BoxSearchHeader title={"گزارش های تبلیغی"} />
                </div>

                {/** GetCertification **/}
                <div className="w-full bg-white p-[16px_16px_24px_16px] flex flex-col gap-y-4 mb-2">
                    <span className="text-[#1D256D] font-semibold text-xs leading-5">فعالیت تبلیغی جدیدی ثبت کنید</span>

                    <Link href={"/newMissionaryReport"}>
                        <button className="w-full h-[38px] bg-[#6C7DFF0F] border-[1px] border-[#5461CA] shadow-[0px_1px_3px_0px_#00000033] rounded flex justify-center items-center gap-x-2">
                            <div className="w-3 h-3"><img src="/images/svg/plus.svg" alt="" className="" /></div>
                            <span className="text-[#5461CA] font-semibold text-sm">ثبت فعالیت</span>
                        </button>
                    </Link>

                </div>
                {/** End GetCertification **/}
                <div className="w-full bg-white pt-4 flex justify-center items-end">
                    <div className="w-full grid grid-cols-3">
                        <div
                            onClick={() => setContent("Accepts")}
                            className={`flex items-center justify-center gap-x-[6px] pb-3 px-0 ${content === "Accepts" ? "border-b-[3px] border-b-[#5462CA]" : "border-b-[3px] border-b-transparent"}`}>
                            <span className={`${content === "Accepts" ? "text-[#5462CA] text-sm font-semibold" : "text-[#4F4F4F] font-medium"} text-sm leading-4`}>گزارش‌های تبلیغی</span>
                        </div>

                        <div
                            onClick={() => setContent("RecieveReports")}
                            className={`flex items-center justify-center gap-x-[6px] pb-3 px-0 ${content === "RecieveReports" ? "border-b-[3px] border-b-[#5463CA]" : "border-b-[3px] border-b-transparent"}`}>
                            <span className={`${content === "RecieveReports" ? "text-[#5462CA] font-semibold text-sm leading-4" : "text-[#4F4F4F] font-medium text-sm leading-4"}`}>سوابق تبلیغی</span>
                        </div>

                        <div
                            onClick={() => setContent("History")}
                            className={`flex items-center justify-center gap-x-[6px] pb-3 px-0 ${content === "History" ? "border-b-[3px] border-b-[#5462CA]" : "border-b-[3px] border-b-transparent"}`}>
                            <span className={`${content === "History" ? "text-[#5462CA] font-semibold text-sm leading-4" : "text-[#4F4F4F] font-medium text-sm leading-4"}`}>تایید شده‌ها</span>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-1">{details}</div>

            </div>
        </main>
    );
}

export default DashboardManageRequests;