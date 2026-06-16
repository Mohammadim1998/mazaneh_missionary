import Link from "next/link";
import EditCertification from "./EditCertification";
import SuccessCertification from "./SuccessCertification";
import DeniedCertification from "./DeniedCertification";

const SelectDestinationInstitution = () => {
    return (
        <div className="w-full h-dvh bg-[#F0F0F1]">
            {/** Header **/}
            <div className="w-full h-10 bg-[#5461CA] px-4 flex items-center">
                <div className="flex justify-start items-center gap-x-2">
                    <Link href={"/dashboardHome"}>
                        <div className="w-[14px] h-[14px]"><img src="/images/svg/certification/arrowRight.svg" alt="" className="" /></div>
                    </Link>

                    <span className="font-medium text-white text-sm leading-5">گواهی تبلیغی</span>
                </div>
            </div>
            {/** End Header **/}

            {/** GetCertification **/}
            <div className="w-full bg-white p-[16px_16px_24px_16px] flex flex-col gap-y-4 mb-2">
                <span className="text-[#1D256D] font-semibold text-xs leading-5">درخواست صدور گواهی جدید</span>

                <Link href={"/newCertification"}>
                    <button className="w-full h-[38px] bg-[#6C7DFF0F] border-[1px] border-[#5461CA] shadow-[0px_1px_3px_0px_#00000033] rounded flex justify-center items-center gap-x-2">
                        <div className="w-3 h-3"><img src="/images/svg/plus.svg" alt="" className="" /></div>
                        <span className="text-[#5461CA] font-semibold text-sm">گواهی جدید</span>
                    </button>
                </Link>

            </div>
            {/** End GetCertification **/}

            {/** Request Previously Certification **/}
            <div className="w-full bg-white p-4">
                <div className="w-full">
                    <div className="text-[#1D256D] font-semibold text-xs leading-5 mb-4">درخواست‌های گواهی قبلی</div>

                    <div className="w-full flex mb-[18px] items-center child:shrink-0 gap-x-[9px] overflow-x-scroll sliderContainer">
                        <div className="h-[31px] flex justify-center items-center gap-x-[6px] border-[1px] border-[#00000026] rounded-2xl p-[6px_12px_6px_12px]">
                            <div className="w-4 h-4"><img src="/images/svg/certification/sort.svg" alt="" className="" /></div>

                            <span className="text-[#4F4F4F] font-normal text-xs">مرتب سازی</span>
                        </div>

                        <div className="h-[31px] flex justify-center items-center gap-x-[6px] border-[1px] border-[#00000026] rounded-2xl p-[6px_12px_6px_12px]">
                            <div className="w-4 h-4"><img src="/images/svg/certification/confirm.svg" alt="" className="" /></div>

                            <span className="text-[#4F4F4F] font-normal text-xs">تایید شده</span>
                        </div>

                        <div className="h-[31px] flex justify-center items-center gap-x-[6px] border-[1px] border-[#00000026] rounded-2xl p-[6px_12px_6px_12px]">
                            <div className="w-4 h-4"><img src="/images/svg/certification/denied.svg" alt="" className="" /></div>

                            <span className="text-[#4F4F4F] font-normal text-xs">رد شده</span>
                        </div>

                        <div className="h-[31px] flex justify-center items-center gap-x-[6px] border-[1px] border-[#00000026] rounded-2xl p-[6px_12px_6px_12px]">
                            <div className="w-4 h-4"><img src="/images/svg/certification/waiting.svg" alt="" className="" /></div>

                            <span className="text-[#4F4F4F] font-normal text-xs">در انتظار</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-y-4">
                        <DeniedCertification denied={"درخواست شما توسط شهرستان به علت عدم مطابقت تاریخ رد شد"} />
                        <DeniedCertification denied={"درخواست شما توسط مرکز رد شد"} />
                        <EditCertification />
                        <SuccessCertification />
                        <DeniedCertification denied={"درخواست شما رد شد"} />
                        <DeniedCertification denied={"درخواست شما به دلیل عدم مطابقت زمان رد گردید"} />
                        <DeniedCertification denied={"درخواست شما توسط شهرستان رد گردید"} />
                    </div>

                </div>
            </div>
            {/** End Request Previously Certification **/}

        </div>
    )
}

export default SelectDestinationInstitution;