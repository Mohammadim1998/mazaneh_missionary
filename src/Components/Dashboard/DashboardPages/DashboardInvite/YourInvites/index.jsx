"use client";
import { useEffect, useState } from "react";
import AllInvites from "../boxes/AllInvites";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"

import "react-multi-date-picker/styles/layouts/mobile.css"
import SortFilterModal from "../boxes/Filters/SortFilterModal";
import PersonFilterModal from "../boxes/Filters/PersonFilterModal";

import HostComp from "../boxes/Host";
import YourInvitesComp from "../boxes/YourInvitesComp";
import EventFilterModal from "../boxes/Filters/EventFilterModal";

const YourInvites = () => {
    const [opneModalSort, setOpenModalSort] = useState(false);
    const [opneModalPerson, setOpenModalPerson] = useState(false);
    const [opneModalEvent, setOpenModalEvent] = useState(false);
    const [startDateCooperation, setStartDateCooperation] = useState();
    const [content, setContent] = useState("HostComp")
    const [detail, setDetail] = useState()

    useEffect(() => {
        if (content === "HostComp") {
            setDetail(<HostComp />)
        } else if (content === "YourInvitesComp") {
            setDetail(<YourInvitesComp />)
        }
    }, [content]);

    return (
        <div className="w-full h-full bg-[#F6F6F6] flex flex-col gap-y-4">
            <div className="">
                <div className="w-full bg-white p-[20px_16px_16px_16px] flex gap-x-[9px] overflow-x-scroll child:shrink-0 sliderContainer1">
                    <div onClick={() => setOpenModalSort(true)} className="flex justify-center items-center px-4 py-1 gap-x-[6px] bg-inherit rounded-2xl border-[1px] border-[#00000026]">
                        <div className="w-4 h-4 flex justify-center items-center"><img src="/images/svg/invite/sort.svg" alt="" className="" /></div>
                        <span className="text-[#4F4F4F] font-normal text-xs leading-5">مرتب سازی</span>
                    </div>

                    <div className={"flex justify-center items-center px-4 py-1 gap-x-[6px] bg-inherit rounded-2xl border-[1px] border-[#00000026]"}>
                        <div className="shrink-0 w-4 h-4"><img src="/images/svg/invite/calander2.svg" alt="" className="" /></div>
                        <DatePicker
                            value={startDateCooperation}
                            onChange={setStartDateCooperation}
                            className="rmdp-mobile"
                            inputClass="custom-input-startHour w-[30px] outline-none font-normal text-xs placeholder:text-[#4F4F4F]"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            placeholder="تاریخ"
                            animations={[
                                opacity(),
                                transition({
                                    from: 40,
                                    transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                }),
                            ]}
                        />
                    </div>

                    <div className={`bg-inherit px-4 py-1 rounded-2xl border-[1px] border-[#00000026] flex justify-center items-center gap-x-[6px]`}>
                        <div className="shrink-0 w-4 h-4"><img src="/images/svg/invite/rad.svg" alt="" className="" /></div>
                        <span onClick={() => setOpenModalEvent(true)} className="text-[#4F4F4F] font-normal text-xs leading-5">مناسبت</span>
                    </div>


                    <div onClick={() => setOpenModalPerson(true)} className="flex justify-center items-center px-4 py-1 gap-x-[6px] bg-inherit rounded-2xl border-[1px] border-[#00000026]">
                        <div className="w-4 h-4 flex justify-center items-center"><img src="/images/svg/invite/wait.svg" alt="" className="" /></div>
                        <span className="text-[#4F4F4F] font-normal text-xs leading-5">نوع مکان</span>
                    </div>

                </div>

                <div className="w-full bg-white grid grid-cols-2 justify-between items-center gap-x-4 pb-4 pt-2 px-4">

                    <div onClick={() => setContent("YourInvitesComp")}
                        className={`h-10 flex justify-center items-center gap-x-[6px] rounded-[6px]
                    ${content === "YourInvitesComp" ? "border-[1px] border-[#5462CA] bg-[#5462CA0A]" : "border-[1px] border-[#0000001A]"}`}>
                        <div className="w-6 h-6 flex justify-center items-center"><img src={content === "YourInvitesComp" ? "/images/svg/invite/microPhoneA.svg" : "/images/svg/invite/microPhone.svg"} alt="" className="" /></div>
                        <span className={`leading-5 block ${content === "YourInvitesComp" ? "text-[#5462CA] font-semibold text-sm" : "text-[#4F4F4F] font-normal text-sm"}`}>دعوت های از شما</span>
                    </div>

                    <div onClick={() => setContent("HostComp")}
                        className={`h-10 flex justify-center items-center gap-x-[6px] rounded-[6px]
                    ${content === "HostComp" ? "border-[1px] border-[#5462CA] bg-[#5462CA0A]" : "border-[1px] border-[#0000001A]"}`}>
                        <div className="w-6 h-6 flex justify-center items-center"><img src={content === "HostComp" ? "/images/svg/invite/letterHostA.svg" : "/images/svg/invite/letterHost.svg"} alt="" className="" /></div>
                        <span className={`leading-5 block ${content === "HostComp" ? "text-[#5462CA] font-semibold text-sm" : "text-[#4F4F4F] font-normal text-sm"}`}>میزبانی شما</span>
                    </div>

                </div>

                <section className="mt-1 bg-white">
                    {detail}
                </section>
            </div>

            <SortFilterModal opneModalSort={opneModalSort} setOpenModalSort={setOpenModalSort} />
            <PersonFilterModal opneModalPerson={opneModalPerson} setOpenModalPerson={setOpenModalPerson} />
            <EventFilterModal opneModalEvent={opneModalEvent} setOpenModalEvent={setOpenModalEvent} />

        </div>
    );
}

export default YourInvites;