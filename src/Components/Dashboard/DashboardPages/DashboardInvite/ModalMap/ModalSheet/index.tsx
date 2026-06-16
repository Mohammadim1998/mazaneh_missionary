import Link from "next/link";

const ModalSheet = ({ dataMap, openModalSheet }) => {
    return (
        <div className={`z-50 absolute bottom-6 left-4 right-4 h-[143px] p-[12px_12px_16px_16px] rounded-[10px] bg-white shadow-[0px_0px_6px_1px_#00000026] transition-all duration-200`}>
            <div className="flex gap-x-4 mb-6">
                <div className="shrink-0 w-[72px] h-[72px] rounded-md"><img src={dataMap.img} alt="" className="w-full h-full rounded-md" /></div>

                <div className="w-full">
                    <div className="text-[#3A3A3A] font-extrabold text-xs leading-5 mb-2">{dataMap.title}</div>
                    <address className="text-[#818181] font-medium text-xs leading-4">{dataMap.address}</address>
                </div>
            </div>

            <div className="w-full flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-[14px] h-[14px]"><img src="/images/svg/invite/star.svg" alt="" className="" /></div>
                    <span className="text-[#000000] font-bold text-xs leading-4 mr-[3px] ml-[6px]">{dataMap.score.toLocaleString("fa-IR")}</span>
                    <span className="text-[#3A3A3AB2] font-normal text-xs leading-5">({dataMap.meets.toLocaleString("fa-IR")}  دیدگاه)</span>
                </div>

                <Link href={`/capacityPage/${dataMap.id}`} className="flex justify-center items-center gap-x-1 cursor-pointer">
                    <span className="text-[#2B39A1] font-bold text-xs leading-5">اطلاعات بیشتر</span>
                    <div className="w-[14px] h-[14px]"><img src="/images/svg/invite/leftArrow.svg" alt="" className="" /></div>
                </Link>
            </div>
        </div>
    );
}

export default ModalSheet;