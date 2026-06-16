const HeaderTitle = ({ title, subTitle }) => {
    return (
        <div className="flex justify-between items-center">
            <span className="font-medium text-sm text-[#4F4F4F] leading-3">{title}</span>

            {subTitle && (
                <div className="flex items-center gap-x-1">
                    <span className="font-light text-xs leading-3 text-[#318FA8]">{subTitle}</span>
                    <div className="w-4 h-4"><img src="/images/svg/dashboard/home/leftArrowTeal.svg" alt="" className="w-full h-full" /></div>
                </div>
            )}
        </div>
    );
}

export default HeaderTitle;