import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsDangerous = ({ sendToDangerousState }) => {
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
        sendToDangerousState(ceremony);
    }, [ceremony]);

    return (
        <div className="w-full h-full">
            <div className="ceremonyChipsTags w-full h-full grid grid-cols-4 justify-start items-center gap-x-2">

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"اعتیاد"}
                        id='dangerous1'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='dangerous1'
                        className={`${ceremony.includes("اعتیاد") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        اعتیاد
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"دزدی"}
                        id='dangerous2'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='dangerous2'
                        className={`${ceremony.includes("دزدی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        دزدی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"قاجاق"}
                        id='dangerous3'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='dangerous3'
                        className={`${ceremony.includes("قاجاق") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        قاجاق
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"فقر "}
                        id='dangerous4'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='dangerous4'
                        className={`${ceremony.includes("فقر ") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        فقر
                    </label>
                </div>

            </div>
        </div>
    );
}

export default ChipsDangerous;