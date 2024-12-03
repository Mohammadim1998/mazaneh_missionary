const EditCertification = () => {
    return (
        <div className="w-full border-[1px] border-[#E0DFDC] rounded-lg">
            <div className="w-full h-full flex flex-col gap-y-[10px] py-4 px-5">

                <div className="flex justify-start items-center gap-x-[6px]">
                    <div className="w-[13px] h-[13px]"><img src="/images/svg/certification/sign.svg" alt="" className="" /></div>

                    <div className="flex justify-center items-center">
                        <span className="text-[#828282B2] font-normal text-sm leading-5">شناسه:</span>
                        <span className="text-[#616161] font-normal text-sm leading-5 mr-1">۱۴۱۲</span>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-x-[6px]">
                    <div className="w-[13px] h-[13px]"><img src="/images/svg/certification/institution.svg" alt="" className="" /></div>

                    <div className="flex justify-center items-center">
                        <span className="text-[#828282B2] font-normal text-sm leading-5">نهاد:</span>
                        <span className="text-[#616161] font-normal text-sm leading-5 mr-1">سازمان تبلیغات اسلامی</span>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-x-[6px]">
                    <div className="w-[13px] h-[13px]"><img src="/images/svg/certification/calendar.svg" alt="" className="" /></div>

                    <div className="flex justify-center items-center">
                        <span className="text-[#828282B2] font-normal text-sm leading-5">از تاریخ:</span>
                        <span className="text-[#616161] font-normal text-sm leading-5 mr-1">۱۴۰۰/۱۲/۲۱</span>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-x-[6px]">
                    <div className="w-[13px] h-[13px]"><img src="/images/svg/certification/calendar.svg" alt="" className="" /></div>

                    <div className="flex justify-center items-center">
                        <span className="text-[#828282B2] font-normal text-sm leading-5">تا تاریخ:</span>
                        <span className="text-[#616161] font-normal text-sm leading-5 mr-1">۱۴۰۰/۱۲/۲۵</span>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-x-[6px]">
                    <div className="w-[13px] h-[13px]"><img src="/images/svg/certification/situation.svg" alt="" className="" /></div>

                    <div className="flex justify-center items-center">
                        <span className="text-[#828282B2] font-normal text-sm leading-5">وضعیت:</span>
                        <span className="text-[#616161] font-normal text-sm leading-5 mr-1">در انتظار بررسی شهرستان</span>
                    </div>
                </div>

            </div>


            <div className="shrink-0 w-full h-11 flex justify-center items-center border-t-[1px] border-dashed gap-x-[6px] ">
                <div className="w-4 h-4"><img src="/images/svg/certification/edit.svg" alt="" className="" /></div>
                <span className="text-[#1D266C] font-semibold text-sm leading-5">ویرایش</span>
            </div>
        </div>
    );
}

export default EditCertification;