"use client";
import Link from "next/link";
import Box from "./Box";
import { useEffect, useState } from "react";
import OptionSelectEvent from "./OptionSelectEvent";
import OptionSelectKindOfContent from "./OptionSelectKindOfContent";
import OptionSelectArrange from "./OptionSelectArrange";

const Content = () => {
    const [openKindOfContentModal, setOpenKindOfContentModal] = useState(false);
    const [openEventModal, setOpenEventModal] = useState(false);
    const [openArrangeModal, setOpenArrangeModal] = useState(false);

    const [typeOfContentInput, setTypeOfContentInput] = useState([]);
    const [eventInput, setEventInput] = useState([]);
    const [arrangeInput, setArrangeInput] = useState([]);

    const [mainDataArray, setMainDataArray] = useState([]);

    const [closeTypeOfContentFilters, setCloseTypeOfContentFilters] = useState(false);
    const [closeEvenFilters, setCloseEvenFilters] = useState(false);
    const [closeArrangeFilters, setCloseArrangeFilters] = useState(false);

    useEffect(() => {
        setMainDataArray([...eventInput, ...arrangeInput, ...typeOfContentInput]);
    }, [eventInput, arrangeInput, typeOfContentInput,]);

    console.log("mainDataArray ===>>>>", mainDataArray);

    return (
        <div className="relative w-full h-dvh bg-[#F6F6F6]">

            <div className="fixed top-0 left-0 right-0 w-full h-12 flex justify-between items-center bg-[#5461CA] px-4 py-[13px]">
                <div className="flex justify-start items-center gap-x-2">
                    <Link href={"/dashboardHome"}>
                        <div className="w-[14px] h-[14px]"><img src="/images/svg/content/rightArrow.svg" alt="" className="w-full h-full" /></div>
                    </Link>
                    <span className="text-white font-medium text-sm leading-5">محتوای تبلیغی</span>
                </div>

                <div className="flex flex-col gap-y-[3px]">
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                </div>
            </div>

            <div className="w-full bg-white flex items-center justify-start gap-x-[10px] px-5 py-[12px] mt-12 mb-[10px]">
                {typeOfContentInput.length === 0
                    ? (<div
                        onClick={() => {
                            setOpenKindOfContentModal(true);
                            setCloseTypeOfContentFilters(false);
                        }}
                        className="shrink-0 flex justify-center items-center gap-x-[6px] border-[1px] border-[#787878] rounded-[32px] px-4 py-[5px]">
                        <div className="w-4 h-4"><img src="/images/svg/content/event.svg" alt="" className="h-full w-full" /></div>
                        <span className="text-[#787878] font-bold text-xs leading-5">نوع محتوا</span>
                    </div>)
                    : (<div onClick={() => setOpenKindOfContentModal(true)} className="shrink-0 flex justify-center items-center gap-x-[6px] border-[1px] border-[#5461CA] rounded-[32px] px-4 py-[5px]">
                        <div className="w-4 h-4"><img src="/images/svg/content/event.svg" alt="" className="h-full w-full" /></div>
                        <span className="text-[#5461CA] font-bold text-xs leading-5">نوع محتوا</span>

                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenKindOfContentModal(false);
                                setTypeOfContentInput([]);
                                setCloseTypeOfContentFilters(true);
                            }}
                            className="w-[19px] h-[19px] border-[1px] border-[#5461CA] rounded-full mr-2 flex justify-center items-center cursor-pointer"><img src="/images/svg/content/close.svg" alt="" /></div>
                    </div>
                    )
                }

                {eventInput.length === 0
                    ? (<div
                        onClick={() => {
                            setOpenEventModal(true);
                            setCloseEvenFilters(false);
                        }}
                        className="shrink-0 flex justify-center items-center gap-x-[6px] border-[1px] border-[#787878] rounded-[32px] px-4 py-[5px]">
                        <div className="w-4 h-4"><img src="/images/svg/content/event.svg" alt="" className="h-full w-full" /></div>
                        <span className="text-[#787878] font-bold text-xs leading-5">مناسبت</span>
                    </div>)
                    : (<div onClick={() => setOpenEventModal(true)} className="shrink-0 flex justify-center items-center gap-x-[6px] border-[1px] border-[#5461CA] rounded-[32px] px-4 py-[5px]">
                        <div className="w-4 h-4"><img src="/images/svg/content/event.svg" alt="" className="h-full w-full" /></div>
                        <span className="text-[#5461CA] font-bold text-xs leading-5">مناسبت</span>

                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenEventModal(false);
                                setEventInput([]);
                                setCloseEvenFilters(true);
                            }}
                            className="w-[19px] h-[19px] border-[1px] border-[#5461CA] rounded-full mr-2 flex justify-center items-center cursor-pointer"><img src="/images/svg/content/close.svg" alt="" /></div>
                    </div>
                    )
                }

                {arrangeInput.length === 0
                    ? (<div
                        onClick={() => {
                            setOpenArrangeModal(true);
                            setCloseArrangeFilters(false);
                        }}
                        className="shrink-0 flex justify-center items-center gap-x-[6px] border-[1px] border-[#787878] rounded-[32px] px-4 py-[5px]">
                        <div className="w-4 h-4"><img src="/images/svg/content/event.svg" alt="" className="h-full w-full" /></div>
                        <span className="text-[#787878] font-bold text-xs leading-5">ترتیب</span>
                    </div>)
                    : (<div onClick={() => setOpenArrangeModal(true)} className="shrink-0 flex justify-center items-center gap-x-[6px] border-[1px] border-[#5461CA] rounded-[32px] px-4 py-[5px]">
                        <div className="w-4 h-4"><img src="/images/svg/content/event.svg" alt="" className="h-full w-full" /></div>
                        <span className="text-[#5461CA] font-bold text-xs leading-5">ترتیب</span>

                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenArrangeModal(false);
                                setArrangeInput([]);
                                setCloseArrangeFilters(true);
                            }}
                            className="w-[19px] h-[19px] border-[1px] border-[#5461CA] rounded-full mr-2 flex justify-center items-center cursor-pointer"><img src="/images/svg/content/close.svg" alt="" /></div>
                    </div>
                    )
                }


            </div>

            <div className="w-full flex flex-col gap-y-4">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>


            <div className={`${openKindOfContentModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectKindOfContent setTypeOfContentInput={setTypeOfContentInput} setOpenKindOfContentModal={setOpenKindOfContentModal} closeTypeOfContentFilters={closeTypeOfContentFilters} />
            </div>

            <div className={`${openEventModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectEvent setEventInput={setEventInput} setOpenEventModal={setOpenEventModal} closeEvenFilters={closeEvenFilters} />
            </div>

            <div className={`${openArrangeModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectArrange setArrangeInput={setArrangeInput} setOpenArrangeModal={setOpenArrangeModal} closeArrangeFilters={closeArrangeFilters} />
            </div>
        </div>
    );
}

export default Content;