import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsSocialActions = ({ sendToSocialActions }) => {
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
        sendToSocialActions(ceremony);
    }, [ceremony]);

    return (
        <div className="w-full h-full">
            <div className="ceremonyChipsTags w-full h-full p-4 grid grid-cols-3 justify-start items-center gap-x-2">

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"نماز جماعت"}
                        id='social1'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='social1'
                        className={`${ceremony.includes("نماز جماعت") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        نماز جماعت
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"چهره به چهره"}
                        id='social2'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='social2'
                        className={`${ceremony.includes("چهره به چهره") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        چهره به چهره
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"فعالیت فرهنگی"}
                        id='social3'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='social3'
                        className={`${ceremony.includes("فعالیت فرهنگی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        فعالیت فرهنگی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"سایر "}
                        id='social4'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='social4'
                        className={`${ceremony.includes("سایر ") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        سایر
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"هیچکدام"}
                        id='social5'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='social5'
                        className={`${ceremony.includes("هیچکدام") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        هیچکدام
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ChipsSocialActions;