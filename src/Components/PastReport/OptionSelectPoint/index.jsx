"use client";
import { useState, useEffect, useRef } from "react";

const OptionSelectPoint = () => {
    const [openOption, setOpenOption] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const selectRef = useRef();

    const towns = [
        { id: 1, name: "سازمان تبلیغات اسلامی" },
        { id: 2, name: "دفتر تبلیغات اسلامی" },
        { id: 3, name: "معاونت تبلیغ مرکز مدیریت حوزه‌های علمیه" },
        { id: 4, name: "گروه‌های جهادی مرکز مدیریت" },
        { id: 5, name: "معاونت تهذیب مرکز مدیریت حوزه‌های علمیه" },
        { id: 6, name: "مرکز مدیریت حوزه‌های علمیه خراسان" },
        { id: 7, name: "مرکز مدیریت حوزه‌های علمیه اصفهان" },
        { id: 8, name: "مرکز مدیریت حوزه‌های علمیه خواهران" },
        { id: 9, name: "جامعه‌الزهرا (س)" },
        { id: 10, name: "سازمان اوقاف و امور خیریه" },
        { id: 11, name: "دفاتر مراجع معظم تقلید" },
        { id: 12, name: "مرکز رسیدگی به امور مساجد" },
        { id: 13, name: "نهاد رهبری در دانشگاه‌ها" },
        { id: 14, name: "مرکز رسیدگی به امور مساجد اصفهان" },
        { id: 15, name: "معاونت پرورشی و فرهنگی آموزش و پرورش" },
        { id: 16, name: "انجمن اسلامی دانش‌آموزان" },
        { id: 17, name: "ستاد مرکزی راهیان نور کشور" },
        { id: 18, name: "ستاد راهیان نور شهید صیاد شیرازی" },
        { id: 19, name: "ستاد امر به معروف و نهی از منکر" },
        { id: 20, name: "ستاد هماهنگی کانون‌های فرهنگی هنری مساجد" },
        { id: 21, name: "سازمان حج و زیارت" },
        { id: 22, name: " معاونت فرهنگی بعثه مقام معظم رهبری" },
        { id: 23, name: " نهاد نمایندگی ولی فقیه در امور حج" },

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