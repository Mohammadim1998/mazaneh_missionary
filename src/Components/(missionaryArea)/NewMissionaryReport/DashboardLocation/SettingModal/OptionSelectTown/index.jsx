"use client";
import { useState, useEffect, useRef } from "react";

const OptionSelectTown = ({ setTownInput, setOpenTownModal }) => {
    const [valueInput, setValueInput] = useState('');
    const selectRef = useRef();

    const towns = [
        { id: 1, name: "قم", arrange: "arrrrrrr1", arrName: "arr1" },
        { id: 2, name: "تهران", arrange: "arrrrrrr2", arrName: "arr1" },
        { id: 3, name: "اصفهان", arrange: "arrrrrrr3", arrName: "arr1" },
        { id: 4, name: "شیراز", arrange: "arrrrrrr4", arrName: "arr1" },
        { id: 5, name: "بندرعباس", arrange: "arrrrrrr5", arrName: "arr1" },
        { id: 6, name: "تبریز", arrange: "arrrrrrr6", arrName: "arr1" },
        { id: 7, name: "کیش", arrange: "arrrrrrr7", arrName: "arr1" },
        { id: 8, name: "مشهد", arrange: "arrrrrrr8", arrName: "arr1" },
    ];

    // useEffect(() => {
    //     setTownInput(valueInput)
    // }, [valueInput])

    const forceFilter = () => {
        if (valueInput == "") {
            alert("لطفا یک شهرستان انتخاب کنید")
        }
        else {
            setTownInput("شهرستان " + valueInput)
            setOpenTownModal(false)
        }
    }

    return (
        <div ref={selectRef} className="relative w-full h-full mx-auto px-4 pb-4 pt-6">
            <div className="flex justify-start items-center mb-8 pr-[10px] gap-x-[10px]">
                <div
                    onClick={() => setOpenTownModal(false)}
                    className=""><img src="/images/svg/map/rightArrow.svg" alt="" className="" /></div>
                <span className="text-[#3A3A3A] font-semibold text-[13px] leading-5">انتخاب شهرستان</span>
            </div>

            <div
                // onClick={() => {
                //     langs.map((lang) => {
                //         if (lang.name != valueInput) {
                //            alert("لطفا نام استان را به درستی وارد کنید")
                //         }
                //     })
                // }}
                className="w-full h-[42px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-[#F5F5F5] gap-x-2 rounded-[54px] flex items-center justify-between">
                <div className="w-[14px] h-[14px]"><img src="/images/svg/map/search.svg" alt="" className={`w-full h-full`} /></div>
                <input
                    type="text"
                    value={valueInput.length > 20 ? valueInput.substring(0, 20) + "..." : valueInput}
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
                    placeholder="جستجوی نقطه"
                    className="w-full h-full focus:placeholder:text-transparent bg-inherit text-[11px] font-medium leading-5 outline-none text-[#AAAAAA] placeholder:text-[#AAAAAE]"
                />

                <ul className={`fixed top-[120px] left-[50%] translate-x-[-50%] pl-5 pr-7 sliderContainer w-[95%] h-[82%] pb-20 mt-2 bg-white overflow-x-hidden overflow-y-scroll`}>
                    {towns.map((town, index) => (
                        <label key={index}
                            className={`w-full h-12 
                        ${town.name.toLowerCase().includes(valueInput) ? "block  overflow-x-hidden" : "hidden"}
                        border-b-[#0000001A] border-b-[1px] flex justify-start items-center gap-x-2`}
                            onClick={() => {
                                if (town.name.toLowerCase() != valueInput) {
                                    setValueInput(town.name.toLowerCase());
                                }
                            }}

                        >
                            <label htmlFor={town.arrange}
                                onClick={() => {
                                    if (town.name.toLowerCase() != valueInput) {
                                        setValueInput(town.name.toLowerCase());
                                    }
                                }}
                                className=" flex justify-start items-center gap-x-[6px] text-[#161719] font-normal text-sm leading-4">
                                <input type="radio" name={town.arrName} id={town.arrange} className="" />
                                {town.name}
                            </label>
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

export default OptionSelectTown;