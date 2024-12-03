"use client";
import { useEffect, useState } from "react";
import "./style.css"

const ChipsLangsResume = ({ sendToState }) => {
    const [languages, setLanguages] = useState([]);

    const validateLangs = (event) => {
        const check = event.target.checked;
        const value = event.target.value;

        if (check) {
            const result = languages.find((item) => item == value);
            if (!result) {
                setLanguages([...languages, value]);
            }
        } else if (!check) {
            const newArr = languages.filter((item) => item !== value);
            setLanguages([...newArr]);
        }
    }

    useEffect(() => {
        sendToState(languages);
    }, [languages])


    return (
        <>
            <div className='w-full'>
                <form className="chipsLangsInResumeTags w-full grid grid-cols-4 gap-x-4 gap-y-2 child:border-[1px] child:border-[#E1E2E6] child:rounded-lg">

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang1"
                            value={"فارسی"}
                        />
                        <label
                            htmlFor="lang1"
                            className={`${languages.includes("فارسی") ? "text-white" : "text-[#757579] "} absolute top-0 left-0 font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full`}>
                            فارسی
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang2"
                            value={"عربی"}
                        />
                        <label
                            htmlFor="lang2"
                            className={`${languages.includes("عربی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 text-[#757579] font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full bg-transparent`}>
                            عربی
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang3"
                            value={"آذری"}
                        />
                        <label
                            htmlFor="lang3"
                            className={`${languages.includes("آذری") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 text-[#757579] font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full bg-transparent`}>
                            آذری
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang4"
                            value={"کردی"}
                        />
                        <label
                            htmlFor="lang4"
                            className={`${languages.includes("کردی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 text-[#757579] font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full bg-transparent`}>
                            کردی
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang5"
                            value={"ترکمنی"}
                        />
                        <label
                            htmlFor="lang5"
                            className={`${languages.includes("ترکمنی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 text-[#757579] font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full bg-transparent`}>
                            ترکمنی
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang6"
                            value={"بلوچی"}
                        />
                        <label
                            htmlFor="lang6"
                            className={`${languages.includes("بلوچی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 text-[#757579] font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full bg-transparent`}>
                            بلوچی
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang7"
                            value={"سایر"}
                        />
                        <label
                            htmlFor="lang7"
                            className={`${languages.includes("سایر") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 text-[#757579] font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full bg-transparent`}>
                            سایر
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            onChange={validateLangs.bind(this)}
                            type="checkbox"
                            id="lang8"
                            value={"لری"}
                        />
                        <label
                            htmlFor="lang8"
                            className={`${languages.includes("لری") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 text-[#757579] font-normal text-xs leading-5 flex items-center justify-center rounded-lg w-full h-full bg-transparent`}>
                            لری
                        </label>
                    </div>

                </form>
            </div>
        </>
    );
}

export default ChipsLangsResume;