import { useState } from "react";
import OptionSelectEvent from "./OptionSelectEvent";
import OptionSelectArrange from "./OptionSelectArrange";
import OptionSelectKindOfContent from "./OptionSelectKindOfContent";

const FilterModalContent = ({ setOpenFilterModal, openFilterModal }) => {
    const [content, setContent] = useState("");
    const [eventInput, setEventInput] = useState("");
    const [arrangeInput, setArrangeInput] = useState("");

    const [openFilterContentModal, setOpenFilterContentModal] = useState("");
    const [openEventModal, setOpenEventModal] = useState("");
    const [openArrangeModal, setOpenArrangeModal] = useState("");




    return (
        <div className={`z-40 w-full h-full fixed ${openFilterModal ? "bottom-0" : "bottom-[-1075px]"} left-0 right-0 px-6 py-8  bg-white shadow-[0px_-3px_8px_0px_#0000000D] transition-all duration-500`}>

            <div className="w-full flex items-center gap-x-[10px] mb-10">
                <div
                    onClick={() => setOpenFilterModal(false)}
                    className="w-[14px] h-[14px]"><img src="/images/svg/map/close.svg" alt="" className="" /></div>
                <div className="text-[#3A3A3A] font-semibold text-[13px] leading-5">
                    فیلترها
                </div>
            </div>

            <div className="flex flex-col gap-y-[18px]">
                <div
                    onClick={() => setOpenFilterContentModal(true)}
                    className="w-full flex justify-between items-center cursor-pointer border-b-[#0000001A] border-b-[1px] pb-[18px]">
                    <div className="w-full flex justify-start items-center gap-x-2">
                        {content == "" ? null : (
                            <div className="w-[5px] h-[5px] bg-[#2B39A1] rounded-full"></div>
                        )}
                        <input
                            value={content}
                            readOnly type="text" placeholder="نوع محتوا"
                            className="w-full placeholder:text-[#838383] text-[#2B39A1] outline-none font-medium text-xs leading-5"
                        />
                    </div>
                    <div className="w-3 h-3"><img src="/images/svg/map/leftArrow.svg" alt="" className="" /></div>
                </div>

                <div
                    onClick={() => setOpenEventModal(true)}
                    className="w-full flex justify-between items-center cursor-pointer border-b-[#0000001A] border-b-[1px] pb-[18px]">
                    <div className="w-full flex justify-start items-center gap-x-2">
                        {eventInput == "" ? null : (
                            <div className="w-[5px] h-[5px] bg-[#2B39A1] rounded-full"></div>
                        )}
                        <input
                            value={eventInput}
                            readOnly type="text" placeholder="انتخاب مناسب"
                            className="w-full placeholder:text-[#838383] text-[#2B39A1] outline-none font-medium text-xs leading-5"
                        />
                    </div>
                    <div className="w-3 h-3"><img src="/images/svg/map/leftArrow.svg" alt="" className="" /></div>
                </div>

                <div
                    onClick={() => setOpenArrangeModal(true)}
                    className="w-full flex justify-between items-center cursor-pointer border-b-[#0000001A] border-b-[1px] pb-[18px]">
                    <div className="w-full flex justify-start items-center gap-x-2">
                        {arrangeInput == "" ? null : (
                            <div className="w-[5px] h-[5px] bg-[#2B39A1] rounded-full"></div>
                        )}
                        <input
                            value={arrangeInput}
                            readOnly type="text" placeholder="ترتیت بر اساس"
                            className="w-full placeholder:text-[#838383] text-[#2B39A1] outline-none font-medium text-xs leading-5"
                        />
                    </div>
                    <div className="w-3 h-3"><img src="/images/svg/map/leftArrow.svg" alt="" className="" /></div>
                </div>
            </div>

            <div className={`${openFilterContentModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectKindOfContent setContent={setContent} content={content} setOpenFilterContentModal={setOpenFilterContentModal} />
            </div>
            <div className={`${openEventModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectEvent setEventInput={setEventInput} setOpenEventModal={setOpenEventModal} />
            </div>
            <div className={`${openArrangeModal ? "block" : "hidden"} fixed top-0 left-0 bottom-0 right-0 bg-white`}>
                <OptionSelectArrange setArrangeInput={setArrangeInput} setOpenArrangeModal={setOpenArrangeModal} />
            </div>

        </div>
    );
}

export default FilterModalContent;