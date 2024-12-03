import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsAction = ({ sendToActionState }) => {
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
        sendToActionState(ceremony);
    }, [ceremony]);

    return (
        <div className="w-full h-full">
            <div className="ceremonyChipsTags w-full h-full grid grid-cols-3 justify-start items-center gap-x-2">

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"سخنرانی"}
                        id='action1'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='action1'
                        className={`${ceremony.includes("سخنرانی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        سخنرانی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"میدانی"}
                        id='action2'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='action2'
                        className={`${ceremony.includes("میدانی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        میدانی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"کلاسداری"}
                        id='action3'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='action3'
                        className={`${ceremony.includes("کلاسداری") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        کلاسداری
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"چهره به چهره "}
                        id='action4'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='action4'
                        className={`${ceremony.includes("چهره به چهره ") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        چهره به چهره
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"استیج"}
                        id='action5'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='action5'
                        className={`${ceremony.includes("استیج") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        استیج
                    </label>
                </div>
                
                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"مشاوره"}
                        id='action6'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='action6'
                        className={`${ceremony.includes("مشاوره") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        مشاوره
                    </label>
                </div>

            </div>
        </div>
    );
}

export default ChipsAction;