"use client";
import { useState, useEffect, useRef } from "react";

const OptionSelectMenPresence = () => {
    const [openOption, setOpenOption] = useState(false);
    const [valueInput, setValueInput] = useState('');

    const selectRef = useRef();

    const handleOnClick = (event) => {
        if (selectRef.current && !event.composedPath().includes(selectRef.current)) {
            setOpenOption(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleOnClick);
        return () => {
            document.body.removeEventListener("click", handleOnClick);
        }

    })

    const langs = [
        { id: 1, name: "5 درصد" },
        { id: 2, name: "10 درصد" },
        { id: 3, name: "15 درصد" },
        { id: 4, name: "20 درصد" },
        { id: 5, name: "25 درصد" },
        { id: 6, name: "30 درصد" },
        { id: 7, name: "35 درصد" },
        { id: 8, name: "40 درصد" },
        { id: 9, name: "45 درصد" },
        { id: 10, name: "50 درصد" },
        { id: 11, name: "55 درصد" },
        { id: 12, name: "60 درصد" },
        { id: 13, name: "65 درصد" },
        { id: 14, name: "70 درصد" },
        { id: 15, name: "75 درصد" },
        { id: 16, name: "80 درصد" },
        { id: 17, name: "85 درصد" },
        { id: 18, name: "90 درصد" },
        { id: 19, name: "95 درصد" },
        { id: 20, name: "100 درصد" },
    ];


    return (
        <div ref={selectRef} className="relative w-full h-full mx-auto">

            <div
                onClick={() => {
                    openOption ? setOpenOption(false) : setOpenOption(true);
                    langs.map((lang) => {
                        if (lang.name == valueInput) {
                            setValueInput("")
                        }
                    })
                }}
                className="z-20 w-full h-[40px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-white gap-x-2 rounded-lg flex items-center justify-between">
                <input
                    type=""
                    readOnly
                    value={valueInput.length > 20 ? valueInput.substring(0, 20) + "..." : valueInput}
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
                    placeholder="انتخاب کنید"
                    className="w-full h-full  bg-inherit text-sm font-medium leading-5 outline-none text-[#252529] placeholder:text-[#AAAAAE]"
                />
                <div className="w-3 h-[7px]"><img src="/images/svg/arrowUp.svg" alt="" className={`w-full h-full ${openOption ? "rotate-180" : "rotate-0"}`} /></div>
            </div>



            <ul className={`z-40 absolute top-9 w-full ${openOption ? 'h-auto block' : "h-0 hidden"} mt-2 rounded bg-white shadow-[0px_1px_3px_1px_#00000026] px-2 py-1 overflow-x-hidden`}>
                {langs.map((lang, index) => (
                    <div
                        key={index}
                        className={`w-full h-12 rounded-lg px-2 overflow-x-hidden hover:bg-[#F3F4F5] flex justify-start items-center`}
                        onClick={() => {
                            if (lang.name.toLowerCase() != valueInput) {
                                setOpenOption(false);
                                setValueInput(lang.name.toLowerCase());
                            }
                        }}
                    >
                        {lang.name}</div>
                ))}
            </ul>
        </div>
    );
}

export default OptionSelectMenPresence;