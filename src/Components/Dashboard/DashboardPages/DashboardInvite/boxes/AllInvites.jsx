import ProgressBarMUI from "@/Components/module/ProgressBarMUI";

const AllInvites = ({ title, address, kind, count, stepPage }) => {

    return (
        <div className="w-full flex flex-col bg-white rounded-lg p-3 shadow-[0px_0px_1px_1px_#00000026]">
            <div className="w-full h-[72px] flex">

                <div className="shrink-0 w-12 h-full flex justify-center items-center flex-col gap-y-3 bg-[#F2F2F2] rounded-md">
                    <div className="w-7 h-7"><img src="/images/svg/home/soundLetter.svg" alt="" className="" /></div>

                    <div className="text-[#787878] font-semibold text-[10px]">
                        <span className="">{count.toLocaleString("fa-ir")}</span>
                        <span className="mr-1">روز</span>
                    </div>
                </div>


                <div className="w-full h-full  mr-4">
                    <span className="text-[#4F4F4F] mb-[2px] font-medium text-xs leading-5 line-clamp-1">{title}</span>

                    <div className="flex gap-x-1 justify-start items-center mb-2">
                        <div className="w-[14px] h-[14px]"><img src="/images/svg/home/location.svg" alt="" className="" /></div>
                        <div className="text-[#787878] font-semibold text-[10px] leading-5">{address}</div>
                    </div>

                    <div className="flex gap-x-1 justify-start items-center">
                        <div className="w-[14px] h-[14px]"><img src="/images/svg/home/calendar.svg" alt="" className="" /></div>
                        <div className="text-[#787878] font-semibold text-[10px] leading-5">{kind}</div>
                    </div>

                </div>

                <div className="shrink-0 w-[60px] h-[23px] flex justify-center items-center mr-8 bg-[#E8990814] rounded">
                    <span className="text-[#CB8709] font-normal text-xs leading-5">در حال اجرا</span>
                </div>
            </div>

            <div className="w-full my-6">
                {/* <ProgressBar /> */}
                <ProgressBarMUI stepPage={stepPage} />
            </div>

            <div className="shrink-0 w-full h-[70px] flex flex-col gap-y-4">
                <span className="text-[#3A3A3A] font-normal text-xs leading-5">در انتظار اعلام آمادگی مبلغ انتخاب شده...</span>

                <button className="shrink-0 w-full h-[35px] rounded font-medium text-white bg-[#5462CA]">تایید سخنران</button>
            </div>
        </div>
    );
}

export default AllInvites;