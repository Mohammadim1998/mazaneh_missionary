"use client";
import { useEffect, useRef, useState } from "react";

const OptionSelect = ({ setKindPlace }) => {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const selectRef = useRef();

    const handleOnClick = (event) => {
        if (selectRef.current && !event.composedPath().includes(selectRef.current)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", handleOnClick);
        return () => {
            document.body.removeEventListener("click", handleOnClick);
        }
    });

    useEffect(() => {
        setKindPlace(value);
    })
    const places = [
        { id: "1", locate: "مسجد" },
        { id: "2", locate: "حسینیه" },
        { id: "3", locate: "مهدیه" },
        { id: "4", locate: "هیت" },
        { id: "5", locate: "کانون فرهنگی" }
    ]

    return (
        <div ref={selectRef} className="relative w-full flex flex-col gap-y-[6px] mx-auto">
            <div
                onClick={() => open ? setOpen(false) : setOpen(true)}
                className="w-full h-[40px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-white gap-x-2 rounded-lg flex items-center justify-between">
                <input type="text"
                    className="w-full h-full focus:placeholder:text-transparent outline-none placeholder:text-[#AAAAAE] placeholder:font-normal placeholder:text-sm"
                    value={value}
                    onChange={(e) => setValue(e.target.value.toLowerCase())}
                    placeholder="انتخاب نوع مکان"
                />
                <div
                    onClick={() => open ? setOpen(false) : setOpen(true)}
                    className={`w-3 h-[7px] ${open ? "rotate-180" : "rotate-0"} transition-all duration-300`}><img src="/images/svg/arrowUp.svg" alt="" className="w-3 h-[7px]" /></div>
            </div>

            <ul className={`absolute top-[52px] left-0 w-full flex flex-col rounded overflow-y-auto px-2 pt-2 bg-white ${open ? "h-[220px] flex" : "h-0 hidden"} transition-all duration-500 shadow-[0px_1px_3px_1px_#00000026]`}>
                {places?.map((place) => (
                    <li key={place?.id}
                        className={`h-10 p-4 text-[#252529] font-normal text-sm hover:bg-[#F0F1F2] rounded-lg flex justify-start items-center`}
                        onClick={() => {
                            if (place?.locate.toLowerCase() !== value) {
                                setValue(place?.locate);
                                setOpen(false);
                            }
                        }}
                    >{place?.locate}</li>
                ))}
            </ul>
        </div>
    );
}

export default OptionSelect;
// className={`h-14 p-4 ${country?.name?.toLowerCase().startsWith(value) ? "block" : "hidden"}`}




