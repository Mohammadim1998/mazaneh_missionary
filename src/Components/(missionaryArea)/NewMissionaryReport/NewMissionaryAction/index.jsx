"use client";
import Link from "next/link";
import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import { VscCloudUpload } from "react-icons/vsc";
import ChipsAction from "./ChipsAction";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBarMUI from "../../../module/ProgressBarMUI";
import { steps } from "@/Components/Services";

const NewMissionaryAction = () => {
    const [chipsActionState, setChipsActionState] = useState([]);

    const sendToActionState = (data) => {
        setChipsActionState([...data])
    }

    const router = useRouter();
    const [stepPage, setStepPage] = useState(4);

    return (
        <div className="w-full">
            <HeaderInviteBox title={"انتخاب نوع مبلغ"} href={"newMissionaryArea"} />

            <div className="w-full py-2 border-b-[1px] border-b-gray-300">
                {/* <ProgressBar /> */}
                <ProgressBarMUI stepPage={stepPage} steps={steps} />
                {/* End ProgressBar */}
            </div>

            <div className="w-full px-4 mt-12">
                <h1 className="mb-12 flex justify-center">اطلاعات فعالیت های خود را وارد کنید</h1>

                <form className="">
                    <div className="w-full">

                        <div className="w-full mb-4">
                            <div className="mb-2">در چه موضوعی صحبت کرده اید؟</div>
                            <div className="w-full">
                                <textarea className="w-full border-[1px] border-yellow-500 rounded-md py-2 px-4" placeholder="موضوع خود را تایپ کنید..."></textarea>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="mb-2">خلاصه محتوای ارائه شده</div>

                            <div className="w-full grid grid-cols-[2fr,1fr] gap-x-4">
                                <textarea className="w-full border-[1px] border-yellow-500 rounded-md py-2 px-4" placeholder="موضوع خود را تایپ کنید..."></textarea>
                                <div className="flex justify-center items-center gap-x-2 border-[1px] border-yellow-500 rounded-lg">
                                    بارگذاریpdf
                                    <VscCloudUpload className="w-6 h-6" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-8">
                            <div className="text-[#4f4f4f] font-medium text-xs leading-5 mb-4">درصد فرق و مذاهب</div>
                            <ChipsAction sendToActionState={sendToActionState} />
                        </div>

                    </div>
                </form>
            </div>

            <div className="w-full px-4 mt-4">

                <div className="flex flex-col justify-center items-center">
                    <h1 className="mb-3">آیا از محتوا های تولیدی سامانه شمع استفاده کرده اید؟</h1>
                    <div className="w-full flex justify-center items-center gap-x-4 px-12">
                        <div onClick={() => router.push("/newMissionaryActionContent")} className="border-[#E1E2E6] border-[1px] px-12 py-1 rounded-2xl cursor-pointer">بله</div>
                        <div onClick={() => {
                            router.push("/newMissionarySuccess");
                            setStepPage(5);
                        }} className="border-[#E1E2E6] border-[1px] px-12 py-1 rounded-2xl cursor-pointer">خیر</div>
                    </div>
                </div>

            </div>

            <Link href={"/newMissionaryActionContent"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                <button onClick={() => setStepPage(5)} className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید مکان جلسه</button>
            </Link>

        </div>
    );
}

export default NewMissionaryAction;