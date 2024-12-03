const BannerContentDashboard = ({title,subTitle}) => {
    return (
                <div className="w-full relative flex justify-center items-center rounded-xl">
                    <img src="/images/banner.jpg" alt="advDashboard" className="w-full rounded-xl" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center w-full h-full pr-5 py-6 pl-[18px]">
                        <div className="flex flex-col text-[#FFFFFF] text-xs leading-4 text-right gap-y-[11px]">
                            <h1 className="font-bold Medium">{title}</h1>
                            <h1 className="font-medium ">{subTitle}</h1>
                        </div>

                        <div className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full bg-[#FFFFFF]">
                            <img src="/images/svg/leftArrowSharp.svg" alt="" className="w-4 h-4 text-[#1D266C]" />
                        </div>
                    </div>
                </div>
    );
}

export default BannerContentDashboard;