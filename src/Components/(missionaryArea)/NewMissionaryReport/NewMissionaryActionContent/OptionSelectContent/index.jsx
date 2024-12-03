"use client";
import { useState, useEffect, useRef } from "react";

const OptionSelectContent = () => {
    const [openOption, setOpenOption] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const selectRef = useRef();

    let [inputRecent, setInputRecent] = useState([]);
    let isHasCity = false;















    const contents = [
        { id: 1, name: "مقاومت" },
        { id: 2, name: " خورشید خراسان" },
        { id: 3, name: " عشق جهانی" },
        { id: 4, name: " هشت گوشه بهشت" },
        { id: 5, name: " تولدی دیگر" },
        { id: 6, name: " زندگی با آیه ها" },
    ];

    const addToArr = (city) => {
        inputRecent.find((item) => {
            if (item.id === city.id)
                isHasCity = true
        })
        if (!isHasCity) {
            if (inputRecent.length == 2) {
                inputRecent.pop()
            }
            inputRecent.unshift(city)
        }
    }

    const filteredArray = contents.filter(item1 =>
        !inputRecent.some(item2 => item2.id === item1.id)
    );

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


    return (
        <div ref={selectRef} className="relative z-30 w-full h-full mx-auto">
            <div
                onClick={() => {
                    openOption ? setOpenOption(false) : setOpenOption(true);
                    contents.map((content) => {
                        if (content.name == valueInput) {
                            setValueInput("")
                        }
                    })
                }}
                className="w-full h-[40px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-white gap-x-2 rounded-lg flex items-center justify-between">
                <input
                    type="text"
                    value={valueInput.length > 20 ? valueInput.substring(0, 20) + "..." : valueInput}
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
                    placeholder="کدام محتوا را استفاده کرده اید؟"
                    className="w-full h-full focus:placeholder:text-transparent bg-inherit text-sm font-medium leading-5 outline-none text-[#252529] placeholder:text-[#AAAAAE]"
                />
                <div className="w-3 h-[7px]"><img src="/images/svg/arrowUp.svg" alt="" className={`w-full h-full ${openOption ? "rotate-180" : "rotate-0"}`} /></div>
            </div>

            <ul className={`z-40 absolute top-9 w-full ${openOption ? 'max-h-[200px] block' : "h-0 hidden"} mt-2 rounded bg-white shadow-[0px_1px_3px_1px_#00000026] overflow-x-hidden overflow-y-scroll`}>
                {inputRecent.length == 0
                    ? null
                    : (
                        <div className="w-full max-h-[136px] overflow-y-hidden flex justify-end flex-col-reverse border-b-[1px] border-b-[#E0E0E0]">
                            {inputRecent.map((searched, index) => (
                                <div
                                    onClick={() => {
                                        if (searched.name.toLowerCase() != valueInput) {
                                            setOpenOption(false);
                                            setValueInput(searched.name.toLowerCase());
                                        }
                                    }}
                                    key={index} className="shrink-0 w-full h-[50px] px-4 flex justify-start items-center gap-x-2 ">
                                    <div className="w-[18px] h-[18px]"><img src="/images/svg/resume/recent.svg" alt="" className="w-full h-full" /></div>
                                    <span className="text-[#161719] font-normal text-sm leading-4">{searched.name}</span>
                                </div>
                            ))}
                            <div className="shrink-0 w-full h-9 px-4 py-2 text-sm text-gray-400 bg-[#F3F4F5]">تاریخچه</div>
                        </div>
                    )}
                {filteredArray.map((content, index) => (
                    <div
                        key={index}
                        className={`w-full h-12 
                        ${content.name.toLowerCase().includes(valueInput) ? "block rounded-lg px-4 overflow-x-hidden" : "hidden"}
                        hover:bg-[#5461CA14] flex justify-start items-center gap-x-2`}
                        onClick={() => {
                            addToArr(content);
                            setOpenOption(false);
                            setValueInput(content.name.toLowerCase());
                        }}
                    >
                        <div className="w-[18px] h-[18px]"><img src="/images/svg/resume/location.svg" alt="" className="w-full h-full" /></div>
                        <div className="text-[#161719] font-normal text-sm leading-4">{content.name}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default OptionSelectContent;