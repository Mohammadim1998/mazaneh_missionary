"use client";
import { useEffect, useState } from "react";
import Ready from "./Ready";
import YourInvites from "./YourInvites";
import Done from "./Done";

const Invites = () => {
    const [content, setContent] = useState("Capacity")
    const [detail, setDetail] = useState()

    useEffect(() => {
        if (content === "Capacity") {
            setDetail(<Ready />)
        } else if (content === "YourInvites") {
            setDetail(<YourInvites />)
        } else if (content === "Done") {
            setDetail(<Done />)
        }
    }, [content]);

    return (
        <main className="w-full h-full bg-[#F6F6F6]">
            <div className="flex flex-col">
                <div className="w-full bg-[#5462CA]">
                    <div className="w-full h-full flex justify-between items-center p-4">
                        <span className="text-white font-medium text-sm leading-5">دعوت ها و ظرفیت ها</span>
                        <div className="w-4 h-4"><img src="/images/svg/home/setting.svg" alt="" className="setting" /></div>
                    </div>
                </div>

                <div className="w-full bg-white h-[56px] flex justify-center items-end">
                    <div className="w-full grid grid-cols-3">
                        <div
                            onClick={() => setContent("Capacity")}
                            className={`flex items-center justify-center gap-x-[6px] pb-3 px-0 ${content === "Capacity" ? "border-b-[3px] border-b-[#5462CA]" : "border-b-[3px] border-b-transparent"}`}>
                            <span className={`${content === "Capacity" ? "text-[#5462CA] text-sm font-semibold" : "text-[#4F4F4F] font-medium"} text-sm leading-4`}>آماده پذیرش</span>
                        </div>

                        <div
                            onClick={() => setContent("YourInvites")}
                            className={`flex items-center justify-center gap-x-[6px] pb-3 px-0 ${content === "YourInvites" ? "border-b-[3px] border-b-[#5463CA]" : "border-b-[3px] border-b-transparent"}`}>
                            <span className={`${content === "YourInvites" ? "text-[#5462CA] font-semibold text-sm leading-4" : "text-[#4F4F4F] font-medium text-sm leading-4"}`}>دعوت های شما</span>
                        </div>

                        <div
                            onClick={() => setContent("Done")}
                            className={`flex items-center justify-center gap-x-[6px] pb-3 px-0 ${content === "Done" ? "border-b-[3px] border-b-[#5462CA]" : "border-b-[3px] border-b-transparent"}`}>
                            <span className={`${content === "Done" ? "text-[#5462CA] font-semibold text-sm leading-4" : "text-[#4F4F4F] font-medium text-sm leading-4"}`}>تمام شده</span>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-1">
                {detail}
            </section>
        </main>
    );
}

export default Invites;