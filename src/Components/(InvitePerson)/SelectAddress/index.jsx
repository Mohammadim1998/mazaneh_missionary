"use client";
import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import Link from "next/link";
import ProgressBarMUI from "../Boxes/ProgressBarMUI";
import { useState } from "react";
import { dataAddress, steps } from "@/Components/Services";
import Box from "./Box";

const SelectAddress = () => {
    const [stepPage, setStepPage] = useState(0);

    return (
        <main className="relative w-full h-screen pt-14">
            <div className="z-20 absolute w-full top-0 left-0">
                <HeaderInviteBox href={"invitePerson"} title={"انتخاب آدرس"} />
            </div>

            <div className="py-2 w-full">
                {/* <ProgressBar /> */}
                <ProgressBarMUI stepPage={stepPage} steps={steps} />
                {/* End ProgressBar */}
            </div>

            <section className="relative w-full h-screen flex flex-col justify-between">
                <Link href={"/selectLocation"}>
                    <button className="absolute top-[38px] right-4 bg-[#B9976C] py-2 px-4 rounded-md text-white flex justify-center items-center gap-x-2 font-medium text-xs leading-5">
                        <div className="w-[14px] h-[14px] flex justify-center items-center"><img src="/images/svg/invite/locationWhite.svg" alt="" className="w-[11px] h-[11px]" /></div>
                        ثبت آدرس جدید
                    </button>
                </Link>

                <div className="w-full h-full mt-[100px] px-4">
                    <div className="w-full flex flex-col gap-y-4">
                        {dataAddress.map((address) => (
                            <Box key={address.id} data={address} />
                        ))}
                    </div>
                </div>
                <Link href={"/dateMissionary"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                    <button onClick={() => setStepPage(1)}
                        className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید مکان جلسه</button>
                </Link>

            </section>

        </main>
    );
}

export default SelectAddress;