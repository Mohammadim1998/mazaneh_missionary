import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsCeremony = ({ sendToCeremonyState }) => {
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
        sendToCeremonyState(ceremony);
    }, [ceremony]);

    return (
        <div className="w-full h-full">
            <div className="ceremonyChipsTags w-full h-full p-4 grid grid-cols-3 justify-start items-center gap-x-2">

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"نماز جماعت"}
                        id='tag5'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag5'
                        className={`${ceremony.includes("نماز جماعت") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        نماز جماعت
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"چهره به چهره"}
                        id='tag6'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag6'
                        className={`${ceremony.includes("چهره به چهره") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        چهره به چهره
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"فعالیت فرهنگی"}
                        id='tag7'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag7'
                        className={`${ceremony.includes("فعالیت فرهنگی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        فعالیت فرهنگی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"سایر "}
                        id='tag8'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag8'
                        className={`${ceremony.includes("سایر ") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        سایر
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"هیچکدام"}
                        id='tag9'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag9'
                        className={`${ceremony.includes("هیچکدام") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        هیچکدام
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ChipsCeremony;