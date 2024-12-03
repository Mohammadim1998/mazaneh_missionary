const BoxSearchHeader = ({title}) => {
    return (
        <div className="w-full flex justify-between items-center">
                    <span className="text-[#FFFFFF] text-sm font-semibold leading-5">{title}</span>

                    <div className="w-4 h-4 cursor-pointer"><img src="/images/svg/tabbar/search.svg" className="w-full h-full" /></div>
                </div>
    );
}

export default BoxSearchHeader;