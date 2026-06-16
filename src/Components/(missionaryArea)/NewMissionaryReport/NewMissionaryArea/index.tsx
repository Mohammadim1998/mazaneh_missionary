"use client";
import Link from "next/link";
import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import ChipsReligious from "./ChipsReligious";
import ChipsCurrentLanguage from "./ChipsCurrentLanguage";
import { useState } from "react";
import ChipsDangerous from "./ChipsDangerous";
import ProgressBarMUI from "../../../module/ProgressBarMUI";
import { steps } from "@/Components/Services";

const NewMissionaryArea = () => {
    const [chipsCurrentLanguageState, setChipsCurrentLanguageState] = useState([]);
    const [chipsReligiousState, setChipsReligiousState] = useState([]);
    const [chipsDangerousState, setChipsDangerousState] = useState([]);

    const sendToReligiousState = (data) => {
        setChipsReligiousState([...data])
    }

    const sendToCurrentLanguageState = (data) => {
        setChipsCurrentLanguageState([...data])
    }

    const sendToDangerousState = (data) => {
        setChipsDangerousState([...data])
    }

    const [stepPage, setStepPage] = useState(3);

    return (
        <div className="w-full">
            <HeaderInviteBox title={"انتخاب نوع مبلغ"} href={"newMissionaryContact"} />

            <div className="w-full py-2 border-b-[1px] border-b-gray-300">
                {/* <ProgressBar /> */}
                <ProgressBarMUI stepPage={stepPage} steps={steps} />
                {/* End ProgressBar */}
            </div>

            <div className="w-full px-4 mt-12">
                <form className="">
                    <div className="w-full mt-8">
                        <div className="text-[#4f4f4f] font-medium text-xs leading-5 mb-4">درصد فرق و مذاهب</div>
                        <ChipsDangerous sendToDangerousState={sendToDangerousState} />
                    </div>

                    <div className="w-full mt-8">
                        <div className="text-[#4f4f4f] font-medium text-xs leading-5 mb-4">زبان رایج</div>
                        <ChipsCurrentLanguage sendToCurrentLanguageState={sendToCurrentLanguageState} />
                    </div>

                    <div className="w-full mt-8">
                        <div className="text-[#4f4f4f] font-medium text-xs leading-5 mb-4">درصد فرق و مذاهب</div>
                        <ChipsReligious sendToReligiousState={sendToReligiousState} />
                    </div>

                </form>
            </div>

            <Link href={"/newMissionaryAction"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                <button onClick={() => setStepPage(4)} className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید مکان جلسه</button>
            </Link>
        </div>
    );
}

export default NewMissionaryArea;