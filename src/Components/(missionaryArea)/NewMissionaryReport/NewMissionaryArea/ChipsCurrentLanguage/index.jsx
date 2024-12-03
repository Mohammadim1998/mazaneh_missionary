import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsCurrentLanguage = ({ sendToCurrentLanguageState }) => {
    const [ceremony, setCeremony] = useState([]);

    const validateIputs = (event) => {
        let fruit = event.target.value;
        let check = event.target.checked;

        if (check) {
            const result = ceremony.find(item => item == fruit);
            if (!result) {
                setCeremony([...ceremony, fruit]);
            }
        } else if (!check) {
            const newArr = ceremony.filter((item) => item !== fruit);
            setCeremony([...newArr]);
        }
    }

    useEffect(() => {
        sendToCurrentLanguageState(ceremony);
    }, [ceremony]);

    return (
        <div className="w-full h-full">
            <div className="ceremonyChipsTags w-full h-full grid grid-cols-4 justify-start items-center gap-x-2">

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"فارسی"}
                        id='language1'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language1'
                        className={`${ceremony.includes("فارسی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        فارسی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"ترکی"}
                        id='language2'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language2'
                        className={`${ceremony.includes("ترکی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        ترکی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"عربی"}
                        id='language3'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language3'
                        className={`${ceremony.includes("عربی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        عربی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"انگلیسی "}
                        id='language4'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language4'
                        className={`${ceremony.includes("انگلیسی ") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        انگلیسی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"اسپانیایی"}
                        id='language5'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language5'
                        className={`${ceremony.includes("اسپانیایی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        اسپانیایی
                    </label>
                </div>
                
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"لری"}
                        id='language6'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language6'
                        className={`${ceremony.includes("لری") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        لری
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"کردی"}
                        id='language7'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language7'
                        className={`${ceremony.includes("کردی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        کردی
                    </label>
                </div>
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"بلوچی"}
                        id='language8'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='language8'
                        className={`${ceremony.includes("بلوچی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        بلوچی
                    </label>
                </div>

            </div>
        </div>
    );
}

export default ChipsCurrentLanguage;