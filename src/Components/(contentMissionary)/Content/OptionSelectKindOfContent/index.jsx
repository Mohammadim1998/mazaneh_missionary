"use client";
import { useState, useRef, useEffect } from "react";


const OptionSelectKindOfContent = ({ setTypeOfContentInput, setOpenKindOfContentModal, closeTypeOfContentFilters }) => {
    const selectRef = useRef();
    const [valueInput, setValueInput] = useState('');
    const [clickValueArray, setClickValueArray] = useState([]);
    let existValue = false;

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

    const validateEvent = (event) => {
        const check = event.target.checked;
        const value = event.target.value;

        if (check) {
            const result = clickValueArray.find(item => item == value)
            result ? existValue = true : existValue = false
            if (!existValue) {
                setClickValueArray([...clickValueArray, value])
            }
        } else if (!check) {
            const newArr = clickValueArray.filter((item) => item !== value);
            setClickValueArray([...newArr])
        }
    }

    const forceFilter = () => {
        if (!clickValueArray.length) {
            alert("لطفا یک گزینه انتخاب کنید")
        } else {
            setTypeOfContentInput([...clickValueArray])
            setOpenKindOfContentModal(false)
            setValueInput("")
        }
    }

useEffect(() => {
    setClickValueArray([])
},[closeTypeOfContentFilters]);

    return (
        <div ref={selectRef} className="relative w-full h-full mx-auto px-4 pb-4 pt-6">
            <div className="flex justify-start items-center mb-8 pr-[10px] gap-x-[10px]">
                <div
                    onClick={() => setOpenKindOfContentModal(false)}             ><img src="/images/svg/map/rightArrow.svg" alt="" className="" /></div>

                <div className="w-full flex justify-between items-center">
                    <span className="text-[#3A3A3A] font-semibold text-[13px] leading-5">انتخاب مناسبت</span>
                    <span onClick={() => {
                        setClickValueArray([]);
                        setTypeOfContentInput([]);
                    }}
                        className="text-[#3A3A3A] font-semibold text-[13px] leading-5">پاک کردن</span>
                </div>
            </div>

            <div className="w-full h-[42px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-[#F5F5F5] gap-x-2 rounded-[54px] flex items-center justify-between">
                <div className="w-[14px] h-[14px]"><img src="/images/svg/map/search.svg" alt="" className={`w-full h-full`} /></div>
                <input
                    type="text"
                    value={valueInput.length > 20 ? valueInput.substring(0, 20) + "..." : valueInput}
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
                    placeholder="جستجوی مناسبت"
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
                                onChange={validateEvent.bind(this)}
                                type="checkbox"
                                checked={(!clickValueArray.length || closeTypeOfContentFilters) ? false : console.log("")}
                                value={content.name}
                                name={content.arrName}
                                id={content.arrange}
                            />
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
    )
}

export default OptionSelectKindOfContent;