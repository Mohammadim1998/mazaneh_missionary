"use client";
import Link from "next/link";
import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import ProgressBarMUI from "@/Components/(InvitePerson)/Boxes/ProgressBarMUI";
import { useState } from "react";
import { steps } from "@/Components/Services";

const NewMissionaryActionContent = () => {
    const [stepPage, setStepPage] = useState(4);

    return (
        <div className="w-full">
            <HeaderInviteBox title={"انتخاب نوع مبلغ"} href={"newMissionaryAction"} />

            <div className="w-full py-2 border-b-[1px] border-b-gray-300">
                {/* <ProgressBar /> */}
                <ProgressBarMUI stepPage={stepPage} steps={steps} />
                {/* End ProgressBar */}
            </div>

            <div className="w-full mt-4 px-4">
                <form className="w-full">
                    <div className="w-full mb-8">
                        <div className="mb-4 flex justify-start items-center">این محتوا را به چند نفر توانسته اید انتقال دهید؟</div>

                        <div className="w-44 h-10">
                            <input type="number" className="w-full h-full border-[#E1E2E6] border-[1px] rounded-md px-4 outline-none" placeholder="عدد وارد کنید" />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mb-4 flex justify-start items-center">واکنش مخاطبین به چه نحو بود؟</div>

                        <div className="w-full h-44 mx-auto">
                            <textarea className="w-full h-full border-[#E1E2E6] border-[1px] rounded-md px-4 py-2 outline-none" placeholder="واکنش مخاطبین را نسبت به این محتوا شرح دهید..."></textarea>
                        </div>
                    </div>

                </form>
            </div>

            <Link href={"/newMissionaryAction"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                <button onClick={() => setStepPage(5)} className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید مکان جلسه</button>
            </Link>
        </div >
    );
}

export default NewMissionaryActionContent;