import React, { useEffect, useState } from 'react';
import "./styles.css";

const ChipsMissionary = ({ sendToMissionaryState }) => {
    const [missionary, setMissionary] = useState([]);

    const validateIputs = (event) => {
        let fruit = event.target.value;
        let check = event.target.checked;

        if (check) {
            const result = missionary.find(item => item == fruit);
            if (!result) {
                setMissionary([...missionary, fruit]);
            }
        } else if (!check) {
            const newArr = missionary.filter((item) => item !== fruit);
            setMissionary([...newArr]);
        }
    }
    useEffect(() => {
        sendToMissionaryState(missionary)
    }, [missionary]);


    return (
        <div className="w-full h-full">
            <div className="missionaryChipsTags w-full h-full p-4 grid grid-cols-2 justify-center items-center gap-x-2">

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"فن بیان"}
                        id='tag1'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag1'
                        className={`${missionary.includes("فن بیان") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        فن بیان
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"ادعیه خوانی"}
                        id='tag2'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag2'
                        className={`${missionary.includes("ادعیه خوانی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        ادعیه خوانی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"مداحی"}
                        id='tag3'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag3'
                        className={`${missionary.includes("مداحی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        مداحی
                    </label>
                </div>

                <div className="relative cursor-pointer">
                    <input
                        onChange={validateIputs.bind(this)}
                        value={"روضه خوانی"}
                        id='tag4'
                        readOnly
                        type="checkbox"
                    />
                    <label
                        htmlFor='tag4'
                        className={`${missionary.includes("روضه خوانی") ? "text-white" : "text-[#757579]"} absolute top-0 left-0 bg-transparent font-medium text-xs leading-5 rounded-lg flex justify-center items-center text-center`}>
                        روضه خوانی
                    </label>
                </div>
            </div>
        </div >
    );
}

export default ChipsMissionary;