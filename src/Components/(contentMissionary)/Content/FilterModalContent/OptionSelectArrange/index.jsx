"use client";
import { useState, useRef } from "react";

const OptionSelectArrange = ({ setArrangeInput, setOpenArrangeModal }) => {
    const [valueInput, setValueInput] = useState('');
    const selectRef = useRef();
    const cities = [
        { id: 1, name: "جدیدترین ها", arrange: "arrrrrrrr1", arrName: "arr" },
        { id: 2, name: "پربازدید ترین ها", arrange: "arrrrrrrr2", arrName: "arr" },
        { id: 3, name: "پر امتیاز ها", arrange: "arrrrrrrr3", arrName: "arr" },
    ];

    const [arrangeArray, setArrangeArray] = useState([]);
    let existValue = false;

    const validateArrange = (event) => {
        const check = event.target.checked;
        const value = event.target.value;

        if (check) {
            const result = arrangeArray.find(item => item == value);
            result ? existValue = true : existValue = false;
            if (!existValue) {
                setArrangeArray([...arrangeArray, value]);
            }
        } else if (!check) { 
            const newArr = arrangeArray.filter((item) => item !== value);
            setArrangeArray([...newArr])
        }
    }


    const forceFilter = () => {
        if (!arrangeArray.length) {
            alert("لطفا یک ترتیب انتخاب کنید")
        }
        else {
            setArrangeInput([...arrangeArray]);
            setOpenArrangeModal(false);
            setValueInput("");
        }
    }

    return (
        <div ref={selectRef} className="relative w-full h-full mx-auto px-4 pb-4 pt-6">
            <div className="flex justify-start items-center mb-8 pr-[10px] gap-x-[10px]">
                <div
                    onClick={() => setOpenArrangeModal(false)}
                    className=""><img src="/images/svg/map/rightArrow.svg" alt="" className="" /></div>
                <span className="text-[#3A3A3A] font-semibold text-[13px] leading-5">انتخاب ترتیب</span>
            </div>

            <div className="w-full h-[42px] px-4 py-[10px] border-[#E1E2E6] border-[1px] bg-[#F5F5F5] gap-x-2 rounded-[54px] flex items-center justify-between">
                <div className="w-[14px] h-[14px]"><img src="/images/svg/map/search.svg" alt="" className={`w-full h-full`} /></div>
                <input
                    type="text"
                    value={valueInput.length > 20 ? valueInput.substring(0, 20) + "..." : valueInput}
                    onChange={(e) => {
                        setValueInput(e.target.value.toLowerCase());
                    }}
                    placeholder="جستجوی ترتیب ها"
                    className="w-full h-full focus:placeholder:text-transparent bg-inherit text-[11px] font-medium leading-5 outline-none text-[#AAAAAA] placeholder:text-[#AAAAAE]"
                />

                <ul className={`fixed top-[120px] left-[50%] translate-x-[-50%] pl-5 pr-7 sliderContainer w-[95%] h-[82%] pb-20 mt-2 bg-white overflow-x-hidden overflow-y-scroll`}>
                    {cities.map((city, index) => (
                        <label key={index}
                            className={`w-full h-12 
                        ${city.name.toLowerCase().includes(valueInput) ? "block  overflow-x-hidden" : "hidden"}
                        border-b-[#0000001A] border-b-[1px] flex justify-start items-center gap-x-2`}
                        >
                            <input
                                onChange={validateArrange.bind(this)}
                                type="checkbox"
                                name={city.arrName}
                                value={city.name}
                                id={city.arrange}
                            />
                            {city.name}
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

export default OptionSelectArrange;