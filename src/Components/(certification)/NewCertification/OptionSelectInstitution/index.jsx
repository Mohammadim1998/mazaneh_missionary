"use client";
import { useState, useEffect, useRef } from "react";

const OptionSelectInstitution = ({ setInputInstitution }) => {
    const [openOption, setOpenOption] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const selectRef = useRef();

    let [inputRecent, setInputRecent] = useState([]);
    let isHasCity = false;

    const addToArr = (city) => {
        inputRecent.find((item) => {
            if (item === city)
                isHasCity = true
        })
        if (!isHasCity) {
            inputRecent.push(city)
        }
    }

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
    });

    useEffect(() => {
        setInputInstitution(valueInput);
    }, [valueInput])

    console.log(valueInput);

    const langs = [
        { id: 1, name: "اداره کل امور دینی و اعزام مبلغ اوقاف" },
        { id: 2, name: "امور اتباع و مهاجران خارجی" },
        { id: 3, name: "تیپ مستقل 83 امام صادق علیه السلام" },
        { id: 4, name: "دفتر تبلیغات اسلامی" },
        { id: 5, name: "سازمان تبلیغات اسلامی" },
        { id: 6, name: "سازمان حج و زیارت" },
        { id: 7, name: "سازمان سنجش" },
        { id: 8, name: "سازمان عقیدتی سیاسی ارتش جمهوری اسلامی" },
        { id: 9, name: "سازمان عقیدتی سیاسی سپاه پاسداران جمهوری اسلامی" },
        { id: 10, name: "سازمان عقیدتی سیاسی نیروی انتظامی جمهوری اسلامی" },
        { id: 11, name: "سازمان فرهنگ و ارشاد اسلامی" },
        { id: 12, name: "سازمان مقاومت بسیج مستضعفین" },
        { id: 13, name: "شورای سیاست گزاری ائمه جمعه کشور" },
        { id: 14, name: "صندوق قرض الحسنه دفتر تبلیغات اسلامی" },
        { id: 15, name: "مرکز خدمات حوزه های علمیه" },
        { id: 16, name: "مرکز مدیریت حوزه علمیه قم" },
        { id: 17, name: "معاونت امور طلاب و دانش آموختگان حوزه" },
        { id: 18, name: "معاونت فرهنگی تبلیغی حوزه های علمیه" },
        { id: 19, name: "معاونت فرهنگی سازمان زندان های کشور" },
        { id: 20, name: "نهاد نمایندگی مقام معظم رهبری در دانشگاه ها" },
        { id: 21, name: "سایر" },

    ];

    return (
        <div ref={selectRef} className="relative z-30 w-full h-full mx-auto">
            <div
                onClick={() => {
                    openOption ? setOpenOption(false) : setOpenOption(true);
                    langs.map((lang) => {
                        if (lang.name == valueInput) {
                            setValueInput("")
                        }
                    })
                }}
                className="w-full h-[40px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-white gap-x-2 rounded-lg flex items-center justify-between">
                <input
                    type="text"
                    value={valueInput.length > 20 ? valueInput.substring(0, 40) + "..." : valueInput}
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
                    placeholder="استان"
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
                                        if (searched.toLowerCase() != valueInput) {
                                            setOpenOption(false);
                                            setValueInput(searched.toLowerCase());
                                        }
                                    }}
                                    key={index} className="shrink-0 w-full h-[50px] px-4 flex justify-start items-center gap-x-2 ">
                                    <div className="w-[18px] h-[18px]"><img src="/images/svg/resume/recent.svg" alt="" className="w-full h-full" /></div>
                                    <span className="text-[#161719] font-normal text-sm leading-4">{searched}</span>
                                </div>
                            ))}
                            <div className="shrink-0 w-full h-9 px-4 py-2 text-sm text-gray-400 bg-[#F3F4F5]">تاریخچه</div>
                        </div>
                    )}
                {langs.map((lang, index) => (
                    <div
                        key={index}
                        className={`w-full h-12 
                        ${lang.name.toLowerCase().includes(valueInput) ? "block rounded-lg px-4 overflow-x-hidden" : "hidden"}
                        ${inputRecent.map((item) => item === lang.name ? "hidden" : "")}
                        hover:bg-[#5461CA14] flex justify-start items-center gap-x-2`}
                        onClick={() => {
                            if (lang.name.toLowerCase() != valueInput) {
                                setOpenOption(false);
                                setValueInput(lang.name.toLowerCase());
                                addToArr(lang.name);
                            }
                        }}
                    >
                        <div className="w-[18px] h-[18px]"><img src="/images/svg/resume/location.svg" alt="" className="w-full h-full" /></div>
                        <div className="text-[#161719] font-normal text-sm leading-4">{lang.name}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default OptionSelectInstitution;


/*
*/