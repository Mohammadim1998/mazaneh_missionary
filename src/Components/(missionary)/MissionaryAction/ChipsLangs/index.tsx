import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsLangs = ({ sendToLangsState }) => {
    const [langs, setLangs] = useState([]);

    const validateIputs = (event) => {
        let fruit = event.target.value;
        let check = event.target.checked;

        if (check) {
            const result = langs.find(item => item == fruit);
            if (!result) {
                setLangs([...langs, fruit]);
            }
        } else if (!check) {
            const newArr = langs.filter((item) => item !== fruit);
            setLangs([...newArr]);
        }
    }
    useEffect(() => {
        sendToLangsState(langs);
    }, [langs]);

    return (
        <div className="w-full h-full">

            <div className="langsChipsTags w-full h-full p-4 grid grid-cols-3 justify-start items-center gap-x-4">
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"فارسی"}
                        id='tag10'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag10'
                        className={`${langs.includes("فارسی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        فارسی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"عربی"}
                        id='tag11'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag11'
                        className={`${langs.includes("عربی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        عربی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"آذری"}
                        id='tag12'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag12'
                        className={`${langs.includes("آذری") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        آذری
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"کردی"}
                        id='tag13'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag13'
                        className={`${langs.includes("کردی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        کردی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"ترکمنی"}
                        id='tag14'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag14'
                        className={`${langs.includes("ترکمنی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        ترکمنی
                    </label>
                </div>
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"لری"}
                        id='tag15'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag15'
                        className={`${langs.includes("لری") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        لری
                    </label>
                </div>
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"بلوچی"}
                        id='tag16'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag16'
                        className={`${langs.includes("بلوچی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        بلوچی
                    </label>
                </div>
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"سایر"}
                        id='tag17'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag17'
                        className={`${langs.includes("سایر") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        سایر
                    </label>
                </div>
            </div>
        </div >
    );
}

export default ChipsLangs;