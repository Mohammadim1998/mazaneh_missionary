"use client";
import HeaderInviteBox from "../Boxes/HeaderInviteBox";
import OptionSelect from "./OptionSelect";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateAddress = () => {
    const [kindPlace, setKindPlace] = useState("");
    const router = useRouter();

    return (
        <main className="relative w-full h-screen">
            <div className="absolute top-0 left-0 w-full">
                <HeaderInviteBox href={"selectLocation"} title={"ایجاد آدرس"} />
            </div>

            <section className="w-full h-screen px-4 flex flex-col justify-between">
                <div className="flex flex-col pt-[68px]">
                    <div className="flex flex-col">
                        <label htmlFor="selectADV" className="text-[#757579] mb-2 font-medium text-xs leading-5">
                            نوع مکان
                        </label>
                        <OptionSelect setKindPlace={setKindPlace} />
                    </div>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="locName" className="text-[#757579] mb-2 font-medium text-xs leading-5">
                            نام مکان
                        </label>
                        <input
                            type="text"
                            id="locName" placeholder="وارد کردن نام مکان" className="w-full border-[1px] focus:placeholder:text-transparent border-[#E1E2E6] rounded-[6px] p-[10px_16px_10px_16px] outline-none text-[#4f4f4f] placeholder:text-[#AAAAAACC] font-normal text-xs leading-5"
                        />
                        <div className="flex justify-start items-center gap-x-1 mt-[6px]">
                            <span className="w-4 h-4 flex justify-center items-center"><img src="/images/svg/invite/warning.svg" alt="" className="w-[15px] h-[15px]" /></span>
                            <span className="text-[#909094] font-normal text-[11px] leading-4">مانند: روضه خانگی؛ هیئت هفتگی جنت العباس و ...</span>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="locName" className="text-[#757579] mb-2 font-medium text-xs leading-5">
                            جزئیات آدرس
                        </label>
                        <input
                            type="text"
                            id="locName" placeholder="جزئیات آدرس خود را وارد نمایید" className="w-full border-[1px] border-[#E1E2E6] rounded-[6px] p-[10px_16px_10px_16px] focus:placeholder:text-transparent outline-none text-[#4f4f4f] placeholder:text-[#AAAAAACC] font-normal text-xs leading-5"
                        />
                        <div className="flex justify-start items-center gap-x-1 mt-[6px]">
                            <span className="w-4 h-4 flex justify-center items-center"><img src="/images/svg/invite/warning.svg" alt="" className="w-[15px] h-[15px]" /></span>
                            <span className="text-[#909094] font-normal text-[11px] leading-4">مثال: پلاک ۶۸، واحد ۲</span>
                        </div>
                    </div>
                </div>

                <Link href={"/dateMissionary"} className={"fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20"}>
                    <button className="bg-[#5461CA] rounded-[4px] w-full h-10 text-white font-medium text-sm leading-5">تایید آدرس</button>
                </Link>
            </section>
        </main>
    );
}

export default CreateAddress;