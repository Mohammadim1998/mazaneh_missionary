import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsReligious = ({ sendToReligiousState }) => {
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
        sendToReligiousState(ceremony);
    }, [ceremony]);

    return (
        <div className="w-full h-full">
            <div className="ceremonyChipsTags w-full h-full grid grid-cols-4 justify-start items-center gap-x-2">

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"شیعه"}
                        id='religious1'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious1'
                        className={`${ceremony.includes("شیعه") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        شیعه
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"سنی"}
                        id='religious2'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious2'
                        className={`${ceremony.includes("سنی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        سنی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"مسیحی"}
                        id='religious3'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious3'
                        className={`${ceremony.includes("مسیحی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        مسیحی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"زرتشتی "}
                        id='religious4'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious4'
                        className={`${ceremony.includes("زرتشتی ") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        زرتشتی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"اهل حق"}
                        id='religious5'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious5'
                        className={`${ceremony.includes("اهل حق") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        اهل حق
                    </label>
                </div>
                
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"ارمنی"}
                        id='religious6'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious6'
                        className={`${ceremony.includes("ارمنی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        ارمنی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"بهائیت"}
                        id='religious7'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious7'
                        className={`${ceremony.includes("بهائیت") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        بهائیت
                    </label>
                </div>
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"دراویش"}
                        id='religious8'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='religious8'
                        className={`${ceremony.includes("دراویش") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        دراویش
                    </label>
                </div>

            </div>
        </div>
    );
}

export default ChipsReligious;