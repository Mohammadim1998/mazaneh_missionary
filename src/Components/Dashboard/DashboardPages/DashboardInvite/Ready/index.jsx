"use client";
import { useState } from "react";
import SortFilterModal from "../boxes/Filters/SortFilterModal";
import PersonFilterModal from "../boxes/Filters/PersonFilterModal";

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"

import "react-multi-date-picker/styles/layouts/mobile.css"
import ModalMap from "../ModalMap";
import Box from "./Box";
import EventFilterModal from "../boxes/Filters/EventFilterModal";

const Ready = () => {
    const [opneModalSort, setOpenModalSort] = useState(false);
    const [opneModalPerson, setOpenModalPerson] = useState(false);
    const [opneModalEvent, setOpenModalEvent] = useState(false);
    const [startDateCooperation, setStartDateCooperation] = useState();
    const [openModalMap, setOpenModalMap] = useState(false);

    return (
        <div className="w-full h-full">

            <div className="w-full bg-white p-[20px_16px_16px_16px] flex gap-x-[9px] mb-1 overflow-x-scroll child:shrink-0 sliderContainer1">
                <div onClick={() => { setOpenModalSort(true) }} className="flex justify-center items-center px-4 py-1 gap-x-[6px] bg-inherit rounded-2xl border-[1px] border-[#00000026]">
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

                <div onClick={() => { setOpenModalEvent(true) }} className={`bg-inherit px-4 py-1 rounded-2xl border-[1px] border-[#00000026] flex justify-center items-center gap-x-[6px]`}>
                    <div className="shrink-0 w-4 h-4"><img src="/images/svg/invite/rad.svg" alt="" className="" /></div>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">مناسبت</span>
                </div>


                <div onClick={() => { setOpenModalPerson(true) }} className="flex justify-center items-center px-4 py-1 gap-x-[6px] bg-inherit rounded-2xl border-[1px] border-[#00000026]">
                    <div className="w-4 h-4 flex justify-center items-center"><img src="/images/svg/invite/wait.svg" alt="" className="" /></div>
                    <span className="text-[#4F4F4F] font-normal text-xs leading-5">نوع مکان</span>
                </div>

            </div>

            <div className="w-full bg-white pb-28">
                <div className="flex h-full flex-col bg-[#F6F6F6] gap-y-2">
                    <Box force={0} />
                    <Box force={1} />
                    <Box force={1} />
                    <Box force={0} />
                </div>

                <SortFilterModal opneModalSort={opneModalSort} setOpenModalSort={setOpenModalSort} />
                <PersonFilterModal opneModalPerson={opneModalPerson} setOpenModalPerson={setOpenModalPerson} />
                <EventFilterModal opneModalEvent={opneModalEvent} setOpenModalEvent={setOpenModalEvent} />

                {/* Start  Map */}
                <div
                    onClick={() => setOpenModalMap(true)}
                    className="z-40 flex justify-center items-center gap-x-1 fixed bottom-[106px] left-[50%] translate-x-[-50%] w-[123px] h-[33px] bg-[#5462CA] rounded-[32px] shadow-[0px_2px_4px_0px_#00000040]">
                    <div className="w-[14px] h-[14px]"><img src="/images/svg/invite/location.svg" alt="" className="" /></div>
                    <span className="text-white font-semibold text-[10px] leading-4">موقعیت روی نقشه</span>
                </div>
                {/* Start  Map */}

                {/* Start Modal Map */}
                <ModalMap openModalMap={openModalMap} setOpenModalMap={setOpenModalMap} />
                {/* Start Modal Map */}
            </div>
        </div>
    );
}

export default Ready;