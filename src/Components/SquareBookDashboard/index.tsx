import Link from "next/link";

const SquareBookDashboard = ({ img, title, subTitle, score }) => {
    return (
        <Link href={"/bookMissionary/1"}>
            <div className="shrink-0 w-[234px] bg-[#FFFFFF] h-24 rounded-lg shadow-[0px_2px_2px_0px_#00000026] flex justify-center items-center gap-x-4 p-3">
                <div className="shrink-0 w-[50px] h-[70px] flex justify-center rounded-md">
                    <img src={img} alt="daicon-1" className="w-full h-full rounded-md shadow-[0px_2px_4px_0px_#00000040]" />
                </div>

                <div className="w-full flex flex-col justify-center items-start pt-2">
                    <span className="text-[#4F4F4F] font-medium text-xs leading-5 mb-1">{title}</span>
                    <span className="text-[#787878] font-normal text-xs leading-5 mb-[6px]">{subTitle}</span>

                    <div className="w-[53px] h-[22px] flex items-center justify-center gap-x-1 bg-[#F4F4F4] rounded-[32px]">
                        <div className="w-[14px] h-[14px]"><img src="/images/svg/home/star.svg" alt="" /></div>
                        <span className="text-[#787878] font-semibold text-[10px] leading-4">{score.toLocaleString("fa-IR")}</span>
                    </div>
                </div>
            </div >
        </Link>
    );
}

export default SquareBookDashboard;