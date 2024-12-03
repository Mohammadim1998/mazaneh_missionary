"use client";
import HeaderInviteBox from "@/Components/(InvitePerson)/Boxes/HeaderInviteBox";
import ProgressBar from "@/Components/(InvitePerson)/Boxes/ProgressBar";
import Link from "next/link";
import { useState } from "react";
import ChipsLangs from "./ChipsLangs";
import ChipsCeremony from "./ChipsCeremony";
import ChipsMissionary from "./ChipsMissionary";
import ProgressBarMUI from "@/Components/(InvitePerson)/Boxes/ProgressBarMUI";
import { steps } from "@/Components/Services";

const MissionaryAction = () => {
    const [showModal, setShowModal] = useState(false);

    const [chipsMissionaryState, setChipsMissionaryState] = useState([]);
    const [chipsCeremonyState, setChipsCeremonyState] = useState([]);
    const [chipsLangsState, setChipsLangsState] = useState([]);

    const sendToMissionaryState = (data) => {
        setChipsMissionaryState([...data])
    }
    const sendToCeremonyState = (data) => {
        setChipsCeremonyState([...data])
    }
    const sendToLangsState = (data) => {
        setChipsLangsState([...data])
    }


    const handleDatas = () => {
        console.log("chipsMissionaryState ===>>>> ", chipsMissionaryState);
        console.log("___________________________________________________________");
        console.log("chipsCeremonyState ===>>>> ", chipsCeremonyState);
        console.log("___________________________________________________________");
        console.log("chipsLangsState ===>>>> ", chipsLangsState);
    }

    const [stepPage, setStepPage] = useState(4);

    return (
        <div className="relative w-full h-screen bg-[#E5E5E5] pt-[52px] pb-4">
            <div className="absolute w-full top-0 left-0 right-0">
                <HeaderInviteBox title={"فرم درخواست مبلغ"} href={"meetingInfos"} />
            </div>
            <section className="relative w-full flex flex-col justify-between h-full">
                <div className="z-10 absolute top-0 left-0 right-0 py-2 w-full bg-white">
                    {/* ProgressBar */}
                    <ProgressBarMUI stepPage={stepPage} steps={steps} />
                    {/* End ProgressBar */}
                </div>

                <div className="w-full h-full bg-white mt-[80px] p-4">
                    <form className="w-full">
                        <div className="w-full">
                            <div className="text-[#4f4f4f] font-medium text-xs leading-5 mb-[6px]">۱. مبلغ برای برگزاری مراسم، چه حرفه هایی داشته باشد؟</div>
                            <div>
                                <ChipsMissionary sendToMissionaryState={sendToMissionaryState} />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <div className="text-[#4f4f4f] font-medium text-xs leading-5 mb-[6px]">۲. غیر از اجرای مراسم چه فعالیت های دیگری نیز انجام دهد؟</div>
                            <div>
                                <ChipsCeremony sendToCeremonyState={sendToCeremonyState} />
                            </div>
                        </div>

                        <div className="w-full mt-4">
                            <div className="text-[#4f4f4f] font-medium text-xs leading-5 mb-[6px]">۲. غیر از اجرای مراسم چه فعالیت های دیگری نیز انجام دهد؟</div>
                            <div>
                                <ChipsLangs sendToLangsState={sendToLangsState} />
                            </div>
                        </div>
                    </form>
                </div>

                {/* <Link href={"/missionaryAction"}> */}
                <div className="fixed h-[70px] bottom-0 left-0 right-0 flex justify-center items-center bg-white box-shadow-[0px_-1px_9px_0px_#1D266C26] px-4 z-20">
                    <button
                        onClick={() => {
                            setShowModal(true);
                            handleDatas();
                        }}
                        className="w-full h-10 bg-[#5461CA] text-white rounded">ادامه</button>
                </div>
                {/* </Link> */}
            </section>


            <div className={showModal
                ? "z-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex w-[328px] h-[360px] bg-white rounded-lg p-4"
                : "z-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden w-[328px] h-[360px] bg-white rounded-lg p-4"
            }>
                <div className="w-full h-full bg-inherit">
                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <div className="w-[53px] h-[50px]"><img src="/images/svg/invite/warning2.svg" alt="" className="" /></div>
                        <span className="text-[#4f4f4f] font-semibold text-base leading-6">میزبان گرامی؛</span>
                    </div>

                    <p className="text-[#616161] font-medium text-xs leading-5 text-right mt-2 mb-[10px]">
                        باتوجه به مواردی که در ذیل ذکر شده، ممکن است فرایند اعلام آمادگی مبلغین به طول بیانجامد:
                    </p>

                    <div className="w-full flex flex-col gap-y-2">
                        <div className="flex justify-start items-center gap-x-2">
                            <div className="flex justify-center items-center gap-x-[6px]">
                                <div className="w-4 h-4"><img src="/images/svg/invite/clock.svg" alt="" className="w-4 h-4" /></div>
                                <div className="font-normal text-[#4F4F4F] text-xs leading-5">تاریخ جلسه:</div>
                            </div>
                            <span className="font-medium text-[#4f4f4f] text-sm">تاریخ مراسم بسیار نزدیک است </span>
                        </div>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className="flex justify-center items-center gap-x-[6px]">
                                <div className="w-4 h-4"><img src="/images/svg/invite/calander.svg" alt="" className="w-4 h-4" /></div>
                                <div className="font-normal text-[#4F4F4F] text-xs leading-5">زمان جلسه:</div>
                            </div>
                            <span className="font-medium text-[#4f4f4f] text-sm">ساعت مراسم بد موقع است</span>
                        </div>
                        <div className="flex justify-start items-center gap-x-2">
                            <div className="flex justify-center items-center gap-x-[6px]">
                                <div className="w-4 h-4"><img src="/images/svg/invite/gift.svg" alt="" className="w-4 h-4" /></div>
                                <div className="font-normal text-[#4F4F4F] text-xs leading-5">هدیه تبلیغی:</div>
                            </div>
                            <span className="font-medium text-[#4f4f4f] text-sm">جلسه حق القدم ندارد</span>
                        </div>
                    </div>

                    <p className="mt-4 text-[#616161] text-xs leading-5 text-right">
                        درصورت تمایل میتوانید با انتخاب گزینه ویرایش موارد ذکر شده را تغییر دهید.
                    </p>

                    <div className="w-full mt-4 flex justify-center items-center child:font-medium child:text-sm child:rounded gap-x-4">
                        <Link href={"/editForm"}>
                            <button className="w-[140px] h-8 bg-[#318FA8]  text-[#FFFFFF]">ویرایش</button>
                        </Link>
                        <button className="w-[140px] h-8 text-[#318FA8] border-[1px] border-[#318FA8]">ثبت اطلاعات</button>
                    </div>
                </div>
            </div>
            {/************* OVERLAY ***************/}
            <div
                onClick={() => {
                    setShowModal(false);
                    setStepPage(5)
                }}

                className={showModal
                    ? "z-20 absolute top-0 bottom-0 left-0 right-0 bg-[#0000008C] w-full h-full flex justify-center items-center"
                    : "z-20 absolute top-0 bottom-0 left-0 right-0 bg-[#0000008C] w-full h-full hidden justify-center items-center"}>
            </div>
        </div>
    );
}

export default MissionaryAction;