"use client";
import { useEffect, useRef, useState } from "react";

const Box = ({ data }) => {
    const [active, setActive] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);

    // Close popup when client click to other place
    const selectRef = useRef();
    const handleOnClick = (event) => {
        if (selectRef.current && !event.composedPath().includes(selectRef.current)) {
            setActive(false);
            setOpenPopup(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleOnClick);
        return () => {
            document.body.removeEventListener("click", handleOnClick);
        }
    });
    // End

    return (
        <div ref={selectRef}
            onClick={() => setActive(true)}
            className={`w-full h-[85px] flex justify-between items-center rounded-lg p-[12px_12px_12px_16px] ${active ? "border-[1px] border-gray-600" : "border-[1px] border-gray-300"}`}>

            <div className="flex self-start">
                <div className="customRadiobutton w-[19px] h-[19px] mt-2">
                    <input
                        type="radio"
                        id={data.id}
                        name={"address"}
                    />
                </div>
            </div>

            <label htmlFor={data.id} className="w-full flex justify-between items-center">
                <div className="w-full flex flex-col mr-2 ml-[13px] gap-y-1 child:text-[#4F4F4F] child:text-xs child:leading-5">
                    <span className="font-medium">{data.place}</span>
                    <span className="font-normal">{data.address}</span>
                </div>

                <div className="relative">
                    <div onClick={() => setOpenPopup(prev => !prev)} className="flex flex-col gap-y-[2px] cursor-pointer shrink-0">
                        <span className="w-1 h-1 bg-[#4F4F4F] rounded-full"></span>
                        <span className="w-1 h-1 bg-[#4F4F4F] rounded-full"></span>
                        <span className="w-1 h-1 bg-[#4F4F4F] rounded-full"></span>
                    </div>

                    <div className={`${openPopup ? 'flex' : "hidden"} flex-col z-50 absolute top-[50%] left-2 bg-[#F3F4F7] child:cursor-pointer w-[101px] rounded-[0px_8px_8px_8px] shadow-[0px_4px_8px_0px_#00000026]`}>
                        <div onClick={() => console.log(data.place)}
                            className="flex justify-start items-center gap-x-2 w-full border-b-[1px] border-b-[#E1E2E6] py-2 pr-2">
                            <span className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/invite/eye.svg" alt="" className="w-[15px] h-[13px]" /></span>
                            <span className="text-[#1D266C] font-normal text-xs leading-5">مشاهده</span>
                        </div>
                        <div className="flex justify-start items-center gap-x-2 w-full border-b-[1px] border-b-[#E1E2E6] py-2 pr-2">
                            <span className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/invite/pen.svg" alt="" className="w-[14px] h-[14px]" /></span>
                            <span className="text-[#1D266C] font-normal text-xs leading-5">ویرایش</span>
                        </div>

                        <div className="flex justify-start items-center gap-x-2 w-full border-b-[1px] border-b-[#E1E2E6] py-2 pr-2">
                            <span className="w-[18px] h-[18px] flex justify-center items-center"><img src="/images/svg/invite/cycle.svg" alt="" className="w-[14px] h-[14px]" /></span>
                            <span className="text-[#1D266C] font-normal text-xs leading-5">حذف</span>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default Box;