"use client";
import { useState, useRef } from "react";

const OptionSelectKindOfContent = ({ setContent, setOpenFilterContentModal }) => {
    const [valueInput, setValueInput] = useState('');
    const [contentArray, setContentArray] = useState([]);
    let existValue = false;
    const selectRef = useRef();

    const contents = [
        { id: 1, name: "منبر کامل", arrange: "arrrrrrr1", arrName: "arr" },
        { id: 2, name: "منبرک", arrange: "arrrrrrr2", arrName: "arr" },
        { id: 3, name: "طرح درس", arrange: "arrrrrrr3", arrName: "arr" },
        { id: 4, name: "چند رسانه‌ای", arrange: "arrrrrrr4", arrName: "arr" },
        { id: 5, name: "محتوای پیشتیبان", arrange: "arrrrrrr5", arrName: "arr" },
        { id: 6, name: "بسته محتوایی", arrange: "arrrrrrr6", arrName: "arr" },
        { id: 7, name: "محتوای ترویجی", arrange: "arrrrrrr7", arrName: "arr" },
        { id: 8, name: "پاورپوینت آموزشی", arrange: "arrrrrrr8", arrName: "arr" },
        { id: 9, name: "دوره آموزشی", arrange: "arrrrrrr8", arrName: "arr" },
    ];

    const validateContent = (event) => {
        const check = event.target.checked;
        const value = event.target.value;

        if (check) {
            const result = contentArray.find(item => item == value);
            result ? existValue = true : existValue = false;
            if (!existValue) {
                setContentArray([...contentArray, value])
            }
        } else if (!check) {
            const newArr = contentArray.filter((item) => item !== value);
            setContentArray([...newArr]);
        }
    }

    const forceFilter = () => {
        if (!contentArray.length) {
            alert("لطفا یک محتوا انتخاب کنید")
        }
        else {
            setContent([...contentArray]);
            setOpenFilterContentModal(false);
            setValueInput("");
        }
    }

    return (
        <div ref={selectRef} className="w-full h-full mx-auto px-4 pb-44 pt-6">
            <div className="flex justify-start items-center mb-8 pr-[10px] gap-x-[10px]">
                <div
                    onClick={() => setOpenFilterContentModal(false)}
                    className=""><img src="/images/svg/map/rightArrow.svg" alt="" className="" /></div>
                <span className="text-[#3A3A3A] font-semibold text-[13px] leading-5">انتخاب محتوا</span>
            </div>

            <div className="w-full h-[42px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-[#F5F5F5] gap-x-2 rounded-[54px] flex items-center justify-between">
                <div className="w-[14px] h-[14px]"><img src="/images/svg/map/search.svg" alt="" className={`w-full h-full`} /></div>
                <input
                    type="text"
                    value={valueInput.length > 20 ? valueInput.substring(0, 20) + "..." : valueInput}
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
                    placeholder="جستجوی محتوا"
                    className="w-full h-full focus:placeholder:text-transparent bg-inherit text-[11px] font-medium leading-5 outline-none text-[#AAAAAA] placeholder:text-[#AAAAAE]"
                />

                <ul className={`fixed top-[120px] left-[50%] translate-x-[-50%] pl-5 pr-7 sliderContainer w-[95%] h-[82%] pb-20 mt-2 bg-white overflow-x-hidden overflow-y-scroll`}>
                    {contents.map((content, index) => (
                        <label key={index}
                            className={`w-full h-12 
                        ${content.name.toLowerCase().includes(valueInput) ? "block  overflow-x-hidden" : "hidden"}
                        border-b-[#0000001A] border-b-[1px] flex justify-start items-center gap-x-2`}
                        >
                            <input
                                onChange={validateContent.bind(this)}
                                type="checkbox"
                                value={content.name}
                                name={content.arrName}
                                id={content.arrange}
                                className="" />
                            {content.name}
                        </label>
                    ))}
                </ul>
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-white py-4 px-4">
                <div
                    onClick={() => forceFilter()}
                    className="w-full h-[38px] bg-[#5461CA] text-[#FFFFFF] cursor-pointer font-medium text-sm leading-5 flex justify-center items-center rounded">اعمال فیلتر</div>
            </div>
        </div>
    );
}

export default OptionSelectKindOfContent;