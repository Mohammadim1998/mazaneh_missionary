"use client";
import { useState, useEffect, useRef } from "react";

const OptionSelectPoint = () => {
    const [openOption, setOpenOption] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const selectRef = useRef();

    const towns = [
        { id: 1, name: "روضه خانگی" },
        { id: 2, name: "مسجد" },
        { id: 3, name: "حسینیه" },
        { id: 4, name: "هیات مذهبی" },
        { id: 5, name: "انجمن اسلامی" },
        { id: 6, name: "کانون فرهنگی" },
        { id: 7, name: "موسسه قرآنی" },
        { id: 8, name: "دانشگاه برادران" },
        { id: 9, name: "دانشگاه خواهران" },
        { id: 10, name: "خوابگاه دانش آموزی دخترانه" },
        { id: 11, name: "خوابگاه دانش آموزی پسرانه" },
        { id: 12, name: "خوابگاه دانشگاهی برادران" },
        { id: 13, name: "خوابگاه دانشگاهی خواهران" },
        { id: 14, name: "بیمارستان یا درمانگاه" },
        { id: 15, name: "مدرسه دخترانه" },
        { id: 16, name: "مدرسه پسرانه" },
        { id: 17, name: "کارخانه یا مرکز صنعتی" },
        { id: 18, name: "اداره یا شرکت" },
        { id: 19, name: "کوچ یا چادر عشایر" },
        { id: 20, name: "ورزشگاه" },
        { id: 21, name: "تفرجگاه" },
        { id: 22, name: "ساحل" },
        { id: 23, name: "پایانه مرزی" },

    ];

    let [inputRecent, setInputRecent] = useState([]);
    let isHasCity = false;

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

    const filteredArray = towns.filter(item1 =>
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
        <div ref={selectRef} className="relative w-full h-full mx-auto">
            <div
                onClick={() => {
                    openOption ? setOpenOption(false) : setOpenOption(true); towns.map((town) => {
                        if (town.name == valueInput) {
                            setValueInput("")
                        }
                    })
                }}
                className="z-20 w-full h-[40px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-white gap-x-2 rounded-lg flex items-center justify-between">
                <input
                    type="text"
                    value={valueInput.length > 20 ? valueInput.substring(0, 20) + "..." : valueInput}
                    placeholder="نوع نقطه"
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
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
                {filteredArray.map((town, index) => (
                    <div
                        key={index}
                        className={`w-full h-12 
                        ${town.name.toLowerCase().includes(valueInput) ? "block rounded-lg px-4 overflow-x-hidden" : "hidden"} 
                        hover:bg-[#5461CA14] flex justify-start items-center gap-x-2`}
                        onClick={() => {
                            addToArr(town);
                            setOpenOption(false);
                            setValueInput(town.name.toLowerCase());
                        }}
                    >
                        <div className="w-[18px] h-[18px]"><img src="/images/svg/resume/location.svg" alt="" className="w-full h-full" /></div>
                        <div className="text-[#161719] font-normal text-sm leading-4">{town.name}</div>
                    </div>
                ))}
            </ul>
        </div >
    );
}

export default OptionSelectPoint;