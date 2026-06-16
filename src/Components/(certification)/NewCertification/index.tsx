"use client";
import Link from "next/link";
import OptionSelectInstitution from "./OptionSelectInstitution";
import { useEffect, useState } from "react";
import AllHistory from "./AllHistory";
import SomeHistory from "./SomeHistory";
import "./customStyle.css"


const NewCertification = () => {
    const [detail, setDetail] = useState(<AllHistory />);
    const [showInputInstitution, setShowInputInstitution] = useState(false);
    const [inputInstitution, setInputInstitution] = useState("");

    useEffect(() => {
        inputInstitution.trim() === "سایر" ? setShowInputInstitution(true) : setShowInputInstitution(false);
    }, [inputInstitution])


    return (
        <div className="w-full bg-[#F0F0F1] overflow-y-scroll mb-[58px]">
                <div className="w-full h-12 flex items-center bg-[#5461CA] px-4 py-[13px]">
                    <div className="flex justify-start items-center gap-x-2">
                        <Link href={"/dashboardHome"} className="w-[14px] h-[14px]"><img src="/images/svg/certification/arrowRight.svg" alt="" className="w-full h-full" /></Link>
                        <span className="text-white font-medium text-sm leading-5">درخواست گواهی تبلیغی</span>
                    </div>
                </div>

                <div className="w-full max-h-[167px] flex flex-col bg-white mb-1 py-5 px-4">
                    <div className="text-[#1D256D] font-semibold leading-5 mb-4">انتخاب نهاد مقصد</div>

                    <form className="w-full flex flex-col justify-center items-center gap-y-4">
                        <div className="w-full h-10"><OptionSelectInstitution setInputInstitution={setInputInstitution} /></div>
                        {showInputInstitution
                            ? (
                                <div className="w-full h-10">
                                    <input type="text" className="w-full h-full focus:placeholder:text-transparent placeholder:text-[#AAAAAE] placeholder:font-normal text-xs leading-5 px-4 outline-none border-[#E1E2E6] border-[1px] rounded-lg" placeholder="نام نهاد مورد نظر را بنویسید" />
                                </div>
                            ) : null}
                    </form>
                </div>

                <div className="w-full px-4 pt-4 bg-white">
                    <span className="text-[#1D256D] font-semibold text-xs leading-5">انتخاب سوابق تبلیغی</span>

                    <div className="flex items-center gap-x-8 mt-4">
                        <div className="">
                            <label id="selectHistory" className="text-[#616161] font-medium text-xs leading-5 flex items-center gap-x-2">
                                <input
                                    onClick={(e) => {
                                        setDetail(<AllHistory />);
                                    }}
                                    type="radio"
                                    defaultChecked
                                    name="selectHistory" id="selectHistory" className="customRadio" />
                                همه سوابق</label>
                        </div>

                        <div className="">
                            <label id="selectSomeHistory" className="text-[#616161] font-medium text-xs leading-5 flex items-center gap-x-2">
                                <input
                                    onClick={(e) => {
                                        setDetail(<SomeHistory />);
                                    }}
                                    type="radio" name="selectHistory" id="selectSomeHistory" className="customRadio" />
                                گزینش سوابق</label>
                        </div>
                    </div>

                    <div className={`w-full mt-4`}>
                        <div className="w-full">
                            {detail}
                        </div>
                    </div>
                </div>

                <div className="fixed bottom-0 left-0 right-0 w-full h-[58px] bg-white px-4 py-[10px] shadow-[0px_-1px_4px_0px_#00000026]">
                    <Link href={"/registerSelectPoint"}>
                        <button className="w-full h-full text-white font-medium text-sm leading-5 bg-[#5461CA] rounded-md">درخواست گواهی</button>
                    </Link>
                </div>
        </div>

    );
}

export default NewCertification;

/**
 "use client";
import Link from "next/link";
import OptionSelectInstitution from "./OptionSelectInstitution";
import { useEffect, useState } from "react";
import AllHistory from "./AllHistory";
import SomeHistory from "./SomeHistory";
import "./customStyle.css"


const SelectDestinationInstitution = () => {
    const [detail, setDetail] = useState(<SomeHistory />);
    const [showInputInstitution, setShowInputInstitution] = useState(false);
    const [inputInstitution, setInputInstitution] = useState("");

    useEffect(() => {
        inputInstitution.trim() === "سایر" ? setShowInputInstitution(true) : setShowInputInstitution(false);
    }, [inputInstitution])


    return (
        <div className="w-full h-dvh bg-[#F0F0F1] pb-[58px] overflow-y-scroll">
            <div className="w-full h-12 flex items-center bg-[#5461CA] px-4 py-[13px]">
                <div className="flex justify-start items-center gap-x-2">
                    <Link href={"/dashboardHome"} className="w-[14px] h-[14px]"><img src="/images/svg/certification/arrowRight.svg" alt="" className="w-full h-full" /></Link>
                    <span className="text-white font-medium text-sm leading-5">درخواست گواهی تبلیغی</span>
                </div>
            </div>

            <div className="w-full max-h-[167px] flex flex-col bg-white mb-1 py-5 px-4">
                <div className="text-[#1D256D] font-semibold leading-5 mb-4">انتخاب نهاد مقصد</div>

                <form className="w-full flex flex-col justify-center items-center gap-y-4">
                    <div className="w-full h-10"><OptionSelectInstitution setInputInstitution={setInputInstitution} /></div>
                    {showInputInstitution
                        ? (
                            <div className="w-full h-10">
                                <input type="text" className="w-full h-full focus:placeholder:text-transparent placeholder:text-[#AAAAAE] placeholder:font-normal text-xs leading-5 px-4 outline-none border-[#E1E2E6] border-[1px] rounded-lg" placeholder="نام نهاد مورد نظر را بنویسید" />
                            </div>
                        ) : null}
                </form>
            </div>

            <div className="w-full h-auto bg-white px-4 pt-4 pb-4">
                <span className="text-[#1D256D] font-semibold text-xs leading-5">انتخاب سوابق تبلیغی</span>

                <div className="flex items-center gap-x-8 mt-4">
                    <div className="">
                        <label id="selectHistory" className="text-[#616161] font-medium text-xs leading-5 flex items-center gap-x-2">
                            <input
                                onClick={(e) => {
                                    setDetail(<AllHistory />);
                                }}
                                type="radio"
                                defaultChecked
                                name="selectHistory" id="selectHistory" className="customRadio" />
                            همه سوابق</label>
                    </div>

                    <div className="">
                        <label id="selectSomeHistory" className="text-[#616161] font-medium text-xs leading-5 flex items-center gap-x-2">
                            <input
                                onClick={(e) => {
                                    setDetail(<SomeHistory />);
                                }}
                                type="radio" name="selectHistory" id="selectSomeHistory" className="customRadio" />
                            گزینش سوابق</label>
                    </div>
                </div>


                <div className={`w-full ${showInputInstitution ? "h-[58.7vh]" : "h-[64.2vh]"} mt-4 pb-4 bg-red-300`}>
                    <div className="w-full h-auto mt-4 pb-4 bg-white">
                        {detail}
                    </div>
                </div>

            </div>

            <div className="fixed bottom-0 left-0 right-0 w-full h-[58px] bg-white px-4 py-[10px] shadow-[0px_-1px_4px_0px_#00000026]">
                <Link href={"/registerSelectPoint"}>
                    <button className="w-full h-full text-white font-medium text-sm leading-5 bg-[#5461CA] rounded-md">درخواست گواهی</button>
                </Link>
            </div>
        </div>
    );
}

export default SelectDestinationInstitution;
 */